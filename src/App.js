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
      storyId: "",
    }
  }


  createNewStory() {
    // go to edit mode.
    this.setState({mode: "edit"})
  }

  goToSpecificStory(x) {
    console.log("line24x", x)
    console.log("GOTOSPECIFIC", this.state)
    this.setState({
      storyId: x,
      pageId: x,
      mode: "read"
    })
  }

  goToRandomStory() {
    "zzz need to implement"
  }

  goToBrowseCategories() {
    "zzz need to implement"
  }


  render() {
    console.log("IN RENDER", this.state)
    if (this.state.mode==="frontMain") {
      return (
        <div>
          <FrontMain createNew={() => this.createNewStory()}  goToSpecificStory={(...x) => this.goToSpecificStory(...x)}/>
          <img src={logo} alt="logo of React" width="50px" height="50px" />
        </div>
      );

    } else if (this.state.mode==="edit") {
      return (<div onClick={() => this.setState({mode: "debug"})}>Need to implment edit page.</div>)
      console.log("(<EditContainer pageId={this.state.pageId} isNew={false} helpfulInfo={{backlink: 'ZZZZZZ', storyId: 'ZZZZZZ'}}/>)")

    } else if (this.state.mode==="debug") {
      return (<div>
        <FrontMain createNew={() => this.createNewStory()} goToSpecificStory={(...x) => this.goToSpecificStory(...x)} />
        <img src={logo} alt="logo of React" width="50px" height="50px" />
        <StoryContainer storyId={this.state.storyId}/>
      </div>)

    } else if (this.state.mode==="read") {
      return (
        <div>
          <StoryContainer storyId={this.state.storyId} />
        </div>
      );
    }
  }
}

export default App;
