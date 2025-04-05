import { PackingListItemType } from "../lib/types";
import PackingListItem from "./PackingListItem";

type PackingListProps = {
  items: PackingListItemType[];
  handleDeleteItem: (id: string) => void;
};

function PackingList({ items, handleDeleteItem }: PackingListProps) {
  return (
    <ul className="packing-list">
      {items.map((item) => (
        <PackingListItem
          key={item.id}
          item={item}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </ul>
  );
}

export default PackingList;
