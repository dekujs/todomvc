
import { dom } from 'deku';
import TodoItem from '../todo-item';

function render({ props }) {
  let { todos } = props;

  var children = todos.map((todo, x) => {
    return <TodoItem id={x} todo={todo} />;
  });

  return (
    <ul class="todo-list">{children}</ul>
  );
}

export default { render };
