import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/root-reducer';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useTypedSelector };
