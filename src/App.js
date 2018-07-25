import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import FrontMain from './comp/FrontMain'
import StoryContainer from './comp/StoryContainer'

class App extends Component {
  render() {
    return (
      <div>
        {/* <FrontMain /> */}
        <img src={logo} width="50px" height="50px" />
        <StoryContainer storyId={1001} />
      </div>
    );
  }
}

export default App;
