import "./style.css";
import { MODE } from "../../constants/modes";
import { PiBrain, PiCoffeeBold } from "react-icons/pi";

interface BadgeProps {
  count: number;
}

function getBadge(mode: string) {
  switch (mode) {
    case "focus":
      return (
        <>
          <PiBrain />
          <p>Foco</p>
        </>
      );
    case "short_pause":
      return (
        <>
          <PiCoffeeBold />
          <p>Pausa Curta</p>
        </>
      );
    case "long_pause":
      return (
        <>
          <PiCoffeeBold />
          <p>Pausa Longa</p>
        </>
      );
  }
}

function Badge({ count }: BadgeProps) {
  return <div className={`bagde ${MODE[count]}`}>{getBadge(MODE[count])}</div>;
}

export default Badge;
