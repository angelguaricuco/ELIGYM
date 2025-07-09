import React from 'react';
import Wrapper from '../UI/Wrapper';
import fitnessdetclasses from './FitnessDetails.module.css';
import BlankCard from '../UI/BlankCard';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const mainTitleAnimation = {
	hidden: { opacity: 0, y: -90 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const lineanimate = {
	initial: {
		width: 0,
	},
	start: {
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

const featureNumAnimate = {
	hidden: {
		opacity: 0,
		y: 40,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.2, 0.65, 0.3, 0.9],
			duration: 2,
		},
	},
};

const FitnessDetails = () => {
	const isSmallDevices = useMediaQuery('(350px < width < 766px)');

	return (
		<Wrapper>
			<div id="about-us" className={fitnessdetclasses['fitnessdetails-info']}>
				<motion.div
					variants={mainTitleAnimation}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.8 }}
				>
					<p className={fitnessdetclasses['fitnessd-title']}>Aumentamos tu</p>
					<p className={fitnessdetclasses['fitnessd-title__italic']}>
						Confianza
					</p>
				</motion.div>
				<motion.hr
					variants={lineanimate}
					initial="initial"
					whileInView="start"
					viewport={{ once: true, amount: 0.8 }}
					className={fitnessdetclasses.whitehr}
				/>
				<div className={fitnessdetclasses['fitness-featurecard']}>
					<BlankCard>
						<motion.h4
							variants={featureNumAnimate}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.8 }}
						></motion.h4>
						<motion.p
							variants={fadeinAnimate}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.8 }}
						>
							Con un entrenador Experto incluido
						</motion.p>
					</BlankCard>
					<BlankCard>
						<motion.h4
							variants={featureNumAnimate}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.8 }}
						>
							250
						</motion.h4>
						<motion.p
							variants={fadeinAnimate}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.8 }}
						>
							Clientes Satisfechos
						</motion.p>
					</BlankCard>
					<BlankCard>
						<motion.h4
							variants={featureNumAnimate}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.8 }}
						>
							4+ años
						</motion.h4>
						<motion.p
							variants={fadeinAnimate}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.8 }}
						>
							Funcionando en el mercado
						</motion.p>
					</BlankCard>
				</div>
				<div className={fitnessdetclasses['fitnessdetails-img__withinfo']}>
					<motion.img
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ ease: [0.2, 0.65, 0.3, 0.9], duration: 2 }}
						viewport={{ once: true, amount: 0.8 }}
						src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="Fitness Details"
					/>
					<div className={fitnessdetclasses['fitness-details']}>
						<motion.p
							variants={fadeinAnimate}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.8 }}
						>
							Nos dedicamos a ayudarte a alcanzar tus objetivos de fitness a
							través de nuestra experiencia, motivación, mentoría y servicios de
							primera clase. Nos 
							comprometemos a brindarte la mejor experiencia de fitness posible,
							asegurándote de que te mantengas motivado, inspirado y apoyado
							durante todo tu camino. Entendemos que mantener la motivación
							puede ser difícil, por eso hemos creado un entorno positivo y amigable
							que te ayudará a mantenerte en el camino correcto.
						</motion.p>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default FitnessDetails;
