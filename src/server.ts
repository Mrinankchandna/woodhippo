import express from 'express';
import { join } from 'path';

// Simple express server without SSR
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/browser');

  // Serve static files
  server.use(express.static(distFolder));

  // All routes serve index.html
  server.get('*', (req, res) => {
    res.sendFile(join(distFolder, 'index.html'));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;
  const server = app();
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

run();