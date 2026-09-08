import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const plan = fileURLToPath(new URL('../output/marketing/improvement-plan.html', import.meta.url));
createServer(async (request, response) => {
  if (request.url !== '/' && request.url !== '/improvement-plan.html') {
    response.writeHead(404).end(); return;
  }
  try {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
    response.end(await readFile(plan));
  } catch {
    response.writeHead(500).end('Export the plan first.');
  }
}).listen(3100, '127.0.0.1', () => console.log('Plan QA preview: http://127.0.0.1:3100'));
