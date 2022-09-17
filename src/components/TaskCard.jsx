import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext)

    return (
        <div className="bg-gray-800 text-white p-4 rounded-md">
            <h1 className="text-xl font-bold capitalize">{ task.title }</h1>
            <p className="text-gray-500 text-sm">{ task.description }</p>
            {/* esa funcion significa que se ejecutara unicamente cuando se de un clic */}
            {/* de establecer deleteTask(task.id) se ejecutara en el blucle map */}
            <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" 
                onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
        </div>
    )
}

export default TaskCard