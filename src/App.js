import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counter';

function App() {
  const count = useSelector(state => state.counter.count);
  const [inputValue, setInputValue] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Redux Toolkit Demo</h1>
      <p>Value: {count} </p>
      <input
        value={inputValue}
        onChange={e => setInputValue(parseInt(e.target.value))}
      />
      <br />
      <br />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button
        onClick={() => {
          console.log(inputValue);
          dispatch(incrementByAmount(inputValue));
        }}
      >
        Add Custom Amount
      </button>
    </div>
  );
}

export default App;
