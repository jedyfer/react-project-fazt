import TaskCard from './TaskCard'
import { TaskContext } from '../context/TaskContext'
import { useContext } from 'react'

function TaskList() {
    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1>No hay tareas</h1>
    }

    return (
        <>
            { tasks.map((task, i) => (
                /* el key tambien se puede poner en el componente */
                <TaskCard key={i} task={task} />
            )) }    
        </>
    )
}

export default TaskList