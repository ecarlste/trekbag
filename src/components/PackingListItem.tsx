type PackingListItemProps = {
  text: string;
};

function PackingListItem({ text }: PackingListItemProps) {
  return (
    <li className="packing-list-item">
      <label>
        <input type="checkbox" />
        {text}
      </label>
    </li>
  );
}

export default PackingListItem;
