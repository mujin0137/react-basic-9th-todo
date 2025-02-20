const TodoItem = ({ completed, text, deleteTodo, ToggleTodoCompleted, id }) => {
  return (
    <li>
      <p
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {text}
      </p>
      <div>
        <button onClick={() => ToggleTodoCompleted(id)}>
          {completed ? "취소하기" : "확인하기"}{" "}
        </button>

        <button onClick={() => deleteTodo(id)}>삭제하기</button>
      </div>
    </li>
  );
};

export default TodoItem;
