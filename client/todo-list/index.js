
import { dom } from 'deku';
import TodoItem from '../todo-item';

var propTypes = {
  todos: { type: 'array' }
};

function render({ props }) {
  let { todos } = props;

  var children = todos.map(todo => {
    return <TodoItem todo={todo} />;
  });

  return (
    <ul class="todo-list">{children}</ul>
  );
}

export default { propTypes, render };
