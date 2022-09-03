import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CounterType } from '../const';
import { decrementCounter, incrementCounter, removeCounter } from '../store/counter/actions';
import { Id } from '../types/counter';

const useCounter = (
  id: Id,
  type: CounterType,
): {
  isControllable: boolean;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
} => {
  const isControllable = type === CounterType.Controllable;

  const dispatch = useDispatch();

  const onIncrement = () => dispatch(incrementCounter(id));
  const onDecrement = () => dispatch(decrementCounter(id));
  const onRemove = () => dispatch(removeCounter(id));

  useEffect(() => {
    if (isControllable) {
      return;
    }

    const timerId = setInterval(() => {
      dispatch(incrementCounter(id));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return {
    isControllable,
    onIncrement,
    onDecrement,
    onRemove,
  };
};

export { useCounter };
