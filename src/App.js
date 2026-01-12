import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>Client Task Management</h1>
      <button onClick={() => addTask("New Task")}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

