type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

function Button({ children, variant = "primary" }: ButtonProps) {
  return (
    <button
      className={`btn ${variant === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
