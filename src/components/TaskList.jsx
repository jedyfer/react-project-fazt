import TaskCard from './TaskCard'

function TaskList(props) {
    return (
        <>
            { props.tasks.map((task, i) => (
                /* el key tambien se puede poner en el componente */
                <TaskCard key={i} task={task} deleteTask={props.deleteTask} />
            )) }    
        </>
    )
}

export default TaskList