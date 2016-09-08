import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import TodoView from './todo';

const ENTER_KEY = 13;

// The Application
// ---------------

// Our overall **AppView** is the top-level piece of UI.
const AppView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: '.todoapp',

    // Delegated events for creating new items, and clearing completed ones.
    events: {
        'keypress .new-todo': 'createOnEnter',
        'click .clear-completed': 'clearCompleted',
        'click .toggle-all': 'toggleAllComplete'
    },

    // At initialization we bind to the relevant events on the `Todos`
    // collection, when items are added or changed. Kick things off by
    // loading any preexisting todos that might be saved in *localStorage*.
    initialize: function (options) {
        this.allCheckbox = this.$('.toggle-all')[0];
        this.$input = this.$('.new-todo');
        this.$main = this.$('.main');
        this.$list = $('.todo-list');

        this.listenTo(this.collection, 'add', this.addOne);
        this.listenTo(this.collection, 'reset', this.addAll);
        this.listenTo(this.collection, 'change:completed', this.filterOne);
        this.listenTo(this.collection, 'filter', this.filterAll);
        this.listenTo(this.collection, 'all', _.debounce(this.render, 0));

        this.filter = options.filter;

        // Suppresses 'add' events with {reset: true} and prevents the app view
        // from being re-rendered for every model. Only renders when the 'reset'
        // event is triggered at the end of the fetch.
        this.collection.fetch({reset: true});
    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function () {
        const remaining = this.collection.remaining().length;

        if (this.collection.length) {
            this.$main.show();

        } else {
            this.$main.hide();
        }

        this.allCheckbox.checked = !remaining;
    },

    // Add a single todo item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function (todo) {
        var view = new TodoView({ model: todo, filter: this.filter });
        this.$list.append(view.render().el);
    },

    // Add all items in the **Todos** collection at once.
    addAll: function () {
        this.$list.html('');
        this.collection.each(this.addOne, this);
    },

    filterOne: function (todo) {
        todo.trigger('visible');
    },

    filterAll: function () {
        this.collection.each(this.filterOne, this);
    },

    // Generate the attributes for a new Todo item.
    newAttributes: function () {
        return {
            title: this.$input.val().trim(),
            order: this.collection.nextOrder(),
            completed: false
        };
    },

    // If you hit return in the main input field, create new **Todo** model,
    // persisting it to *localStorage*.
    createOnEnter: function (e) {
        if (e.which === ENTER_KEY && this.$input.val().trim()) {
            this.collection.create(this.newAttributes());
            this.$input.val('');
        }
    },

    // Clear all completed todo items, destroying their models.
    clearCompleted: function () {
        _.invoke(this.collection.completed(), 'destroy');
        return false;
    },

    toggleAllComplete: function () {
        var completed = this.allCheckbox.checked;

        this.collection.each(function (todo) {
            todo.save({
                completed: completed
            });
        });
    }
});

export default AppView;
