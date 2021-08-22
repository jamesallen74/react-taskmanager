import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task 1",
      day: "Feb 5th at 230pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Task 2",
      day: "Feb 6th at 230pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Task 3",
      day: "Feb 7th at 230pm",
      reminder: true,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    //console.log(task)
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id? {...task, reminder:!task.reminder} : task))
  };

  return (
    <div className="container">
      <Header 
        onAdd={ () => setShowAddTask(!showAddTask)} 
        showAdd = {showAddTask}  
      />
      
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> ) : 
          ("No tasks to show")
      }

    </div>
  );
}

export default App;
