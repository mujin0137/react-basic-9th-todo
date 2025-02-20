import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, ToggleTodoCompleted }) => {
  console.log(todos);
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <TodoItem
          key={id}
          completed={completed}
          text={text}
          deleteTodo={deleteTodo}
          ToggleTodoCompleted={ToggleTodoCompleted}
          id={id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
