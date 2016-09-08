import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

import Backbone from 'backbone';
import { bbDispatch, bbCreateStore } from 'backbone-redux-store';
import { createStore, combineReducers } from 'redux';

import AppView from './views/app';
import Todos, { todosReducer } from './collections/todos';
import FilterModel, { filterReducer } from './models/filter';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Stats from './containers/stats';

const todos = new Todos();
const filter = new FilterModel({ filterType: 'all' });

const reducers = combineReducers({
    filter: filterReducer,
    todos: todosReducer
});

const store = bbCreateStore(createStore)(reducers, { filter, todos });

const TodoRouter = Backbone.Router.extend({
    routes: {
        '*filter': 'setFilter'
    },

    setFilter: function (param) {
        // Set the current filter to be used
        const filterType = param || 'all';
        bbDispatch(filter, 'SET_FILTER', filterType);
    }
});
new TodoRouter();
Backbone.history.start();

new AppView({
    collection: todos,
    filter
});

ReactDOM.render(
    <Provider store={store}>
        <Stats />
    </Provider>,
    document.querySelector('.footer')
);

