import React, { Component } from 'react'
import PageContainer from './PageContainer'

class StoryContainer extends Component {
  constructor(props) {
    super(props);
    // expects a pageId prop  /// Ask OR lookup about how to require props
    this.state = { editMode: props.editMode };
  }

  viewPageEdit() {
    return (
      <div>
        EDITING
      </div>
    )
  }

  viewNormal() {
    return (
      <div>
        <h1>I am a story</h1>
        <p>My StoryId: {this.props.storyId}</p>
      </div>)
  }

  render()   {
    console.log("thisProps is :", this.props);
    const myStuff =  this.state.editMode ? this.viewPageEdit() : this.viewNormal();
    return (
      <div>
       {myStuff}
       <PageContainer editMode={false} />
      </div>
    )

  }
}

export default StoryContainer;
