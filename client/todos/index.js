
import bus from 'bus';
import clone from 'clone';

import Todos from './data';


export default function plugin() {
  return function (app) {
    var todos = new Todos();

    app.set('todos', todos.list);
    todos.on('change', () => app.set('todos', todos.get()));

    // collection
    bus.on('todos:add', title => todos.add(title));
    bus.on('todos:toggle-all', force => todos.toggleAll(force));
    bus.on('todos:clear', () => todos.clear());

    // item
    bus.on('todo:toggle', (x, force) => todos.toggle(x, force));
    bus.on('todo:title', (x, title) => todos.title(x, title));
    bus.on('todo:remove', x => todos.remove(x));
  };
};
