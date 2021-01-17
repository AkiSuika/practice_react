import React, { Component } from 'react'; // 追記
import logo from './logo.svg';
import './App.css';
import Content from './content'

// fontawesome
// import initFontAwesome from "./utils/initFontAwesome";
// initFontAwesome();

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='Container'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target='_blank'
            rel='noopener noreferrer'
            >
              Learn React!
            </a>
            <p>
              <input type="text" name="in01" size="15" maxlength="20" value="abc" placeholder="sample" />
              <button type="button" name="name" value="value">button</button>
            </p>
            <Content />
        </header>
      </div>
      </div>
    );
  }
}
 
export default App;
