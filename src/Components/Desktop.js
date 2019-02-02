import React, { Component } from 'react';

import About from '../UI/About';
import Skills from '../UI/Skills';
import Contact from '../UI/Contact';
import Projects from '../UI/Projects';
import Resume from '../UI/Resume';

import DesktopUI from '../UI/Desktop';


class Desktop extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            About:true,
            Skills:false,
            Contact: false,
            Projects: false,
            Resume: false,
         }
    }

    switchComponent = (event) => {
        const component = event.target.getAttribute('data-component')
        console.log(component)

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

    resume = () => {
        if(!this.state.Resume){
        this.setState({Resume:true})
        }else{
            const query =  document.querySelector('.delete');
            query.classList.remove('is-active');
            this.setState({Resume:false})
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
            return <Projects switch={this.switchComponent} component={"Projects"}/>
        }
    }
    render() { 

        return (<React.Fragment>
            <DesktopUI component={this.getConsoleType()} 
            resume={this.resume}
            resumeStatus={this.state.Resume}
            switch={this.switchComponent}/>
        </React.Fragment>  );
    }
}
 
export default Desktop;