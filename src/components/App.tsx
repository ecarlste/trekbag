import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import PackingList from "./PackingList";
import Sidebar from "./Sidebar";
import { initialPackingListItems } from "../lib/constants";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { PackingListItemType } from "../lib/types";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";

function App() {
  const [packingListItems, setPackingListItems] = useState<
    PackingListItemType[]
  >(initialPackingListItems);

  const handleAddItem = (newItemName: string) => {
    setPackingListItems((prevItems) => [
      ...prevItems,
      { id: uuidv4(), name: newItemName, isPacked: false },
    ]);
  };

  const handleDeteteItem = (id: string) => {
    setPackingListItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  const handleToggleItemPacked = (id: string) => {
    setPackingListItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isPacked: !item.isPacked,
          };
        }

        return item;
      })
    );
  };

  const handleMarkAllAsComplete = () => {
    setPackingListItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        isPacked: true,
      }))
    );
  };

  const handleMarkAllAsIncomplete = () => {
    setPackingListItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        isPacked: false,
      }))
    );
  };

  const handleResetToInitial = () => {
    setPackingListItems(initialPackingListItems);
  };

  const handleRemoveAllItems = () => {
    setPackingListItems([]);
  };

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <PackingList
          items={packingListItems}
          handleDeleteItem={handleDeteteItem}
          handleToggleItemPacked={handleToggleItemPacked}
        />

        <Sidebar>
          <AddItemForm onAddItem={handleAddItem} />
          <ButtonGroup>
            <Button variant="secondary" handleClick={handleMarkAllAsComplete}>
              Mark all as complete
            </Button>
            <Button variant="secondary" handleClick={handleMarkAllAsIncomplete}>
              Mark all as incomplete
            </Button>
            <Button variant="secondary" handleClick={handleResetToInitial}>
              Reset to initial
            </Button>
            <Button variant="secondary" handleClick={handleRemoveAllItems}>
              Remove all items
            </Button>
          </ButtonGroup>
        </Sidebar>
      </main>

      <Footer />
    </>
  );
}

export default App;
