import React, { Component } from 'react'
import PageEdit from './PageEdit'


class StoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderPageEdit(pageId) {
    return (
      <PageEdit
        value={4}
      />
    )
  }


  render()   {
    console.log("thisProps is :", this.props)
    return (
      <div>
        <h1>I am a story</h1>
        <p>My StoryId: {this.props.storyId}</p>

      </div>);
  }
}

export default StoryContainer;
