import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { parseEnv } from 'node:util';
import { spawnSync } from 'node:child_process';
import { homedir } from 'node:os';

const config = parseEnv(await readFile(`${homedir()}/.config/google-ads-mcp/env`, 'utf8'));
const python = `${homedir()}/Library/Application Support/pipx/venvs/google-ads-mcp/bin/python`;
// Use the installed official SDK and ADC without exposing or rewriting credentials.
const code = `
import json, os
import google.auth
from google.auth.transport.requests import Request
from google.ads.googleads.client import GoogleAdsClient
try:
    credentials, _ = google.auth.default(scopes=['https://www.googleapis.com/auth/adwords'])
    credentials.refresh(Request())
    client = GoogleAdsClient(credentials=credentials, developer_token=os.environ['GOOGLE_ADS_DEVELOPER_TOKEN'], login_customer_id=os.environ.get('GOOGLE_ADS_LOGIN_CUSTOMER_ID'), use_proto_plus=True)
    service = client.get_service('GoogleAdsService')
    query = "SELECT segments.date, metrics.clicks, metrics.impressions, metrics.cost_micros, metrics.conversions FROM customer WHERE segments.date BETWEEN '2026-09-01' AND '2026-09-07'"
    rows = service.search(customer_id='5349116666', query=query, timeout=20)
    data = [{'date':r.segments.date, 'clicks':r.metrics.clicks, 'impressions':r.metrics.impressions, 'costYen':r.metrics.cost_micros/1000000, 'accountConversionsNotContracts':r.metrics.conversions} for r in rows]
    print(json.dumps({'projectId':'P-9','status':'ok','period':'2026-09-01/2026-09-07','days':data}))
except Exception as error:
    reason = 'invalid_grant' if 'invalid_grant' in str(error) else type(error).__name__
    print(json.dumps({'projectId':'P-9','status':'unavailable','reason':reason}))
`;
const result = spawnSync(python, ['-c', code], {
  env: { ...process.env, ...config }, encoding: 'utf8', timeout: 45000,
});
let report;
try { report = JSON.parse(result.stdout.trim()); }
catch { report = { projectId: 'P-9', status: 'unavailable', reason: result.error?.code ?? 'sdk_process_failed' }; }
report.checkedAt = new Date().toISOString();
await mkdir('output/marketing', { recursive: true });
await writeFile('output/marketing/ads-access.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
process.exitCode = report.status === 'ok' ? 0 : 1;
