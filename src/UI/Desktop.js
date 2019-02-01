import React from 'react';
import './Desktop.css'

import Dropup from './Dropup';
import consoleIcon from '../assets/icons/console_prompt-0.png';
import folderIcon from '../assets/icons/directory_open_file_mydocs_2k-4.png';


const Desktop = (props) => {
    return(<React.Fragment>
        <section id="desktop">
            <div className="container-desktop">
            <section id="desktop-icons">
                <figure className="desktop-icons-content">
                    <img src={consoleIcon} 
                    onClick={props.switch}
                    data-component="About"/>
                    <p>about.exe</p>
                </figure>
                <figure className="desktop-icons-content">
                    <img src={consoleIcon}
                    onClick={props.switch} 
                    data-component="Skills"/>
                    <p>skills.exe</p>
                </figure>
                <figure className="desktop-icons-content">
                    <img src={consoleIcon}
                     onClick={props.switch}
                     data-component="Contact"/>
                    <p>contact.exe</p>
                </figure>
                <figure className="desktop-icons-content">
                    <img src={folderIcon}
                    onClick={props.switch}
                    data-component="Projects"/>
                    <p>Proyectos</p>
                </figure>
            </section>
            {props.component}
            </div>
            <section className="navbar-desktop">
          <div className="level container-navbar">
          <Dropup switch={props.switch} component={props.component}/>
              <div className="level-right built-with-container">
                <p className="level-item">built with {" "} <i className="fab fa-react"></i> {" "} and {" "} <i class="fas fa-heart"></i></p>
              </div>
          </div>
          </section>    
         </section>
          </React.Fragment>    
    )

}

export default Desktop