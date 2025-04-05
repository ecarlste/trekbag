import { PackingListItemType } from "../lib/types";
import PackingListItem from "./PackingListItem";

type PackingListProps = {
  items: PackingListItemType[];
  handleDeleteItem: (id: string) => void;
  handleToggleItemPacked: (id: string) => void;
};

function PackingList({
  items,
  handleDeleteItem,
  handleToggleItemPacked,
}: PackingListProps) {
  return (
    <ul className="packing-list">
      {items.map((item) => (
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
