import { createContext } from 'react'

export const TaskContext = createContext()

/* Componente que engloba a todos */
export function TaskContextProvider(props) {
  return (
    <TaskContext.Provider>
        { props.children }
    </TaskContext.Provider>
  )
}