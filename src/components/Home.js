import React, { Component } from 'react';
import {Menu, Container} from 'semantic-ui-react'
import '../App.css'
import { Power2,TimelineLite } from "gsap";
import logo from '../logo.png';

class Home extends Component {

  constructor(props) {
  	console.log("starts",logo);
    super(props);
    this.intro = React.createRef(); // shiny new React 16.3 ref API!
    this.logo = React.createRef();
    this.content = React.createRef();
  }
componentDidMount() {
    const tl = new TimelineLite();
    tl
      .to(this.intro.current, 4.5, { opacity: 1, delay: 1 })
      .to(this.intro.current, 1.5, { opacity: 0 })
      .set(this.logo.current, { opacity: 1, scale: 2.75 })
      .to(this.logo.current, 8, { 
        scale: 0.05, 
        ease: Power2.easeOut
      })
      .to(this.logo.current, 1.5, { opacity: 0 }, "-=1.5")
      .to(this.content.current, 200, { top: "-170%" });
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
          <img src={logo} alt="Star Wars logo" />
        </section>
        <section className="crawl">
		  <div className="mainContent" ref={this.content}>
		  <p>
		   	To get the details of People and Planet on the star wars Click on the menu on the navbars.
		  </p> 	
		  </div>
		</section>
      </div>
    );
  }
}

export default Home;