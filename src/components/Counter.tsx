type CounterProps = {
  completedItemCount: number;
  totalItemCount: number;
};

function Counter({ completedItemCount, totalItemCount }: CounterProps) {
  return (
    <p>
      <b>{completedItemCount}</b> / {totalItemCount} items packed
    </p>
  );
}

export default Counter;
