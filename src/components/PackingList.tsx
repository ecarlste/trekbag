import { useState } from "react";
import { initialPackingListItems } from "../lib/constants";
import PackingListItem from "./PackingListItem";

function PackingList() {
  const [packingListItems] = useState(initialPackingListItems);

  return (
    <ul className="packing-list">
      {packingListItems.map((item) => (
        <PackingListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default PackingList;
