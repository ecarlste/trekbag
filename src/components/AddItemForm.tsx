import Button from "./Button";
import { PackingListItemType } from "../lib/types";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

type AddItemFormProps = {
  handleAddItem: (newItemName: PackingListItemType) => void;
};

function AddItemForm({ handleAddItem }: AddItemFormProps) {
  const [text, setText] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const newItem: PackingListItemType = {
      id: uuidv4(),
      name: text,
      isPacked: false,
    };

    handleAddItem(newItem);
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
