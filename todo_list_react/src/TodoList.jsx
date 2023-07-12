import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggletodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos. Add some"}
      {todos.map((todo) => {
        return (
          <TodoItem
          {...todo} key = {todo.id}
          toggletodo={toggletodo}
          deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
