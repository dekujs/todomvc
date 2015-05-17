import { dom, render, tree } from 'deku';
import App from './app';
import todos from './todos';
import filter from './filter';

var app = tree(<App />);
app.use(filter());
app.use(todos());
render(app, document.querySelector('main'));
