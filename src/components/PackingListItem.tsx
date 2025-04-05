import { X } from "lucide-react";
import { PackingListItemType } from "../lib/types";

type PackingListItemProps = {
  item: PackingListItemType;
  handleDeleteItem: (id: string) => void;
  handleToggleItemPacked: (id: string) => void;
};

function PackingListItem({
  item,
  handleDeleteItem,
  handleToggleItemPacked,
}: PackingListItemProps) {
  return (
    <li className="packing-list-item">
      <label>
        <input
          type="checkbox"
          checked={item.isPacked}
          onChange={() => handleToggleItemPacked(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>
        <X className="delete-button-x" />
      </button>
    </li>
  );
}

export default PackingListItem;
