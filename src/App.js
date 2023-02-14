import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCounter, minusCounter } from './action';

function App() {
  const state = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();

  const minus = () => {
    dispatch(minusCounter());
  };

  const plus = () => {
    dispatch(addCounter());
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div className="count">{state}</div>
        <div className="buttonWrapper">
          <button onClick={minus}> - </button>
          <button onClick={plus}> + </button>
        </div>
      </header>
    </div>
  );
}

export default App;
