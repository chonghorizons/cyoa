import React, { Component } from 'react'

class FrontMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render()   {
    return (
      <div>
        <p> Put a menu here.</p>
        <h2>There are N zzzz stories in ChooseAdventure</h2>
        <ol>
          <CreateMainButton />
          <ul>Go To a Specific Story</ul>
          <ul>Random Story -- I feel lucky</ul>
          <ul>Browse Stories -- I feel lucky</ul>
        </ol>
      </div>);
  }
}


function CreateMainButton(props) {
    return (
      <button className="createStory" onClick={props.onClickCreate}>
        Create New Story
      </button>
    );
}


export default FrontMain;
