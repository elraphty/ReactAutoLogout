import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import IdleTimer from 'react-idle-timer';

// Components 
import Login from './components/Login';
import Home from './components/Home';

class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      autoLogout: false,
    }

    this.idleTimer = null;
    this.onActive = this._onActive.bind(this);
    this.onIdle = this._onIdle.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {

  }
  
  _onActive(e) {
    // console.log('user is active', e);
    // console.log('time remaining', this.idleTimer.getRemainingTime());
  }
 
  _onIdle(e) {
    // console.log('user is idle after 30 secs', e);
    // console.log('last active', this.idleTimer.getLastActiveTime());

    window.onblur = () => {
      console.log('Blurred');
      this.setState({autoLogout: true});
    }
  
    window.onfocus = () => {
      console.log('Focused');
      this.setState({autoLogout: false});
    }

    // Check if the user is logged in or not
    // console.log('Token', token);
    
    if(this.state.autoLogout) {
      return window.location.href = '/';
    }else {
      return null; 
    }
  }
  
  render() {
    return (
      <IdleTimer
        tabIndex="1"
        ref={ref => { this.idleTimer = ref }}
        element={document}
        onActive={this.onActive}
        onIdle={this.onIdle}
        timeout={1000 * 30}
      >
        <Router>
          <div className="App">
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
          </div>
        </Router>
      </IdleTimer>
    );
  }
}

export default App;
