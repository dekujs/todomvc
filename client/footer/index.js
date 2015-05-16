
import { dom } from 'deku';
import bus from 'bus';

function render({ props }) {
  let { remaining } = props;
  let clear = () => bus.emit('todos:clear');

  return (
    <footer class="footer">
      <span class="todo-count">
        <strong>{remaining}</strong>
        {remaining === 1 ? ' item' : ' items'} left
      </span>
      <ul class="filters">
        <li><a class="selected" href="#/">All</a></li>
        <li><a href="#/active">Active</a></li>
        <li><a href="#/completed">Completed</a></li>
      </ul>
      <button class="clear-completed" onClick={clear}>Clear completed</button>
    </footer>
  );
}

export default { render };
