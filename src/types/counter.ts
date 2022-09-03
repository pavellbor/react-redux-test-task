import { CounterActionType, CounterType } from '../const';

export type Id = string;

export type Counter = { id: Id; type: CounterType; value: number };

export type Counters = Counter[];

export type AddCounterAction = {
  type: CounterActionType.ADD_COUNTER;
  payload: Id;
};

export type RemoveCounterAction = {
  type: CounterActionType.REMOVE_COUNTER;
  payload: Id;
};

export type IncrementCounterAction = {
  type: CounterActionType.INCREMENT_COUNTER;
  payload: Id;
};

export type DecrementCounterAction = {
  type: CounterActionType.DECREMENT_COUNTER;
  payload: Id;
};

export type CounterAction =
  | AddCounterAction
  | RemoveCounterAction
  | IncrementCounterAction
  | DecrementCounterAction;
