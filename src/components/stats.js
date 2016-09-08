import React from 'react';

const Stats = ({ completed, remaining, filterType, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div>
      <span className="todo-count">
        <strong>{remaining} </strong>{ remaining === 1 ? 'item' : 'items' } left
      </span>
      <ul className="filters">
        <li>
          <a className={filterType === 'all' ? 'selected' : '' } href="#/">All</a>
        </li>
        <li>
          <a className={filterType === 'active' ? 'selected' : '' } href="#/active">Active</a>
        </li>
        <li>
          <a className={filterType === 'completed' ? 'selected' : '' } href="#/completed">Completed</a>
        </li>
      </ul>
      { completed ? <button className="clear-completed">Clear completed</button> : null }
    </div>
  );
};

Stats.propTypes = {
  completed: React.PropTypes.number.isRequired,
  remaining: React.PropTypes.number.isRequired,
  filterType: React.PropTypes.string.isRequired
};

export default Stats;
