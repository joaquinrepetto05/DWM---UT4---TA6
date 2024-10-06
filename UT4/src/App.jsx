import React, { useState } from 'react';
import './App.css';
import Input from './components/Input/Input';

function App() {
  const [tasks, setTasks] = useState([]); // Estado para la lista de tareas

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]); // Agrega la nueva tarea al array de tareas
  };

  return (
    <>
      <h1>Lista de Tareas</h1>
      <Input addTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li> // Renderiza cada tarea
        ))}
      </ul>
    </>
  );
}

export default App;