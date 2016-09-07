// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

import Backbone from 'backbone';
import AppView from './views/app';
import Todos from './collections/todos';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

const todos = new Todos();

const TodoRouter = Backbone.Router.extend({
    routes: {
        '*filter': 'setFilter'
    },

    setFilter: function (param) {
        // Set the current filter to be used
        window.TodoFilter = param || 'all';

        // Trigger a collection filter event, causing hiding/unhiding
        // of Todo view items
        todos.trigger('filter');
    }
});

new TodoRouter();
Backbone.history.start();

new AppView({
    collection: todos
});
