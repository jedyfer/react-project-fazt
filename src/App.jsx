import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";


function App() {
  return (
    <div>
      {/* ya no se envia props */}
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App