import { packingListItems } from "../lib/constants";
import PackingListItem from "./PackingListItem";

function PackingList() {
  return (
    <ul className="packing-list">
      {packingListItems.map((item) => (
        <PackingListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default PackingList;
