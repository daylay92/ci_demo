const express = require('express');
const app = express();

app.get('/', (_req, res) => {
  res.status(400).json({});
});
app.listen(3000, () => {
    console.log('App cracking on 3000!!!')
})
module.exports = app;
