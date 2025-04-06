import { usePackingListItemsStore } from "../stores/packingListItemsStore";
import Counter from "./Counter";
import Logo from "./Logo";

function Header() {
  const packingListItems = usePackingListItemsStore(
    (state) => state.packingListItems
  );

  return (
    <header>
      <Logo />
      <Counter
        completedItemCount={
          packingListItems.filter((item) => item.isPacked).length
        }
        totalItemCount={packingListItems.length}
      />
    </header>
  );
}

export default Header;
