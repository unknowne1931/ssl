// server.js
const express = require('express');
const fs = require('fs');
const app = express();
const port = 80;

// Define the path to the text file
const filePath = 'A7C752696842F7CF7DFEF5AAC765BA45.txt';

// Route to render the text file content
app.get('/.well-known/pki-validation/A7C752696842F7CF7DFEF5AAC765BA45.txt', (req, res) => {
  // Read the content of the text file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading the file: ${err}`);
      return res.status(500).send('Internal Server Error');
    }

    // Render the content of the text file
    res.send(`<pre>${data}</pre>`);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
