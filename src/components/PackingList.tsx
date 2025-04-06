import Select from "react-select";
import PackingListEmpty from "./PackingListEmpty";
import PackingListItem from "./PackingListItem";
import { useMemo, useState } from "react";
import { usePackingListItemsStore } from "../stores/packingListItemsStore";

const sortingOptions = [
  { value: "default", label: "Sort by Default" },
  { value: "packed", label: "Sort by Packed" },
  { value: "unpacked", label: "Sort by Unpacked" },
];

function PackingList() {
  const packingListItems = usePackingListItemsStore(
    (state) => state.packingListItems
  );
  const deleteItem = usePackingListItemsStore((state) => state.deleteItem);
  const toggleItemPacked = usePackingListItemsStore(
    (state) => state.toggleItemPacked
  );
  const [sortBy, setSortBy] = useState(sortingOptions[0].value);

  const sortedItems = useMemo(
    () =>
      [...packingListItems].sort((a) => {
        if (sortBy === "packed") {
          return a.isPacked ? -1 : 1;
        }

        if (sortBy === "unpacked") {
          return a.isPacked ? 1 : -1;
        }

        return 0;
      }),
    [packingListItems, sortBy]
  );

  return (
    <ul className="packing-list">
      {packingListItems.length === 0 && <PackingListEmpty />}

      {packingListItems.length > 0 && (
        <section className="sorting">
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option?.value || "default")}
          />
        </section>
      )}

      {sortedItems.map((item) => (
        <PackingListItem
          key={item.id}
          item={item}
          onDeleteItem={deleteItem}
          onToggleItemPacked={toggleItemPacked}
        />
      ))}
    </ul>
  );
}

export default PackingList;
