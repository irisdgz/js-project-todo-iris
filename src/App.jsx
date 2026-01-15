import { useTodoStore } from "./store/todoStore";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import NoTasks from "./components/NoTasks"; 
import { GlobalStyles } from "./styles/GlobalStyles";
import { Container, Header } from "./styles/Layout";

export default function App() {
  const tasks = useTodoStore((state) => state.tasks);
  const clear = useTodoStore((state) => state.clearCompleted);

  const openCount = tasks.filter((t) => !t.completed).length;
  const doneCount = tasks.filter((t) => t.completed).length;

  return (
    <Container>
      <GlobalStyles />
        <Header>
          <h1>On My List</h1>
          {tasks.length > 0 && <p>{openCount} Tasks Remaining</p>}
      </Header>

      <TaskForm />

    
      {tasks.length === 0 ? <NoTasks /> : <TaskList filter="active" />}

      {doneCount > 0 && (
        <div style={{ width: "100%", maxWidth: "600px", marginTop: "40px" }}>
          <p
            style={{
              color: "#444",
              textTransform: "uppercase",
              fontSize: "12px",
              letterSpacing: "2px",
              marginBottom: "15px",
            }}
          >
            Completed — {doneCount}
          </p>

          <TaskList filter="completed" />

          <button
            onClick={clear}
            style={{
              background: "none",
              border: "none",
              color: "#444",
              marginTop: "20px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Clear Completed
          </button>
        </div>
      )}
    </Container>
  );
}
