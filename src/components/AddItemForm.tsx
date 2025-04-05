import Button from "./Button";
import { useState } from "react";

type AddItemFormProps = {
  onAddItem: (newItemName: string) => void;
};

function AddItemForm({ onAddItem }: AddItemFormProps) {
  const [text, setText] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    onAddItem(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input value={text} onChange={handleChange} />
      <Button>Add to list</Button>
    </form>
  );
}

export default AddItemForm;
