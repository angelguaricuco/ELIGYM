import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import contactdetailclasses from './ContactDetails.module.css';

const ContactDetails = () => {
	return (
		<div className={contactdetailclasses['contact-details__wrapper']}>
			<ul className={contactdetailclasses['contact-details__lists']}>
				<li>
					<h4>Encuentranos</h4>
					
						<p>
							Ciudad Miranda, Edo. Miranda, Venezuela
							<br /> Manzana 62, Casa 6
							<br /> Referencia: En la calle del Preescolar Apacuana
						</p>
					
				</li>
				<li>
					<h4>Contacto</h4>
					<p>
						Escríbenos por WhatsApp
					</p>
					<a>
						<p>
							
							<a
								className="whatsapp__link"
								href="https://wa.me/+584126144560"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaWhatsapp className='whatsapp_link_icon'/>
							</a>
							
							
							
						</p>
					</a>
					<p>
						+58 412-614-4560
					</p>
				</li>
			</ul>
		</div>
	);
};

export default ContactDetails;
