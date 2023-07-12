export function TodoItem({completed, id, title, toggletodo, deleteTodo}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggletodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}
