import Button from "./Button";

const secondaryButtons = [
  "Mark all as complete",
  "Mark all as incomplete",
  "Reset to initial",
  "Remove all items",
];

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
