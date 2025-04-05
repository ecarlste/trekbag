import Button from "./Button";
import { useState } from "react";

type AddItemFormProps = {
  handleAddItem: (newItemName: string) => void;
};

function AddItemForm({ handleAddItem }: AddItemFormProps) {
  const [text, setText] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    handleAddItem(text);
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
