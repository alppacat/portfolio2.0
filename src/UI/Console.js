import React from 'react';
import Typewriter from "typewriter-effect";


const Console = (props) => {
    return(
        <section className="section console-section">
            <div id="console" className="container">
            <div id="nav-console" >
                <div className="level options-colors">
                 <p className="level-left console-title">{props.name}.exe</p>
                 <p  onClick={props.switch} className="level-right console-x"
                  data-component={props.component}>X</p>
                </div>
            </div>
            <div className="console-body">
                <h1><Typewriter
              onInit={typewriter => {
                typewriter
                  .typeString(">"+props.name)
                  .callFunction(() => {
                  })
                  .pauseFor(2500)
                  .start();
              }}
            /></h1>
                {props.body}
            </div>
            </div>
        </section>
    )

}

export default Console;