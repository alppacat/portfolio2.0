import React from 'react';

import Console from './Console'

const Contact = () => {
    const name = "Contacto";
    const body = () => {
        return(
        <div className="console-body-contact">
            <section className="section p-margin">
                <span>Let's turn ideas into reality!</span>
                <p>¿Te gustaría trabajar juntos?
                    ¿o simplemente quisieras saber en qué proyecto me encuentro trabajando?,
                    ¿Tal vez solo quieras saludar?</p>
                    <p>¡No dudes en escribirme un mensaje!</p>

                    <section className="section lista">
                <ul>
                    <li className="list-items">
                        <a href="mailto:tzupratts@gmail.com"> 
                        <i class="fas fa-envelope"/>{" "}
                        tzupratts@gmail.com</a>
                    </li>
                    <li className="list-items">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tzupratts/">
                    <i class="fab fa-linkedin" />{" "}
                    @tzupratts
                    </a>
                    </li>
                    <li className="list-items">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/alppacat">
                    <i class="fab fa-github" />{" "}
                     @alppacat
                    </a>
                    </li>
                </ul>
                </section>
            </section>
        </div>
        )

    }
    return (<Console name={name} body={body()}/>)
}

export default Contact;