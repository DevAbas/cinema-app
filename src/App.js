import { Provider } from 'react-redux';
import { store } from './app/store';

import Header from './components/header/Header';
import Main from './components/main/Main';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="app">
        <Main />
      </div>
    </Provider>
  );
};

export default App;
