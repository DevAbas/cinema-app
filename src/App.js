import { Provider } from 'react-redux';
import { store } from './app/store';

import './App.css';
import Header from './components/header/Header';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
      </div>
    </Provider>
  );
};

export default App;
