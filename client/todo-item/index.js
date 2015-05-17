
import bus from 'bus';
import { dom } from 'deku';
import { ENTER, ESCAPE } from '../keycodes';


var propTypes = {
  todo: { type: 'object' }
};

function afterRender({ state }, el) {
  if (state.editing && !state.title) {
    var input = el.querySelector('input.edit');
    input.focus();
    input.select();
  }
}

function render({ props, state }, setState) {
  let { todo } = props;
  let { editing } = state;

  let { id, completed, title } = todo;
  var classes = { completed, editing };

  function destroy() {
    bus.emit('todo:remove', id);
  }

  function edit() {
    setState({ editing: true });
  }

  function cancel() {
    setState({
      editing: false,
      title: null
    });
  }

  function save() {
    bus.emit('todo:title', id, state.title);

    setState({
      editing: false,
      title: null
    });
  }

  function toggle() {
    bus.emit('todo:toggle', id);
  }

  function onKeyUp(e) {
    if (e.keyCode === ESCAPE) {
      cancel();
    } else if (e.keyCode === ENTER) {
      save();
    } else {
      setState({ title: e.target.value });
    }
  }

  return (
    <li class={classes}>
      <div class="view" onDoubleClick={edit}>
        <input class="toggle" type="checkbox" checked={completed} onChange={toggle} />
        <label>{title}</label>
        <button class="destroy" onClick={destroy}></button>
      </div>
      <input class="edit" value={title} onKeyUp={onKeyUp} />
    </li>
  );
}

export default { propTypes, afterRender, render };
