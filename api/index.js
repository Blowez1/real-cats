require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express();
const axios = require('axios');

app.use(bodyParser.json())
app.get('/images/getRandom', async (req, res) => {

  const response = await axios.get('https://api.thecatapi.com/v1/images/search?mime_types=jpg', {
    headers: {
      'x-api-key': process.env.API_KEY
    }
  });
  const { data,status } = response;

  if (status === 200) {
    res.status(200).send(data);
  }else {
    res.status(400).send({
      status: 'Error'
    });
  }
})

module.exports = app
