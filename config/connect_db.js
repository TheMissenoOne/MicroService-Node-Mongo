const mongoose = require('mongoose');
var express = require('express');

mongoose
  .connect(
    'mongodb://louro:jose@172.21.65.145:27017/dbcorona',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  module.exports = mongoose;
