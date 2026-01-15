import { useState } from "react";
import { useTodoStore } from "../store/todoStore";
import { Form } from "../styles/TaskStyles";

export default function TaskForm() {
  const addTask = useTodoStore((state) => state.addTask); 
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text);
    setText("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="task-input" style={{ display: 'none' }}>New Task</label>
      <input
        id="task-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
      />
      <button type="submit" disabled={!text.trim()}>Add</button>
    </Form>
  );
}