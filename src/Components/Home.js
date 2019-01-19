import React, { Component } from 'react';
import Typewriter from "typewriter-effect";

import './home.css'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { loading:false }
    }

    quote = () => {
        if(this.state.loading){
            return (
           <section>
               <h2 className="subtitle">Front-end Developer</h2>
               <p id="quote" className="is-size-7-mobile">"Any sufficiently advanced technology is indistinguishable from magic" <br/> -Arthur C. Clarke</p>
               <a id="press-to-enter">PRESS TO ENTER</a>
               <p id="scrolldown">or scroll down</p>
           </section>
            )
        }
    }
    render() { 
        return ( 
        <section className="home">
            <div className="container">
            <h1 className="title"> 
            <Typewriter
              onInit={typewriter => {
                typewriter
                  .typeString("Tzu Pratts")
                  .callFunction(() => {
                    this.setState({ loading: true });
                  })
                  .pauseFor(2500)
                  .start();
              }}
            />
            </h1>
            {this.quote()}
            </div>
          </section> );
    }
}

 
export default Home;