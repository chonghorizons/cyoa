import React, { Component } from 'react'
import request from 'request-promise'
import axios from 'axios'

class FrontMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specificStory: "",
      sessionInfo: "zzzz",
      firstPagesArray: [],
    }
    this.componentDidMount= this.componentDidMount.bind(this);
  };

componentDidMount() {
    var tempR=axios.get('http://localhost:3001/api/v1/Page')
    // var tempR=request.get({
    //   url: 'http://localhost:3001/api/v1/Page',
    // })
    // // qs: {
    // //   query: JSON.stringify({
    // //     isFirst: true
    // //   })
    // // }
    console.log(typeof(tempR));
    console.log(tempR);
    tempR.then((firstPagesArray)=>{
      this.setState({firstPagesArray: firstPagesArray.data})
    })
    .catch(()=>alert("error, loading firstPages"))
  }

  render()   {
    console.log("FIRSTPAGESARRAY: ", this.state.firstPagesArray)
    console.count("LENGTH: " +this.state.firstPagesArray.length)
    let numStories=this.state.firstPagesArray.length;
    return (
      <div>
        <p> Put a menu here.</p>
      <h2>There are {numStories} stories in HochoChooseAdventure</h2>
        <ol>
          <CreateMainButton />
          <li>Go To a Specific Story: <input type="text" onChange={(e)=>this.setState({storyId: e.target.value})} /><input type="submit" value="Go" onClick={this.goToSpecificStory} /></li>
          <li><input type="submit" value="Random Story -- I feel lucky" onClick={this.goToRandomStory} /></li>
          <li><input type="submit" value="Browse Stories -- categories" onClick={this.goToBrowseCategories} /></li>
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
