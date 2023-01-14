import './App.css';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Todos = ({ todos }) => {
  return (
    <div className="todosInside">
      {todos.map(todo => {
        return (
          <div className="todo">
            <button className='checkbox' style={{ backgroundColor: todo.status ? "#A879E6" : "white" }}></button>
            <p>{todo.name}</p>
            <button><AiOutlineEdit color={"#64697b"} size={20} /></button>
            <button><AiOutlineDelete color={"#64697b"} size={20} /></button>
          </div>
        )
      })}
    </div>
  )
}

function App() {
  async function getTodos() {
    try {
      const response = await axios.get("http://localhost:3333/todos")
      setTodos(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const [todos, setTodos] = useState([])
  useEffect(() => {
    getTodos()
  }, [])
  return (
    <div className="App">
      <header className="container">
        <div className='header'>
          <h1>To Do</h1>
        </div>
        <div className='todos'>
          <Todos todos={todos} />
        </div>
        <input className='inputName' />
        <button className='newTaskButton'>+ Hew task</button>
      </header>
    </div>
  );
}

export default App;
