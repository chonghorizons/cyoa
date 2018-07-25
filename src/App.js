import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import FrontMain from './comp/FrontMain'
import StoryContainer from './comp/StoryContainer'
import FrontMain from './comp/FrontMain'

class App extends Component {
  render() {
    return (
      <div>
        <FrontMain />
      <img src={logo} alt="logo of React" width="50px" height="50px" />
    <StoryContainer editMode={false} storyId={1001} password="notSecure" />
      </div>
    );
  }
}

export default App;
