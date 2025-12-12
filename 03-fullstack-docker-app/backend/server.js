const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
// Use CommonJS-friendly build to avoid ESM import issues in Node 18
const { nanoid } = require('nanoid/non-secure');

const createApp = () => {
  const app = express();
  const notes = [{ id: nanoid(), text: 'Welcome to the Docker demo' }];

  app.use(cors());
  app.use(express.json());

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'healthy', version: '1.0.0' });
  });

  app.get('/api/notes', (_req, res) => {
    res.json(notes);
  });

  app.post('/api/notes', (req, res) => {
    const text = req.body?.text;
    if (!text) {
      return res.status(400).json({ error: 'text is required' });
    }
    const note = { id: nanoid(), text };
    notes.push(note);
    res.status(201).json(note);
  });

  const publicDir = path.join(__dirname, 'public');
  if (fs.existsSync(publicDir)) {
    app.use(express.static(publicDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(publicDir, 'index.html'));
    });
  }

  return app;
};

const port = process.env.PORT || 8080;

if (require.main === module) {
  const app = createApp();
  app.listen(port, () => {
    console.info(`Backend listening on ${port}`);
  });
}

module.exports = { createApp };
