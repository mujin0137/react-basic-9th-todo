
const TodoItem = ({
  completed,
  text,
  handleDelete,
  handleToggleCompleted,
  id,
}) => {
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
        <button onClick={() => handleToggleCompleted(id)}>
          {completed ? "취소하기" : "확인하기"}{" "}
        </button>

        <button onClick={() => handleDelete(id)}>삭제하기</button>
      </div>
    </li>
  );
};

export default TodoItem;



