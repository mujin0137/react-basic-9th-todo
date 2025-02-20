import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleDelete, handleToggleCompleted }) => {
  console.log(todos);
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <TodoItem
          key={id}
          completed={completed}
          text={text}
          handleDelete={handleDelete}
          handleToggleCompleted={handleToggleCompleted}
          id={id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
