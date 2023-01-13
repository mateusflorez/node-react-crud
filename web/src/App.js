import './App.css';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const arrayTodos = [{ name: "Limpar a casa", status: false }, { name: "Limpar a moto", status: false }]

const Todos = ({ todos }) => {
  return (
    <div className="todos">
      {todos.map(todo => {
        return (
          <div className="todo">
            <p>{todo.name}</p>
            <button><AiOutlineEdit /></button>
            <button><AiOutlineDelete /></button>
          </div>
        )
      })}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="container">
        <Todos todos={arrayTodos} />
      </header>
    </div>
  );
}

export default App;
