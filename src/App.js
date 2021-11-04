import { Provider } from 'react-redux';
import { store } from './app/store';

import './App.css';
import Button from './components/ui/button/Button';

const App = () => {
  return (
    <Provider store={store}>
      <h1 className="grating-message">Redux setup!</h1>
      <Button />
    </Provider>
  );
};

export default App;
