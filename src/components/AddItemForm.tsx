import { Dispatch, SetStateAction, useState } from "react";
import Button from "./Button";
import { PackingListItemType } from "../lib/types";
import { v4 as uuidv4 } from "uuid";

type AddItemFormProps = {
  setPackingListItems: Dispatch<SetStateAction<PackingListItemType[]>>;
};

function AddItemForm({ setPackingListItems }: AddItemFormProps) {
  const [text, setText] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setPackingListItems((prevItems) => {
      const newItem: PackingListItemType = {
        id: uuidv4(),
        name: text,
        isPacked: false,
      };

      return [...prevItems, newItem];
    });

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
