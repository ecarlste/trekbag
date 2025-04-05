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
    </li>
  );
}

export default PackingListItem;
