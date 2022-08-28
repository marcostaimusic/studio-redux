import { useSelector, useDispatch } from "react-redux";

function App() {
  const state = useSelector((state) => {
    console.log(state.counter);
    return state;
  });
  const dispatch = useDispatch();
  const piu = () => {
    dispatch({ type: "piu" });
  };
  const meno = () => {
    dispatch({ type: "meno" });
  };

  const amount = () => {
    dispatch({ type: "amount", payload: 1 });
  };

  return (
    <div>
      <h3>Counter App</h3>
      <h4>{state.counter}</h4>
      <button onClick={piu}>+</button>
      <button onClick={meno}>-</button>
      <button onClick={amount}>+3</button>
    </div>
  );
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }

// export default App;
