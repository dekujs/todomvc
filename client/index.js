import { dom, render, tree } from 'deku';
import App from './app';
import todos from './todos';

var app = tree(<App />);
app.use(todos());
render(app, document.querySelector('main'));
