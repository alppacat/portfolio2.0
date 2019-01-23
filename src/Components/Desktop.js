import React, { Component } from 'react';

import About from '../UI/About';
import Skills from '../UI/Skills';
import Contact from '../UI/Contact';
import Projects from '../UI/Projects';
import DesktopUI from '../UI/Desktop';


class Desktop extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            About:false,
            Skills:false,
            Contact: false,
            Projects: true,
         }
    }

    switchComponent = (event) => {
        const component = event.target.getAttribute('data-component')

        if(this.state[component]){
            return this.setState({[component]:false})
        } else if(!this.state[component]){
            const state = this.state
            const eachState = Object.entries(state)
            eachState.forEach((element) =>{
                if(element[1]){
                    const componentEach = element[0];
                    return this.setState({[component]:true, [componentEach]:false})
                }else{
                    return this.setState({[component]:true})
                }
            })
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
            return <About switch={this.switchComponent} component={"About"}/>
        }else if(ConsoleType === "Skills"){
            return <Skills switch={this.switchComponent} component={"Skills"}/>
        }else if(ConsoleType === "Contact"){
            return <Contact switch={this.switchComponent} component={"Contact"}/>
        }else if(ConsoleType === "Projects"){
            return <Projects switch={this.switchComponent} component={"Contact"}/>
        }
    }
    render() { 

        return (<React.Fragment>
            <DesktopUI component={this.getConsoleType()} switch={this.switchComponent}/>
        </React.Fragment>  );
    }
}
 
export default Desktop;