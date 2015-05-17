
import hashchange from 'hashchange';

export default function plugin() {
  return function (app) {
    app.set('filter', window.location.hash.slice(2));
    hashchange.update(fragment => app.set('filter', fragment.slice(1)));
  };
};
