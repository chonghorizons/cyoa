import React, { Component } from 'react'

class PageEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render()   {
    return (<p> I am a page with pageid {this.props.pgId}</p>);
  }
}

export default PageEdit;
