import { FiTrash2 } from "react-icons/fi";
import SectionButton from "../SectionButton/SectionButton";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import AddTask from "../AddTask/AddTask";
import TasksList from "../TasksList/TasksList";
import DeleteModal from "../DeleteModal/DeleteModal";

function TodoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const buttonRef = useRef(null);

  function loadTasks() {
    const savedTasks = Object.keys(localStorage)
      .filter((key) => key.startsWith("task-"))
      .map((key) => JSON.parse(localStorage.getItem(key) || '""'));

    setTasks(savedTasks);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <section className="todo">
        <div className="todo_header">
          <div>
            <h2>Lista de tarefas</h2>
            <h3>Seus objetivos para essa sessão</h3>
          </div>

          <SectionButton
            ref={buttonRef}
            onClick={() => setIsModalOpen((prev) => !prev)}
            title={"Clique para limpar a lista de tarefas da sessão"}
          >
            <FiTrash2 />
          </SectionButton>
        </div>

        <div className="todo_content">
          <AddTask onTaskAdded={loadTasks} />

          <div>
            {tasks.map((task, index) => (
              <TasksList content={task} key={index} />
            ))}
          </div>
        </div>
      </section>

      {isModalOpen ? <DeleteModal /> : <></>}
    </>
  );
}

export default TodoList;
