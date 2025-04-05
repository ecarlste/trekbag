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

function App() {
  const [packingListItems, setPackingListItems] = useState<
    PackingListItemType[]
  >(initialPackingListItems);

  const handleAddItem = (newItem: PackingListItemType) => {
    setPackingListItems((prevItems) => [...prevItems, newItem]);
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
