import React, { Component } from 'react';

import About from '../UI/About'
import Skills from '../UI/Skills'
import Contact from '../UI/Contact'
import DesktopUI from '../UI/Desktop' 


class Desktop extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            About:false,
            Skills:false,
            Contact: true,
         }
    }


    checkWindow = () => {
        const state = this.state;
        for(let key in state){
            if(state[key]){
                return key
            }
        }
    }

    getConsoleType = () => {
        const ConsoleType = this.checkWindow()
        if(ConsoleType === "About"){
            console.log(ConsoleType)
            return <About/>
        }else if(ConsoleType === "Skills"){
            return <Skills/>
        }else if(ConsoleType === "Contact"){
            return <Contact/>
        }
    }
    render() { 

        return (<React.Fragment>
            <DesktopUI component={this.getConsoleType()}/>
        </React.Fragment>  );
    }
}
 
export default Desktop;