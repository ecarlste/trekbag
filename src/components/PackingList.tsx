import { PackingListItemType } from "../lib/types";
import PackingListItem from "./PackingListItem";

type PackingListProps = {
  packingListItems: PackingListItemType[];
};

function PackingList({ packingListItems }: PackingListProps) {
  return (
    <ul className="packing-list">
      {packingListItems.map((item) => (
        <PackingListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default PackingList;
