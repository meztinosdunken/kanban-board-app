import React, { useState } from 'react';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="kanban-board">
      <h2>Tasks</h2>
      <div className="tasks">
        {tasks.map((task, index) => (
          <div key={index} className="task">
            {task}
          </div>
        ))}
      </div>
      <button onClick={() => addTask(prompt('Enter task name:'))}>Add Task</button>
    </div>
  );
};

export default KanbanBoard;