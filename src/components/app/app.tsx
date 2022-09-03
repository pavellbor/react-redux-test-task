import { Provider } from 'react-redux';
import { store } from '../../store';
import Board from '../board/board';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Board />
    </Provider>
  );
}

export default App;
