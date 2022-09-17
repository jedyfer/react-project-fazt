import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext";

function TaskForm(props) {
    const [title, setTitle] = useState(""); //  Title
    const [description, seTDescription] = useState("")

    /* todos los valores valores del componente taskContext */
    //  const value = useContext(TaskContext)
    /* desestructurando */
    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        //  Previene el refresco del formulario
        e.preventDefault(); 

        const newTask = {
            title,  //  esto es igual a title: title
            description
        }

        createTask(newTask)

        //  Reinicia el valor de los estados a null
        setTitle('')
        seTDescription('')
    }

    return (
        <div className="max-w-md mx-auto">
            <form action="" onSubmit={ handleSubmit } className="bg-slate-800 p-10 mb-4">
                <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
                <input type="text" placeholder="Escribe tu tarea"
                    /* captura el valor del input */
                    onChange={(e) => setTitle(e.target.value)} 
                    /* al guardar un valor el value captura el valor null del estado para limpiar la caja de texto */
                    value={title} 
                    className="bg-slate-300 p-3 w-full mb-2"
                    autoFocus />
                <textarea placeholder="Escribe la descripción"
                    onChange={(e) => seTDescription(e.target.value)}
                    className="bg-slate-300 p-3 w-full mb-2"
                    value={description} />
                <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm