
import { readFileSync as read } from 'fs';
import { resolve } from 'path';
import { dom, renderString as render, tree } from 'deku';
import App from '../client/app';
import todos from '../client/todos';
// import filter from './filter';

var layout = read(resolve(__dirname, '../index.html'), 'utf8');

module.exports = function (req, res) {
  var app = tree(<App />);
  // app.use(filter());
  app.use(todos());

  var body = render(app);
  res.send(layout.replace('<main></main>', `<main>${body}</main>`));
};
