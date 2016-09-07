import React from 'react';

const Stats = ({ completed, remaining, filter }) => {
  return (
    <div>
      <span className="todo-count">
        <strong>{remaining} </strong>{ remaining === 1 ? 'item' : 'items' } left
      </span>
      <ul className="filters">
        <li>
          <a className={filter === 'all' ? 'selected' : '' } href="#/">All</a>
        </li>
        <li>
          <a className={filter === 'active' ? 'selected' : '' } href="#/active">Active</a>
        </li>
        <li>
          <a className={filter === 'completed' ? 'selected' : '' } href="#/completed">Completed</a>
        </li>
      </ul>
      { completed ? <button className="clear-completed">Clear completed</button> : null }
    </div>
  );
};

Stats.propTypes = {
  completed: React.PropTypes.number.isRequired,
  remaining: React.PropTypes.number.isRequired,
  filter: React.PropTypes.string.isRequired
};

export default Stats;
