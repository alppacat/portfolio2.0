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

    renderProject = () => {
        const mainProject = this.state.projects[1];

        let project;

       if(mainProject === lux){
           const currentProject = {
               name: "Lux",
               description: "Lux es una red social creada en equipo, cuyo objetivo  princial es la creación de espacios seguros así como redes de apoyo emocional para personas que padeceden y/o sufren de depresión y/o ansiedad.",
               tecnologias: "JavaScript Vanilla, Firebase, Bootstrap, HTML5, CSS3.",
               demo: 'https://alppacat.github.io/cdmx-2018-06-bc-core-am-social-network/src',
               repositorio: 'https://github.com/alppacat/cdmx-2018-06-bc-core-am-social-network'
           }

            project = currentProject
    
       }else if(mainProject === rickAndMorty){
           const currentProject = {
               name: "Rick and Morty App",
               description: "Aplicación nativa que permite visualizar a los personajes de la serie, así como información adicional de estos. También permite ver un listado de los episodios de la primera temporada.",
               tecnologias: "React Native, Native Base, React Navigation, Rick and morty API, Android Studio, Expo.",
               demo: 'https://expo.io/@tzupratts/rick-and-morty-react-native',
               repositorio: 'https://github.com/alppacat/rick-and-morty'
           }

           project = currentProject

       } else if(mainProject === ghibli){
           const currentProject = {
               name: "Ghibli Movies",
               description: "Aplicación web que permite visualizar las películas realizadas por el estudio Ghibli, así como una pequeña descripción de estas.",
               tecnologias: "JavaScript Vanilla, Ghibli API, HTML5, CSS3.",
               demo: 'https://alppacat.github.io/Studio-Ghibli-/',
               repositorio: 'https://github.com/alppacat/Studio-Ghibli-'
           }
            project = currentProject

       }

        return(
            <section className="section-projects">
                <div className="container-projects-info">
                <div  onClick={this.props.switch} data-component="Projects" className="level close-project"><div className="level-left"><i className="fas fa-times-circle"></i></div> </div>
                    <h3>{project.name}</h3>
                    <div className="project-content">
                        <p>{project.description}</p>
                        <span>Tecnologías implementadas:</span>
                        <p>{project.tecnologias}</p>
                            <div className="external-links"> 
                                <a target="_blank" rel="noopener noreferrer" href={project.demo}>
                                <i className="fas fa-external-link-alt"></i> {" "}
                                demo
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href={project.repositorio}>
                                <i className="fab fa-github"></i> {" "}
                                código
                                </a>
                            </div>
                        
                    </div>
                </div>
            </section>
        )

    }

    render() { 
        return ( <section id="projects">
            <div className="section container-projects">

                <div className="container-images side-project-left">
                    <img className="images-project side-image" src={this.state.projects[0]}/>
                </div>
                <div className="container-images main-project">
                    <img className="images-project" src={this.state.projects[1]}/>
                </div>
                <div className="container-images side-project-right">
                    <img className="images-project side-image" src={this.state.projects[2]}/>
                    </div>
            </div>
            {this.renderProject()}

                <div className="next-container">

                 <p className="next-icon" onClick={this.slideProjects}>>></p>
                 </div>
        </section> );
    }
}
 
export default Projects;