import "./style.css";
import { ForwardedRef, forwardRef, ReactNode } from "react";

interface SectionButtonProps {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
}

const SectionButton = forwardRef<HTMLButtonElement, SectionButtonProps>(
  function SectionButton(
    { children, onClick, title },
    ref: ForwardedRef<HTMLButtonElement>
  ) {
    return (
      <button className="section_btn" onClick={onClick} title={title} ref={ref}>
        {children}
      </button>
    );
  }
);

export default SectionButton;
