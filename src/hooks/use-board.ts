import { useDispatch } from 'react-redux';
import { addCounter } from '../store/counter/actions';
import { Counters } from '../types/counter';
import { useTypedSelector } from './use-typed-selector';

const useBoard = (): { counters: Counters; onAddCounter: () => void } => {
  const counters = useTypedSelector((state) => state.counter);

  const dispatch = useDispatch();
  const onAddCounter = () => dispatch(addCounter());

  return {
    counters,
    onAddCounter,
  };
};

export { useBoard };
