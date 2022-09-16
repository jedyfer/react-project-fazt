import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from './data/tasks'
import { useState, useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState([]);

  /* cuando cargue el componente - se ejecutara solo una vez */
  useEffect(() => {
      setTasks(data)
  }, []);

  /* function para añadir una nueva tarea */
  function createTask(task) {
    //  [...tasks] : significa que va a copiar todos los valores que existan a la actualidad 
    //  [, task] : añade un nuevo elemento despues de los valores existentes
    setTasks([...tasks, {
      //  el id lo agrego desde este punto por que aqui se tiene acceso al array 
      id: tasks.length, 
      title: task.title,
      description: task.description
    }])
  }

  function deleteTask(idTask) {
    /* filter: imprime los valores excepto es que sea igual al idTask */
    const query = tasks.filter(t => t.id !== idTask)
    /* actualizamos el array */
    setTasks(query)
  }
  
  return (
    <div>
      {/* envia un funcion en forma de propiedad */}
      <TaskForm createTask={createTask} />
      {/* envía los datos del array */}
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App