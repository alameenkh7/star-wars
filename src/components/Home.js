import React, { Component } from 'react';
import {Menu, Container} from 'semantic-ui-react'
import '../App.css'
import { TimelineLite } from "gsap";
import logo from "../logo.svg";
// export default function Home (){
// 	constructor(props) {
//     	super(props);
//     	this.intro = React.createRef(); 
//   	}
// 	return (
// 		<div class="home">
// 		<p>home</p>
// 		</div>
// 	)
// import "./App.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.intro = React.createRef(); // shiny new React 16.3 ref API!
    this.logo = React.createRef();
  }
componentDidMount() {
    const tl = new TimelineLite();
    
    tl
      .to(this.intro.current, 4.5, { opacity: 1, delay: 1 })
      .to(this.intro.current, 1.5, { opacity: 0 });
  }

  render() {
    return (
      <div className="home">
        <section className="intro" ref={this.intro}>
          <p>
            A long time ago, in a galaxy far,<br /> far away....
          </p>
        </section>
        <section className="logo" ref={this.logo}>
          <img src={logo} alt="Code Wars logo" />
        </section>
      </div>
    );
  }
}

export default Home;