import { FiRefreshCcw } from "react-icons/fi";
import SectionButton from "../SectionButton/SectionButton";
import "./style.css";

function Session() {
  function onRefreshBtnClick(e) {
    e.preventDefault();
    console.log("REFRESHED");
  }

  return (
    <section className="session">
      <div className="session_header">
        <div>
          <h2>Dados da sessão</h2>
          <h3>Acompanhe os próximos ciclos</h3>
        </div>

        <SectionButton
          onClick={onRefreshBtnClick}
          title={"Clique para reiniciar a sessão"}
        >
          <FiRefreshCcw />
        </SectionButton>
      </div>
    </section>
  );
}

export default Session;
