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
        <>
            <form action="" onSubmit={ handleSubmit }>
                <input type="text" placeholder="Escribe tu tarea"
                    /* captura el valor del input */
                    onChange={(e) => setTitle(e.target.value)} 
                    /* al guardar un valor el value captura el valor null del estado para limpiar la caja de texto */
                    value={title} 
                    autoFocus />
                <textarea placeholder="Escribe la descripción"
                    onChange={(e) => seTDescription(e.target.value)}
                    value={description} />
                <button>Guardar</button>
            </form>
        </>
    )
}

export default TaskForm