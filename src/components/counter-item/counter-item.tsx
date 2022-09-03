import { useCounter } from '../../hooks/use-counter';
import { Counter } from '../../types/counter';

function CounterItem({ id, type, value }: Counter): JSX.Element {
  const { isControllable, onIncrement, onDecrement, onRemove } = useCounter(id, type);

  return (
    <>
      {isControllable && <button onClick={onIncrement}>+</button>}
      {value}
      {isControllable && <button onClick={onDecrement}>-</button>}
      <button onClick={onRemove}>Remove</button>
    </>
  );
}

export default CounterItem;
