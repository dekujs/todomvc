
import { dom } from 'deku';
import { ENTER } from '../keycodes';
import bus from 'bus';

function render() {
  function onKeyUp(e) {
    if (e.keyCode === ENTER) {
      var title = e.target.value;
      bus.emit('todos:add', title);
      e.target.value = '';
    }
  }

  return (
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus onKeyUp={onKeyUp} />
    </header>
  );
}

export default { render };
