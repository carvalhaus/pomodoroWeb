import "./style.css";
import { useState } from "react";

interface AddTaskProps {
  onTaskAdded: () => void;
}

function AddTask({ onTaskAdded }: AddTaskProps) {
  const [task, setTask] = useState("");

  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (task.trim()) {
      localStorage.setItem(`task-${Date.now()}`, JSON.stringify(task));

      setTask("");
      onTaskAdded();
    }
  }

  return (
    <form className="add_task" onSubmit={handleAddTask}>
      <input
        type="text"
        id="task"
        placeholder="Nova tarefa"
        minLength={4}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        autoComplete="off"
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AddTask;
