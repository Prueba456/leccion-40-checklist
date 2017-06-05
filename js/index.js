'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  wrapper.append(Header());
  wrapper.append(Todo());

  root.append(wrapper);
}
const state = {
  todos: []
};
$( _ =>{ /*llama al documento*/
  const root = $('.root');
  render(root);
});
