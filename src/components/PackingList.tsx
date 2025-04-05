import PackingListItem from "./PackingListItem";

function PackingList() {
  return (
    <ul className="packing-list">
      <PackingListItem text="good mood" />
      <PackingListItem text="passport" />
      <PackingListItem text="charger" />
    </ul>
  );
}

export default PackingList;
