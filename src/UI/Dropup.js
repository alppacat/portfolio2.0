import React from 'react';

const Dropup = (props) => {
    const toggle = () => {
        const query =  document.querySelector('.dropdown');
      if(document.querySelector('.is-active')){
        query.classList.remove('is-active');
      }else{
        query.classList.add('is-active');
      }
    }
    return(
        <div class="dropdown is-up" onClick={toggle}>
  <div class="dropdown-trigger">
    <div class="press-navbar" aria-haspopup="true" aria-controls="dropdown-menu7">
      <span>START</span>
    </div>
  </div>
  <div class="dropdown-menu" id="dropdown-menu7" role="menu">
    <div class="dropdown-content content-dropdown">

      <div class="dropdown-item">
        <a className="element-menu" data-component="Contact" onClick={props.switch}><i className="fas fa-at"></i> Contacto</a>
        </div>

        <div class="dropdown-item">
        <a className="element-menu"><i className="fas fa-file"></i> Resume</a>
        </div>

        <div class="dropdown-item">
        <a className="element-menu" data-component="Projects" onClick={props.switch}> <i className="fas fa-tasks"></i> Proyectos</a>
        </div>

        <div class="dropdown-item">
        <a className="element-menu" data-component="Skills" onClick={props.switch}> <i className="fas fa-file-code"></i> Habilidades</a>
        </div>

        <div class="dropdown-item">
        <a className="element-menu" data-component="About" onClick={props.switch}> <i className="fas fa-glasses"></i> Sobre Mi</a>
        </div>

        <div class="dropdown-item">
        <a  href="#Home" className="element-menu"><i className="fas fa-home"></i> Home</a>
        </div>
    </div>
  </div>
</div>
    )
}
export default Dropup;