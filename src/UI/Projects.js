import React, { Component } from 'react';

import lux from '../assets/Projects/Old-Display-lux.gif';
import rickAndMorty from '../assets/Projects/Old-PDA-rick.gif';
import ghibli from '../assets/Projects/Old-Display-ghibli.png';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { projects:[lux,rickAndMorty,ghibli] }
    }
    
    slideProjects = () => {

        const projectsArr = this.state.projects;
       for(let i = 0; i<projectsArr.length; i++){
            this.setState({projects:[projectsArr[2], projectsArr[0], projectsArr[1]]})
       }

    }

    render() { 
        return ( <section id="projects">
            <div className="section container-images">

                <div>
                    <img className="images-project" src={this.state.projects[0]}/>
                </div>
                <div>
                    <img className="images-project" src={this.state.projects[1]}/>
                </div>
                <div>
                    <img className="images-project" src={this.state.projects[2]}/>
                    </div>
                    <button onClick={this.slideProjects}>Next</button>


            </div>
        </section> );
    }
}
 
export default Projects;