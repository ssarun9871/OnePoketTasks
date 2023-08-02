const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const count = data.split(/\s+/).length;
  console.log("Word count = "+count);
});
