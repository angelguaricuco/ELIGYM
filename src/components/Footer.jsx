import React from 'react';
import {FcLike} from 'react-icons/fc';
import footerclass from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={footerclass['footer__wrapper']}>
			<p>
				© 2025 - <FcLike />
				&nbsp;Sitio web desarrollado por Angel Guaricuco. Todos los derechos reservados.
			</p>
		</footer>
	);
};

export default Footer;
