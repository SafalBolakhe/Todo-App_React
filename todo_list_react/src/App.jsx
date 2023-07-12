import { useEffect, useState } from "react";
import "./styles.css";
import { NewForm } from "./newForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState(()=>
  {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  });
  useEffect(()=>
  {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
    setNewItem("");
  }
  function toggletodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter(todo => id !== todo.id);
    });
  }
  return (
    <>
      <NewForm onSubmit = {addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos = {todos}
      toggletodo={toggletodo}
      deleteTodo={deleteTodo}/>
    </>
  );
}
