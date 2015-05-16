
import clone from 'clone';
import Emitter from 'events';

let { localStorage } = window;

const KEY = 'todos-deku';
const DEFAULTS = [
  { title: 'Taste JavaScript', completed: true },
  { title: 'Buy a unicorn' }
];

export default class Todos extends Emitter {
  constructor() {
    super();
    this.list = this.load();
    this.store();
  }

  // persistence

  load() {
    var data = localStorage.getItem(KEY);
    if (!data) return DEFAULTS;
    return JSON.parse(data);
  }

  store() {
    this.emit('change');
    localStorage.setItem(KEY, JSON.stringify(this.list));
  }

  // read

  get(filter) {
    var list = clone(this.list);
    return filter ? list.filter(filter) : list;
  }

  all() {
    return this.get();
  }

  active() {
    return this.get(todo => !todo.completed);
  }

  completed() {
    return this.get(todo => todo.completed);
  }

  // write

  add(title) {
    if (!title) return false;
    this.list.push({ title });
    this.store();
  }

  remove(x) {
    this.list.splice(x, 1);
    this.store();
  }

  toggle(x, force) {
    var todo = this.list[x];

    todo.completed = typeof force === 'boolean'
      ? force
      : !todo.completed;

    this.store();
  }

  toggleAll(force) {
    this.list.forEach((todo, x) => this.toggle(x, force));
    this.store();
  }

  title(x, title) {
    var todo = this.list[x];
    todo.title = title;
    this.store();
  }

  clear() {
    this.list = this.list.filter(todo => !todo.completed);
    this.store();
  }
}
