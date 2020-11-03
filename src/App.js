import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class = "header">Hello and welcome to the Movie Blog! </div>
	<div className = "info">
	<a className = "contact us" href= "Ethan Tam Main Page.html" target = "_blank">Contact Us	</a>
	</div>
      <header className="App-header">
	 <title> Movie Blog.HTML </title> 
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
