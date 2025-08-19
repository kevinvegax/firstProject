import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = "http://localhost:5000/tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get(API).then(res => setTasks(res.data));
  }, []);

  const addTask = () => {
    axios.post(API, { title }).then(res => {
      setTasks([...tasks, res.data]);
      setTitle("");
    });
  };

  const toggleTask = (id, completed) => {
    axios.put(`${API}/${id}`, { completed: !completed }).then(res => {
      setTasks(tasks.map(t => t._id === id ? res.data : t));
    });
  };

  const deleteTask = id => {
    axios.delete(`${API}/${id}`).then(() => {
      setTasks(tasks.filter(t => t._id !== id));
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>ToDo App</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Nueva tarea" />
      <button onClick={addTask}>Agregar</button>
      <ul>
        {tasks.map(t => (
          <li key={t._id}>
            <span 
              style={{ textDecoration: t.completed ? 'line-through' : 'none', cursor: 'pointer' }}
              onClick={() => toggleTask(t._id, t.completed)}
            >
              {t.title}
            </span>
            <button onClick={() => deleteTask(t._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
