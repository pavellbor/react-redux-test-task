import { CounterActionType, CounterType } from '../../const';
import { Counter, CounterAction, Counters, Id } from '../../types/counter';

const initialState: Counters = [];

const createCounter = (counters: Counters, id: Id): Counter => {
  const nextCountersIndex = counters.length + 1;

  const type =
    nextCountersIndex !== 1 && nextCountersIndex % 4 === 0
      ? CounterType.Uncontrollable
      : CounterType.Controllable;
  const value = counters.reduce((sum, counter) => sum + counter.value, 0);

  return {
    id,
    type,
    value,
  };
};

const counterReducer = (state = initialState, action: CounterAction): Counters => {
  switch (action.type) {
    case CounterActionType.ADD_COUNTER:
      const counter = createCounter(state, action.payload);
      return [...state, counter];
    case CounterActionType.REMOVE_COUNTER:
      return state.filter((counter) => counter.id !== action.payload);
    case CounterActionType.INCREMENT_COUNTER:
      return state.map((counter) =>
        counter.id === action.payload ? { ...counter, value: counter.value + 1 } : counter,
      );
    case CounterActionType.DECREMENT_COUNTER:
      return state.map((counter) =>
        counter.id === action.payload ? { ...counter, value: counter.value - 1 } : counter,
      );
    default:
      return state;
  }
};

export { counterReducer };
