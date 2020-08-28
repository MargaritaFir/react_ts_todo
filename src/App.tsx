import React, {useState} from 'react';
import {Navbar} from './components/Navbar'
import { TodoForm } from './components/TodoForm';



const App: React.FC = () => {

  const [todos, setTodos] = useState([]);

  const addHandler = (title:string) => {
    console.log('Add new todo', title);
  }
  return (
    <>
    <Navbar/>
    <div className="container">
      <TodoForm onAdd={addHandler}/>
    </div>
    </>
    );
}


export default App;
