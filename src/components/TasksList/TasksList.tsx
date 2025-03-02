import "./style.css";
import { useState } from "react";

interface TasksListProps {
  content: string;
}

function TasksList({ content }: TasksListProps) {
  const [checked, setChecker] = useState(false);

  function getCheckboxStatus() {
    setChecker((prev) => !prev);
  }
  return (
    <div className="list_item">
      <input type="checkbox" id="task_done" onChange={getCheckboxStatus} />
      <label className={checked ? `checked` : ""}>{content}</label>
    </div>
  );
}

export default TasksList;
