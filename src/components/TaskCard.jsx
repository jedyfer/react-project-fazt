function TaskCard({ task, deleteTask }) {
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