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

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <PackingList packingListItems={packingListItems} />
        <Sidebar>
          <AddItemForm handleAddItem={handleAddItem} />
          <ButtonGroup />
        </Sidebar>
      </main>

      <Footer />
    </>
  );
}

export default App;
