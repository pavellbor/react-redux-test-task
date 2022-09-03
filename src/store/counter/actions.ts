import { nanoid } from '@reduxjs/toolkit';
import { CounterActionType } from '../../const';
import {
  DecrementCounterAction,
  Id,
  IncrementCounterAction,
  RemoveCounterAction,
} from '../../types/counter';

export const addCounter = () => ({
  type: CounterActionType.ADD_COUNTER,
  payload: nanoid(),
});

export const removeCounter = (id: Id): RemoveCounterAction => ({
  type: CounterActionType.REMOVE_COUNTER,
  payload: id,
});

export const incrementCounter = (id: Id): IncrementCounterAction => ({
  type: CounterActionType.INCREMENT_COUNTER,
  payload: id,
});

export const decrementCounter = (id: Id): DecrementCounterAction => ({
  type: CounterActionType.DECREMENT_COUNTER,
  payload: id,
});
