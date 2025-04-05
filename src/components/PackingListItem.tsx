import { X } from "lucide-react";
import { PackingListItemType } from "../lib/types";

type PackingListItemProps = {
  item: PackingListItemType;
  onDeleteItem: (id: string) => void;
  onToggleItemPacked: (id: string) => void;
};

function PackingListItem({
  item,
  onDeleteItem,
  onToggleItemPacked,
}: PackingListItemProps) {
  return (
    <li className="packing-list-item">
      <label>
        <input
          type="checkbox"
          checked={item.isPacked}
          onChange={() => onToggleItemPacked(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>
        <X className="delete-button-x" />
      </button>
    </li>
  );
}

export default PackingListItem;
