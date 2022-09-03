import { useBoard } from '../../hooks/use-board';
import CounterItem from '../counter-item/counter-item';

function Board(): JSX.Element {
  const { counters, onAddCounter } = useBoard();

  return (
    <>
      <ul>
        {counters.map((counter) => (
          <li key={counter.id}>
            <CounterItem {...counter} />
          </li>
        ))}
      </ul>
      <button onClick={onAddCounter}>Add counter</button>
    </>
  );
}

export default Board;
