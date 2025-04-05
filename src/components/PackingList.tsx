import Select from "react-select";
import { PackingListItemType } from "../lib/types";
import PackingListEmpty from "./PackingListEmpty";
import PackingListItem from "./PackingListItem";
import { useState } from "react";

type PackingListProps = {
  items: PackingListItemType[];
  handleDeleteItem: (id: string) => void;
  handleToggleItemPacked: (id: string) => void;
};

const sortingOptions = [
  { value: "default", label: "Sort by Default" },
  { value: "packed", label: "Sort by Packed" },
  { value: "unpacked", label: "Sort by Unpacked" },
];

function PackingList({
  items,
  handleDeleteItem,
  handleToggleItemPacked,
}: PackingListProps) {
  const [sortBy, setSortBy] = useState(sortingOptions[0].value);

  const sortedItems = [...items].sort((a) => {
    if (sortBy === "packed") {
      return a.isPacked ? -1 : 1;
    }

    if (sortBy === "unpacked") {
      return a.isPacked ? 1 : -1;
    }

    return 0;
  });

  return (
    <ul className="packing-list">
      {items.length === 0 && <PackingListEmpty />}

      {items.length > 0 && (
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
          onDeleteItem={handleDeleteItem}
          onToggleItemPacked={handleToggleItemPacked}
        />
      ))}
    </ul>
  );
}

export default PackingList;
