import { useTodoStore } from "../store/todoStore";
import { ItemRow, DeleteButton } from "../styles/TaskStyles";

export default function Task({ task }) {
  const toggle = useTodoStore((s) => s.toggleTask);
  const remove = useTodoStore((s) => s.removeTask);

  return (
    <ItemRow>
      <input
        type="checkbox"
        id={task.id}
        checked={task.completed}
        onChange={() => toggle(task.id)}
      />

      <label htmlFor={task.id} className={task.completed ? "checked" : ""}>
        {task.title}
      </label>

      <DeleteButton type="button" onClick={() => remove(task.id)}>
        ✕
      </DeleteButton>
    </ItemRow>
  );
}
