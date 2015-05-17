
import { dom } from 'deku';
import bus from 'bus';


var propTypes = {
  filter: { source: 'filter' },
  remaining: { type: 'number' }
};

function render({ props }) {
  let { filter, remaining } = props;
  let clear = () => bus.emit('todos:clear');

  return (
    <footer class="footer">
      <span class="todo-count">
        <strong>{remaining}</strong>
        {remaining === 1 ? ' item' : ' items'} left
      </span>
      <ul class="filters">
        <li><a class={ { selected: !filter } } href="#/">All</a></li>
        <li><a class={ { selected: filter === 'active' } } href="#/active">Active</a></li>
        <li><a class={ { selected: filter === 'completed' } } href="#/completed">Completed</a></li>
      </ul>
      <button class="clear-completed" onClick={clear}>Clear completed</button>
    </footer>
  );
}

export default { propTypes, render };
