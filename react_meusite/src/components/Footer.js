import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sobre mim</h2>
            <Link to='/'>Minha Jornada</Link>
            <Link to='/'>Educação</Link>
            <Link to='/'>Experiências</Link>
            <Link to='/'>Habilidades</Link>
            <Link to='/'>Projetos</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contratação</h2>
            <Link to='/'>E-mail</Link>
            <Link to='/'>Portfólio</Link>
            <Link to='/'>Serviços</Link>
            <Link to='/'>Testemunhos</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Informações para contato</h2>
            <Link to='/'>João Deybson</Link>
            <Link to='/'>Filho.n@escolar.ifrn.edu.br</Link>
            <Link to='/'>84 994xx-xxxx</Link>
            <Link to='/'>Ceará-mirim, RN</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Mídias Sociais</h2>
            <Link to='https://www.instagram.com/deybson_cavalcanti?igsh=MWFtcTdscjN2ODRnYg==' target='_blank'>Instagram</Link>
            <Link to='https://youtu.be/3EkJyrqeLbs?si=JIEQ18FFbPciy1hT' target='_blank'>YouTube</Link>
            <Link to='https://github.com/20201174010029' target='_blank'>GitHub</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              JD
              <i className="fa-solid fa-user"></i>
            </Link>
          </div>
          <div className='social-icons'>
            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/deybson_cavalcanti?igsh=MWFtcTdscjN2ODRnYg=='
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='https://youtu.be/3EkJyrqeLbs?si=JIEQ18FFbPciy1hT'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>

            <Link
              className='social-icon-link github'
              to='https://github.com/20201174010029'
              target='_blank'
              aria-label='Github'
            >
              <i className="fa-brands fa-square-github"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
