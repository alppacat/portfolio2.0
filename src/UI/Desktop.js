import React from 'react';
import './Desktop.css'

import consoleIcon from '../assets/icons/console_prompt-0.png';
import folderIcon from '../assets/icons/directory_open_file_mydocs_2k-4.png';


const Desktop = (props) => {
    return(
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
                    <img src={folderIcon}/>
                    <p>Proyectos</p>
                </figure>
            </section>
            {props.component}
            </div>        
         </section>
    )

}

export default Desktop