import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";


function App() {
  return (
    /* h-screen usa una porcion de la pantalla */
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        {/* ya no se envia props */}
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App