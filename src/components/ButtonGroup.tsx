import { usePackingListItemsStore } from "../stores/packingListItemsStore";
import Button from "./Button";

function ButtonGroup() {
  const markAllAsComplete = usePackingListItemsStore(
    (state) => state.markAllAsComplete
  );
  const markAllAsIncomplete = usePackingListItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = usePackingListItemsStore(
    (state) => state.resetToInitial
  );
  const removeAllItems = usePackingListItemsStore(
    (state) => state.removeAllItems
  );

  return (
    <section className="button-group">
      <Button variant="secondary" handleClick={markAllAsComplete}>
        Mark all as complete
      </Button>
      <Button variant="secondary" handleClick={markAllAsIncomplete}>
        Mark all as incomplete
      </Button>
      <Button variant="secondary" handleClick={resetToInitial}>
        Reset to initial
      </Button>
      <Button variant="secondary" handleClick={removeAllItems}>
        Remove all items
      </Button>
    </section>
  );
}

export default ButtonGroup;
