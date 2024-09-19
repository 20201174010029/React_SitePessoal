import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-text'>
          Deixe seu E-mail para manter contato.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Digite seu E-mail aqui'
            />
            <Button buttonStyle='btn--outline'>Enviar</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sobre mim</h2>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contratação</h2>
            <Link to='/'>E-mail</Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Curiosidades</h2>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </div>
          <div className='footer-link-items'>
            <h2>Mídias Sociais</h2>
            <Link to='https://www.instagram.com/deybson_cavalcanti?igsh=MWFtcTdscjN2ODRnYg=='>Instagram</Link>
            <Link to='https://youtu.be/3EkJyrqeLbs?si=JIEQ18FFbPciy1hT'>YouTube</Link>
            <Link to='https://github.com/20201174010029'>GitHud</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              JD
              <i class="fa-solid fa-user"></i>
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
              className='social-icon-link Github'
              to='https://github.com/20201174010029'
              target='_blank'
              aria-label='Github'
            >
              <i class="fa-brands fa-square-github"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
