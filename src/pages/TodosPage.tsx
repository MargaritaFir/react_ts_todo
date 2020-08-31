import React, { useState, useEffect, useCallback } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
      setTodos(saved)
    }, []);
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
  
    const addHandler = useCallback((title:string) => {
      const newTodo = {
        title: title,
        id: Date.now(),
        completed: false
      };
  
      setTodos(prev => [newTodo, ...prev]);
    },[])
  
    const toggleHandler = useCallback((id:number) => {

      setTodos(prev => prev.map(todo =>{
        if(todo.id === id ){
          return { 
            ...todo,
          completed : !todo.completed
          }       
        }
        return todo;
      }));
    }, [])
  
    const removeHandler = useCallback((id:number) => {
      const shouldRemove = confirm('Вы уверены, что хотите удалить этот элемент?');
      if(shouldRemove) setTodos(prev => prev.filter(todo => todo.id !== id));
    }, [])
  
    return(
        <>
          <TodoForm onAdd={addHandler}/>
          <TodoList 
            todos={todos} 
            onToggle={toggleHandler} 
            onRemove={removeHandler}
          />
        </>
    )
}