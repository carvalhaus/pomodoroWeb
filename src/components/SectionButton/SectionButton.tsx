import "./style.css";
import { ReactNode } from "react";

interface SectionButtonProps {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
}

function SectionButton({ children, onClick, title }: SectionButtonProps) {
  return (
    <button className="section_btn" onClick={onClick} title={title}>
      {children}
    </button>
  );
}

export default SectionButton;
