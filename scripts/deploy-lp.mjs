import { readFile, access, mkdir, writeFile } from 'node:fs/promises';
import { parseEnv } from 'node:util';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const mode = process.argv[2];
if (!['--check', '--dry-run', '--deploy'].includes(mode)) throw new Error('Use --check, --dry-run, or --deploy');
const config = parseEnv(await readFile('/Users/maemuraeisuke/Documents/serenshia_lp/.env.deploy', 'utf8'));
if (config.DEPLOY_HOST !== '133.167.64.41' || !/^[a-z_][a-z0-9_-]*$/i.test(config.DEPLOY_USER ?? '') || !config.DEPLOY_PASS) {
  throw new Error('Deployment configuration does not match the documented P-9 server');
}
const target = `${config.DEPLOY_USER}@${config.DEPLOY_HOST}`;
const env = { ...process.env, SSHPASS: config.DEPLOY_PASS };
const sshOptions = ['-o', 'StrictHostKeyChecking=accept-new', '-o', 'ConnectTimeout=15'];
function run(args, timeout = 120000) {
  const result = spawnSync('sshpass', ['-e', ...args], { cwd: root, env, encoding: 'utf8', timeout, maxBuffer: 2 * 1024 * 1024 });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.error || result.status !== 0) throw new Error(`Deployment command failed (${result.error?.code ?? result.status})`);
}
if (mode === '--check') {
  run(['ssh', ...sshOptions, target, 'test -d /var/www/serenshia && test -f /var/www/serenshia/index.html && printf "P-9 web root verified\\n"']);
} else {
  await access(resolve(root, 'out/index.html'));
  const index = await readFile(resolve(root, 'out/index.html'), 'utf8');
  if (!index.includes('price-overview') || !index.includes('写真がなくても')) throw new Error('Expected improvements are missing from the static build');
  const stamp = new Date().toISOString().replaceAll(/[^0-9]/g, '').slice(0, 14);
  const backup = `$HOME/serenshia-backups/serenshia-${stamp}.tgz`;
  if (mode === '--deploy') run(['ssh', ...sshOptions, target, `umask 077 && mkdir -p "$HOME/serenshia-backups" && tar -czf "${backup}" -C /var/www/serenshia . && test -s "${backup}"`]);
  // Preserve unrelated and old assets; only publish Next's static output, never internal docs.
  run(['rsync', '-az', '--itemize-changes', ...(mode === '--dry-run' ? ['--dry-run'] : []), '-e', 'ssh -o StrictHostKeyChecking=accept-new -o ConnectTimeout=15', 'out/', `${target}:/var/www/serenshia/`]);
  if (mode === '--deploy') {
    await mkdir(resolve(root, 'output/marketing'), { recursive: true });
    await writeFile(resolve(root, 'output/marketing/deployment.json'), JSON.stringify({ projectId: 'P-9', deployedAt: new Date().toISOString(), backup, url: 'https://tokuso-serenshia.com/' }, null, 2));
    console.log(`Backup: ${backup}`);
  }
}
