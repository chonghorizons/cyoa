import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import FrontMain from './comp/FrontMain'
import StoryContainer from './comp/StoryContainer'
import FrontMain from './comp/FrontMain'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      mode: "debug", // other modes are "edit" and "read" and frontMain
      storyId: ""
    }
  }


  goToSpecificStory() {

  }

  goToRandomStory() {
    "zzz need to implement"
  }

  goToBrowseCategories() {
    "zzz need to implement"
  }


  render() {
    if (this.state.mode==="frontMain") {
      return (
        <div>
          <FrontMain />
          <img src={logo} alt="logo of React" width="50px" height="50px" />
        </div>
      );
    } else if (this.state.mode==="edit") {
      return (<div>Need to implment edit page.</div>)
    } else if (this.state.mode==="debug") {
      return (<div>
        <FrontMain />
        <img src={logo} alt="logo of React" width="50px" height="50px" />
        <StoryContainer storyId={this.state.storyId}/>
      </div>)
    } else if (this.state.mode==="read") {
      return (
        <div>
          <StoryContainer storyId={this.state.storyId}/>
        </div>
      );
    }
  }
}

export default App;
