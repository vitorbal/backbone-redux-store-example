import Backbone from 'backbone';

// Todo Model
// ----------

// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
const Todo = Backbone.Model.extend({
    // Default attributes for the todo
    // and ensure that each todo created has `title` and `completed` keys.
    defaults: {
        title: '',
        completed: false
    },

    // Toggle the `completed` state of this todo item.
    toggle: function () {
        this.save({
            completed: !this.get('completed')
        });
    }
});

export default Todo;
