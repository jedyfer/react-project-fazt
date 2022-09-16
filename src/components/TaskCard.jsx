import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext)

    return (
        <div>
            <h1>{ task.title }</h1>
            <p>{ task.description }</p>
            {/* esa funcion significa que se ejecutara unicamente cuando se de un clic */}
            {/* de establecer deleteTask(task.id) se ejecutara en el blucle map */}
            <button onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
        </div>
    )
}

export default TaskCard