import { ReactNode } from "react";

type ButtonGroupProps = {
  children: ReactNode;
};

function ButtonGroup({ children }: ButtonGroupProps) {
  return <section className="button-group">{children}</section>;
}

export default ButtonGroup;
