import React, { Component } from 'react';
import logo from './blg.jpg';
import './App.css';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    alert('success!');
  }

  render() {
    let component

    component = <div>
      <h3>Hello and Welcome!</h3>

      <h3>Another header...</h3>

      <p>a paragraph of text</p>

      <h3>A button, try it!</h3>
      <RaisedButton label="Try me" primary={true}
        onClick={() => alert('click!')}
      />
    </div>

    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} alt="logo" style={{height: '150px', width: '350px'}}/>
          </header>
          {component}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
