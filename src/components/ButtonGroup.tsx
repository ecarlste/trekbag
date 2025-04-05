import { secondaryButtons } from "../lib/constants";
import Button from "./Button";

function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryButtons.map((buttonText) => (
        <Button key={buttonText} variant="secondary">
          {buttonText}
        </Button>
      ))}
    </section>
  );
}

export default ButtonGroup;
