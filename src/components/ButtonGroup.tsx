import Button from "./Button";

function ButtonGroup() {
  return (
    <section className="button-group">
      <Button variant="secondary">Mark all as complete</Button>
      <Button variant="secondary">Mark all as incomplete</Button>
      <Button variant="secondary">Reset to initial</Button>
      <Button variant="secondary">Remove all items</Button>
    </section>
  );
}

export default ButtonGroup;
