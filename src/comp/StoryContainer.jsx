import React, { Component } from 'react'
import PageContainer from './PageContainer'

class StoryContainer extends Component {
  constructor(props) {
    super(props);
    // expects a pageId prop  /// Ask OR lookup about how to require props
    this.state = { editMode: props.editMode };
    console.log("STORY", props)
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
    return (
      <div>
        <div>
          <h1>I am a story</h1>
          <p>My StoryId: {this.props.storyId}</p>
        </div>
        <PageContainer  pageId={this.props.pageId}/>
      </div>
    )

  }
}

export default StoryContainer;
