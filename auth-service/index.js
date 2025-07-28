const express = require('express');
const cors = require('cors');
const client = require('prom-client');

const app = express();
app.use(cors());
app.use(express.json());

// Prometheus default metrics
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === "prem" && password === "1234") {
    res.json({ message: "Login successful" });
  } else {
    res.json({ message: "Login failed" });
  }
});

// Health check route
app.get('/', (req, res) => res.send("Auth Service Running"));

app.listen(5001, () => console.log("Auth service running on port 5001"));
