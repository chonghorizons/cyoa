import React, { Component } from 'react'
import axios from 'axios'

class FrontMain extends Component {
  // create new story render prop, go to story render prop
  constructor(props) {
    super(props);
    this.state = {
      specificStory: "5b5b9491fb48da26ecb86643",
      sessionInfo: "zzzz",
      firstPagesArray: [],
    }
    this.componentDidMount= this.componentDidMount.bind(this);
  };

componentDidMount() {
    var tempR=axios.get('http://localhost:3001/api/v1/Page?query={"isFirst":true}')
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
          <CreateMainButton createNew={this.props.createNew} />
          <li>Go To a Specific Story:
            <input type="text" value={this.state.specificStory} onChange={(e)=>this.setState({specificStory: e.target.value})} />
            spacer spacer
            <input type="submit" value="Go" onClick= {(e)=>{
              e.preventDefault();
              debugger;
              console.log("line47FM", this.state.specificStory)
              this.props.goToSpecificStory(this.state.specificStory)
              console.log("line52FM", this.state.specificStory)
            }} />
          </li>
          <li><input type="submit" value="Random Story -- I feel lucky" onClick={this.goToRandomStory} /></li>
          <li><input type="submit" value="Browse Stories -- categories" onClick={this.goToBrowseCategories} /></li>
        </ol>
      </div>);
  }
}


function CreateMainButton(props) {
    return (
      <button className="createStory" onClick={props.createNew}>
        Create New Story
      </button>
    );
}


export default FrontMain;
