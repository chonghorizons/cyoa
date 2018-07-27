import React, { Component } from 'react'



class PageContainer extends Component {
    // expects a pageId prop  /// Ask OR lookup about how to require props
  constructor(props) {
    super(props);
    let janky=true
    if (!props.pageId && !janky) {
      throw {errorMessage: "PageContainer needs a page id"}
    }
    this.state = {
        storyText:"LOADING",
        link1:"",
        link2:"",
        link3:"",
        link4:"",
    };
  }


  componentDidMount() {
    //axios get for the story PageText
    //set state.storyText and link fields.
  }

  viewPageEdit() {
    return (
      <div>
        PAGE EDITOR
      </div>
    )
  }

  viewNormal() {
    return (
      <div>
        <h1>I am a page</h1>
        <p>My PageId: {this.props.pageId}</p>
        <PageText specialProp="special" />
        <hr />
        <ul>
          <li><Link linknum={1} displayText="Go to gym" /> </li>
          <li><Link linknum={2} displayText="Eat ice cream" /> </li>
          <li><Link linknum={3} displayText="Call mom" /> </li>
          <li><Link linknum={4} displayText="Go to park" /> </li>
        </ul>
      </div>)
  }

  render()   {
    console.log("thisProps is :", this.props);
    const myStuff =  this.state.editMode ? this.viewPageEdit() : this.viewNormal();
    return (
      myStuff
    )

  }
}

function Link(props) {
  return (<a href="http://google.com"> {props.displayText} </a>);
};

class PageText extends Component {
  render() {
    if (this.props.specialProp==="pecial") {
      return (<div><p>      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt arcu non sodales neque sodales ut etiam. Egestas tellus rutrum tellus pellentesque eu tincidunt. Magna sit amet purus gravida quis blandit turpis. Donec pretium vulputate sapien nec sagittis. Fames ac turpis egestas sed tempus. Tortor id aliquet lectus proin nibh nisl condimentum. Volutpat maecenas volutpat blandit aliquam. Enim eu turpis egestas pretium aenean. Vitae suscipit tellus mauris a diam maecenas sed enim. Nulla facilisi nullam vehicula ipsum. Urna nunc id cursus metus aliquam eleifend mi in nulla. Mi quis hendrerit dolor magna eget est lorem ipsum. Nisl vel pretium lectus quam id leo in vitae. Integer quis auctor elit sed vulputate mi sit. Dictum non consectetur a erat nam at lectus urna duis.</p><p>        Amet facilisis magna etiam tempor orci. Blandit turpis cursus in hac habitasse platea dictumst. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Tempus urna et pharetra pharetra massa massa. Sit amet volutpat consequat mauris nunc congue nisi. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Feugiat vivamus at augue eget arcu dictum. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Sapien et ligula ullamcorper malesuada proin libero nunc. Nec feugiat in fermentum posuere urna. Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Mattis rhoncus urna neque viverra. Quis viverra nibh cras pulvinar mattis. Porttitor lacus luctus accumsan tortor posuere ac ut consequat semper.        </p>      </div>);
    } else {
      return (
        <div>
          <p>This is a story, all about how...{<span className="Weird">Al {<span>{5}</span>} yankovich {this.props.password}</span>}</p>
        </div>
      );
    }
  }
}


export default PageContainer;
