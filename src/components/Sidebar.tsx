import { usePackingListItemsStore } from "../stores/packingListItemsStore";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

function Sidebar() {
  const addItem = usePackingListItemsStore((state) => state.addItem);

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
}

export default Sidebar;
