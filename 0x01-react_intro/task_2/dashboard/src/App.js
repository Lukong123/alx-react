import logo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy} from './utils';
import './App.css';
import './Notifications.js'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
        </div>
        <div className="App-body">
          <p> Login to access the full dashboard </p>

          <label htmlFor="email"> Enter Email: </label>
          <input type="email"></input>
          <label htmlFor="password">  Enter Password: </label>
          <input type="password"></input>
          <button>OK</button>
        </div>
        <div className="App-footer">
          <p> Copyright {getFullYear()} -{getFooterCopy(true)}</p>
        </div>
      </div>
  );
}

export default App;
