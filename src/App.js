import './App.less'
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
       <InputTask/>
       <TaskList/>
    </div>
  );
}

export default App;
