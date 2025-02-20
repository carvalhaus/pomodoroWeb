import { FiTrash2 } from "react-icons/fi";
import SectionButton from "../SectionButton/SectionButton";
import "./style.css";

function TodoList() {
  function onClearListBtnClick(e) {
    e.preventDefault();
    console.log("CLEARED");
  }
  return (
    <section className="todo">
      <div className="todo_header">
        <div>
          <h2>Lista de tarefas</h2>
          <h3>Seus objetivos para essa sessão</h3>
        </div>

        <SectionButton
          onClick={onClearListBtnClick}
          title={"Clique para limpar a lista de tarefas da sessão"}
        >
          <FiTrash2 />
        </SectionButton>
      </div>
    </section>
  );
}

export default TodoList;
