import { X } from "lucide-react";
import { PackingListItemType } from "../lib/types";

type PackingListItemProps = {
  item: PackingListItemType;
  handleDeleteItem: (id: string) => void;
};

function PackingListItem({ item, handleDeleteItem }: PackingListItemProps) {
  const handleToggleIsPacked = () => {
    item.isPacked = !item.isPacked;
  };

  return (
    <li className="packing-list-item">
      <label onClick={handleToggleIsPacked}>
        <input type="checkbox" checked={item.isPacked} />
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>
        <X className="delete-button-x" />
      </button>
    </li>
  );
}

export default PackingListItem;
