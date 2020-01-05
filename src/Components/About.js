import React from 'react';
import AboutCss from '../Components/About.css';
import JS from '../Styles/JS.png';
import HTML from '../Styles/HTML.png';
import ReactJS from '../Styles/React.png';
import Native from '../Styles/Native.png';
import CSS from '../Styles/CSS.png';
import Bootstrap from '../Styles/Bootstrap.png';
import Firebase from '../Styles/Firebase.png';
import GitHub from '../Styles/Git.png';
import Agil from '../Styles/Agil.png';


class About extends React.Component {
	render(){
		return (

			<div className=''>
			<div className=''>
				
						<div id="2" className='AboutMe'>
							
							<p> Elijo programar porque me permite de manera constante continuar aprendiendo, trabajando con metodologías ágiles y porque me da la posibilidad de crear y comunicar construyendo código. 
								Al pasar por el BootCamp de Laboratoria, adquirí las habilidades necesarias para trabajar como Front-End Developer, desarrollando una gran capacidad de organización y compromiso con lo que hago.
								Soy Licenciada en Recursos Humanos, donde aprendí a gestionar equipos de trabajos y proyectos de forma dinámica. Creo que con compromiso, constancia y dedicación, se alcanzan las metas propuestas.
								Disfruto tener una participación constante en cada una de la etapas de Desarrollo de un producto, hasta la entrega final.
								Acepto trabajar con un equipo donde todos seamos críticos para mejorar como profesionales.
								Me apasiona aprender más tecnologías que puedan aumentar mis conocimientos y permitirme mejorar cada día.</p>
						
							</div>

							<div className='Habilities'>
							<img className='js' border="0" height="70" width="70" src={JS} />
							<img className='HTML' border="0" height="70" width="70" src={HTML} />
							<img className='React' border="0" height="70" width="70" src={ReactJS} />
							<img className='Native' border="0" height="70" width="70" src={Native} />
							<img className='CSS' border="0" height="70" width="70" src={CSS} />
							<img className='Boostrap' border="0" height="70" width="70" src={Bootstrap} />
							<img className='Firebase' border="0" height="70" width="70" src={Firebase} />
							<img className='Git' border="0" height="70" width="70" src={GitHub} />
							<img className='Agil' border="0" height="70" width="70" src={Agil} />
							
						</div>
				
				</div>
			</div>
		

			)


		}
	};


export default About;


	