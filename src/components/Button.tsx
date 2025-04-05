import { MouseEvent } from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

function Button({ children, variant = "primary", handleClick }: ButtonProps) {
  return (
    <button
      className={`btn ${variant === "secondary" ? "btn--secondary" : ""}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
