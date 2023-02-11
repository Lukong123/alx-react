import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> School dashboard</h1>
        <body className='App-body'> 
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email: </label> 
          <input name="email" type="email" id="email"></input> <br></br>
          <label htmlFor="password">Password: </label>
          <input name="password" type="password" id="password"></input><br></br>
          <button>OK</button>
        
        </body>
        <footer className='App-footer'> <p>{getFooterCopy(true)} - {getFullYear()} </p></footer>
      </header>
    </div>
  );
}

export default App;
