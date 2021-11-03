import { Provider } from 'react-redux';
import { store } from './app/store';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="grating-message">Redux setup!</div>
    </Provider>
  );
};

export default App;
