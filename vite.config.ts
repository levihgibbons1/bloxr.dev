import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import type { Plugin } from 'vite';
import pg from 'pg';

function waitlistApi(): Plugin {
  let pool: pg.Pool;
  return {
    name: 'waitlist-api',
    configureServer(server) {
      pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
      server.middlewares.use('/api/waitlist', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }
        let body = '';
        req.on('data', (chunk: Buffer) => { body += chunk.toString(); });
        req.on('end', async () => {
          try {
            const { email } = JSON.parse(body);
            if (!email || !email.includes('@') || !email.includes('.')) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Please enter a valid email address.' }));
              return;
            }
            await pool.query(
              'INSERT INTO waitlist (email) VALUES ($1) ON CONFLICT (email) DO NOTHING',
              [email.toLowerCase().trim()]
            );
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          } catch (err) {
            console.error('Waitlist error:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Something went wrong. Please try again.' }));
          }
        });
      });
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [waitlistApi(), react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 5000,
      allowedHosts: true,
      watch: {
        ignored: ['**/.local/**', '**/.cache/**', '**/node_modules/**', '**/.git/**'],
      },
    },
  };
});
