import React from 'react';

import Console from './Console'

const Skills = () => {
    const name = "Habilidades";

    const body = () =>{
        return(
            <div className="console-body-skills">
            <section className="section section-skills">
            <div>
            <h3 className="title">Desarrollo</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>ReactJs</li>
                    <li>React Native</li>
                    <li>Firebase</li>
                    <li>NodeJs</li>
                    <li>Git/Github</li>
                    <li>Bulma</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                </ul>

            </div>

            </section>

            <section className="section section-skills">
                <div>
                <h3 className="title"> Diseño </h3>
                    <ul>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>Paint Tool Sai</li>
                    </ul>

                </div>

            </section>
            <section className="section section-skills">
                <div>
                <h3 className="title">Otros</h3>
                    <ul>
                        <li>Metodología Ágil</li>
                        <li>Principios de diseño UX</li>
                        <li>Investigación social</li>
                    </ul>
                </div>
            </section>

            <section className="section section-skills">
                <div>
                <h3 className="title">Idiomas</h3>
                <ul>
                    <li>Español</li>
                    <li>Inglés</li>
                    <li>Catalán</li>
                </ul>

                </div>

            </section>



            </div>
        )
    }

    return (<Console name={name} body={body()} />)
}

export default Skills;