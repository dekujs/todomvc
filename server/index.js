
// ES6 support
require('babel/register')({ jsxPragma: 'dom' });

var express = require('express');
var path = require('path');

express()
  .get('/', require('./render'))
  .use(express.static(path.resolve(__dirname, '..')))
  .listen(3000);
