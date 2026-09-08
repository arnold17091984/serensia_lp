import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, 'docs/marketing/improvement-plan.html');
let html = await readFile(source, 'utf8');
for (const match of html.matchAll(/<img\b[^>]*\bsrc="([^"#]+)"/g)) {
  const src = match[1];
  if (/^(?:https?:|data:)/.test(src)) continue;
  const file = resolve(dirname(source), src);
  if (!file.startsWith(`${root}/public/img/`)) throw new Error('Unexpected image path');
  const mime = { '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png' }[extname(file)];
  if (!mime) throw new Error('Unsupported image type');
  const bytes = await readFile(file);
  html = html.replaceAll(`src="${src}"`, `src="data:${mime};base64,${bytes.toString('base64')}"`);
}
const output = resolve(root, 'output/marketing/improvement-plan.html');
await mkdir(dirname(output), { recursive: true });
await writeFile(output, html);
console.log(`Standalone plan: ${output}`);
