import React from 'react';
import './Desktop.css'


import About from './About'

const Desktop = (props) => {
    return(
        <section id="desktop">
            <div className="container">
            {props.component}
            </div>        
         </section>
    )

}

export default Desktop