import React from 'react';

import './Desktop.css'

import Console from './Console'

const About = (props) => {
    const name = "Sobre mi";

    const body = () => {
        return (
            <div className="console-body-about">
                <p> >Hola, soy Tzu y nací con una computadora bajo el brazo. </p>
                 <p> >Soy Front-end developer, aunque también tengo estudios en sociología por parte de la UNAM. </p>
               <p> >Me apasiona el mundo de la tecnología, desde pequeña desarrollé mi amor por las computadoras, la ciencia ficción,
                la literatura y los vídeojuegos.</p>
            </div>

        )
    }
    return(
        <Console name={name} body={body()} switch={props.switch} component={props.component}/>
    )
}

export default About;