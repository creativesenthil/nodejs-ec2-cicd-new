const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from POC-22 Automated CI/CD Pipeline on AWS EC2! (v1)');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
