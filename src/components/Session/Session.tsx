import { FiRefreshCcw } from "react-icons/fi";
import SectionButton from "../SectionButton/SectionButton";
import "./style.css";
import Badge from "../Badge/Badge";
import { useState } from "react";
import Timer from "../Timer/Timer";

function Session() {
  const [count, setCount] = useState(0);

  function onRefreshBtnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setCount(0);
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

      <div className="session_content">
        <div className="content_item">
          <div>
            <h4>Modo atual:</h4>
            <p className="subtitle">Cíclo atual do cronômetro</p>
          </div>

          <Badge count={count} />
        </div>

        <div className="content_item">
          <div>
            <h4>Próximo modo:</h4>
            <p className="subtitle">Qual cíclo será ativado</p>
          </div>

          <Badge count={count + 1} />
        </div>

        <Timer />
      </div>
    </section>
  );
}

export default Session;
