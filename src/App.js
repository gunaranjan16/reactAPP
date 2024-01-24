import logo from './logo.svg';
import './App.css';
//import TestComponent from './components/functionalComponents/testComponents';
//import ReiteratorComp from './components/classComponents/testClassComp';
import Login from './components/classComponents/LoginComponent';
function App() {
  return (
    <div className="App">
      {/* <ReiteratorComp/>
      <TestComponent></TestComponent> */}
      <header className="App-header">
      {/* <TestComponent/> */}
      <Login></Login>
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
      </header>
    </div>
  );
}

export default App;
