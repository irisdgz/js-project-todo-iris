import { useTodoStore } from "../store/todoStore";
import Task from "./Task";
import { List } from "../styles/TaskStyles";

export default function TaskList({ filter }) {
  const tasks = useTodoStore((state) => state.tasks);
  
  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    return !t.completed; 
  });

  return (
    <List>
      {filteredTasks.map((t) => (
        <Task key={t.id} task={t} />
      ))}
    </List>
  );
}