import { connect } from 'react-redux';
import Stats from '../components/stats';

const mapStateToProps = (state) => {
    return {
        completed: state.todos.filter(todo => todo.completed === true).length,
        remaining: state.todos.filter(todo => todo.completed === false).length,
        filterType: state.filter.filterType,
        visible: state.todos.length

    }
};
export default connect(mapStateToProps)(Stats);

