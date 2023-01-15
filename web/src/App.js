import './App.css';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const Todos = ({ todos }) => {
    return (
      <div className="todosInside">
        {todos.map(todo => {
          return (
            <div className="todo">
              <button
                className='checkbox'
                style={{ backgroundColor: todo.status ? "#A879E6" : "white" }}></button>
              <p>{todo.name}</p>
              <button><AiOutlineEdit color={"#64697b"} size={20} /></button>
              <button onClick={() => deleteTodo(todo)}><AiOutlineDelete color={"#64697b"} size={20} /></button>
            </div>
          )
        })}
      </div>
    )
  }

  async function newTaskButton() {
    setInputVisibility(!inputVisibility)
  }

  async function createTodo() {
    try {
      await axios.post("http://localhost:3333/todos", { name: inputValue })
      getTodos()
      newTaskButton()
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteTodo(todo) {
    try {
      await axios.delete(`http://localhost:3333/todos/${todo.id}`)
      getTodos()
    } catch (error) {
      console.log(error)
    }
  }

  async function getTodos() {
    try {
      const response = await axios.get("http://localhost:3333/todos")
      setTodos(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [inputVisibility, setInputVisibility] = useState(false)

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
        <input
          className='inputName'
          style={{ display: inputVisibility ? "block" : "none" }}
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value)
          }}
        />
        <button onClick={inputVisibility ? createTodo : newTaskButton} className='newTaskButton'>
          {inputVisibility ? "Save" : "+ Hew task"}
        </button>
      </header>
    </div>
  );
}

export default App;
