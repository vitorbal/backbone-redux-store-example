import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

import Backbone from 'backbone';
import AppView from './views/app';
import Todos from './collections/todos';
import FilterModel from './models/filter';

const todos = new Todos();
const filter = new FilterModel({ filterType: 'all' });

const TodoRouter = Backbone.Router.extend({
    routes: {
        '*filter': 'setFilter'
    },

    setFilter: function (param) {
        // Set the current filter to be used
        const filterType = param || 'all';
        filter.set({ filterType })
    }
});
new TodoRouter();
Backbone.history.start();

new AppView({
    collection: todos,
    filter
});
