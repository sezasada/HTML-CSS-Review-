const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.post(bodyParser.urlencoded({ extended: true }))

const PORT = 5000;

app.use(express.static('server/public'));

app.get('/displayrev', (req, res) => {
    let revenue = '90.15B';
    let peRatio = 21.5358;
  
    res.json({ revenue, peRatio });
  });

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

