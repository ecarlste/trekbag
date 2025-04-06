import { useEffect } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import PackingList from "./PackingList";
import Sidebar from "./Sidebar";
import { usePackingListItemsStore } from "../stores/packingListItemsStore";

function App() {
  const packingListItems = usePackingListItemsStore(
    (state) => state.packingListItems
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(packingListItems));
  }, [packingListItems]);

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <PackingList />
        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;
