import React from 'react';

const Task = ({ title }): React.ReactElement => {
  return (
    <div className="list-item">
      <label htmlFor="title" aria-label={title}>
        <input type="text" value={title} readOnly={true} name="title" />
      </label>
    </div>
  );
}

export { Task }

export default Task;
