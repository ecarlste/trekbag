import { X } from "lucide-react";
import { PackingListItemType } from "../lib/types";

type PackingListItemProps = {
  item: PackingListItemType;
};

function PackingListItem({ item }: PackingListItemProps) {
  return (
    <li className="packing-list-item">
      <label>
        <input type="checkbox" />
        {item.name}
      </label>
      <button>
        <X className="delete-button-x" />
      </button>
    </li>
  );
}

export default PackingListItem;
