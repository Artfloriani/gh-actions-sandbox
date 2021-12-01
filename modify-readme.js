const fs = require('fs');
const crypto = require('crypto');

const randomHash = crypto.randomBytes(20).toString('hex');

fs.writeFile('README.md', randomHash, 'utf-8', (err) => {
    if (err) { 
      throw err;
    }

    console.log('README update complete.');
  });