import "./App.css";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTask from "./modals/CreateTask";

function App() {
  return (
    <div className="App">
      <TodoList></TodoList>
      <CreateTask></CreateTask>
    </div>
  );
}

export default App;
