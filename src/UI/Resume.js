import React from 'react';

const Resume = (props) => {
    return (          
    <div className="modal is-active">
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Curriculum</p>
        <button className="delete" aria-label="close" onClick={props.resume} ></button>
      </header>
      <section className="modal-card-body">
      <div className="external-links">
        <a href="https://github.com/alppacat/portfolio2.0/raw/branchQ/src/assets/cv_tzu_pratts.pdf">Descarga</a>
        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1jqS2L_zjVi7-Np2sjY45RWdAgguq3OCa/view?usp=sharing">Ver Online</a>
        </div>
      </section>
    </div>
  </div>)
}

export default Resume;