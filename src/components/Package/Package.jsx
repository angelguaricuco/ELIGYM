import React from 'react';
import packageclasses from './Package.module.css';
import PackageCard from '../UI/PackageCard';
import {motion} from 'framer-motion';
import {CgGym} from 'react-icons/cg';
import {FaCrown} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import {BsFillCheckCircleFill} from 'react-icons/bs';
import Badge from '../Badge/Badge';

const mainTitleAnimation = {
	hidden: {opacity: 0, y: -90},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const lineanimate = {
	hidden: {
		width: 0,
	},
	visible: {
		width: '100%',
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const fadeinAnimate = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const cardreveal = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: {
		opacity: 1,
		y: 20,
		transition: {
			type: 'spring',
			stiffness: 200,
		},
	},
};

const Package = () => {
	const PackageCardMotion = motion(PackageCard);
	return (
		<aside className={packageclasses['package-wrapper']}>
			<div id='package' className={packageclasses['package-info__div']}>
				<motion.h3
					variants={mainTitleAnimation}
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.8}}
					className={packageclasses.title}>
					Fitness Planes
				</motion.h3>
				<motion.hr
					variants={lineanimate}
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.8}}
				/>
				<motion.p
					variants={fadeinAnimate}
					initial='hidden'
					whileInView='visible'
					viewport={{once: true, amount: 0.8}}>
					
				</motion.p>
				<IconContext.Provider value={{size: '2.5em'}}>
					<div className={packageclasses['package-card__info']}>
						<PackageCardMotion
							variants={cardreveal}
							initial='hidden'
							whileInView='visible'
							viewport={{once: true, amount: 0.8}}
							bgcolor='dark'>
							<CgGym />
							<div style={{marginTop: '1.6em'}}>
								<Badge bgcolor='#f35508'>Plan Gold</Badge>
								<div className={packageclasses['package-card__cost']}>
									<h4>$20</h4>
									<p>/ Mes</p>
								</div>
								<ul className={packageclasses['package-card__featurelist']}>
									<li className={packageclasses['package-card__featureitem']}>
										<BsFillCheckCircleFill size='1.5rem' />
										<p>Horas de entrenamiento</p>
									</li>
									<li className={packageclasses['package-card__featureitem']}>
										<BsFillCheckCircleFill size='1.5rem' />
										<p>Consultas con el entrenador</p>
									</li>
									<li className={packageclasses['package-card__featureitem']}>
										<BsFillCheckCircleFill size='1.5rem' />
										<p>Horario nocturno 5:00pm a 9:00pm</p>
									</li>
									<li className={packageclasses['package-card__featureitem']}>
										<BsFillCheckCircleFill size='1.5rem' />
										<p>Horario matutino 7:00am a 11:30am</p>
									</li>
								</ul>
							</div>
						</PackageCardMotion>
						
					</div>
				</IconContext.Provider>
			</div>
		</aside>
	);
};

export default Package;
