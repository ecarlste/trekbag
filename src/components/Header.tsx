import Counter from "./Counter";
import Logo from "./Logo";

type HeaderProps = {
  completedItemCount: number;
  totalItemCount: number;
};

function Header({ completedItemCount, totalItemCount }: HeaderProps) {
  return (
    <header>
      <Logo />
      <Counter
        completedItemCount={completedItemCount}
        totalItemCount={totalItemCount}
      />
    </header>
  );
}

export default Header;
