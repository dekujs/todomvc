
import bus from 'bus';
import { dom } from 'deku';
import Footer from '../footer';
import Header from '../header';
import TodoList from '../todo-list';

var propTypes = {
  filter: { source: 'filter' },
  todos: { source: 'todos' }
};

function render({ props }) {
  let { filter, todos } = props;
  let remaining = todos.filter(todo => !todo.completed).length;
  let toggle = e => bus.emit('todos:toggle-all', e.target.checked);

  if (filter === 'active') todos = todos.filter(todo => !todo.completed);
  else if (filter === 'completed') todos = todos.filter(todo => todo.completed);

  return (
    <section class="todoapp">
      <Header />
      <section class="main">
        <input class="toggle-all" type="checkbox" onChange={toggle} />
        <label for="toggle-all">Mark all as complete</label>
        <TodoList todos={todos} />
      </section>
      <Footer remaining={remaining} />
    </section>
  );
}

export default { propTypes, render };
