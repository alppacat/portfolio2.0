import React from 'react';

import Console from './Console'

const Skills = (props) => {
    const name = "Habilidades";

    const body = () =>{
        return(
            <div className="console-body-skills">
                 <section className="mobile-skills">
                    <div className="mobile-skills-content">
                    <h3>Desarrollo</h3>
                    <p>JavaScript, ReactJs, React Native, Firebase, NodeJs, Git/Github, Bulma, CSS, HTML5</p>
                    </div>
                    <div className="mobile-skills-content">
                    <h3>Diseño</h3>
                    <p>Photoshop, Illustrator, Paint Tool Sai, Figma</p>
                    </div>
                    <div className="mobile-skills-content">
                    <h3>Idiomas</h3>
                    <p>Español, Inglés, Catalán</p>
                    </div>
                    <div className="mobile-skills-content">
                    <h3>Otros</h3>
                    <p>Metodología ágil, principios de UX design, investigación social, análisis de datos, pensamiento crítico, escritura.</p>
                    </div>
                 </section>
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

    return (<Console name={name} body={body()} switch={props.switch} component={props.component}/>)
}

export default Skills;