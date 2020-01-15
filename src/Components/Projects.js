import React from 'react';
import ProjectsCss from '../Components/Projects.css';
import 'bootstrap/dist/css/bootstrap.css';
import BurgerQueen from '../Styles/BurgerQueen.png';
import Laboratorians from '../Styles/RedSocial.jpg';
import SocialData from '../Styles/SocialData.jpg';
import MenuIcon from '../Styles/ASM.png'




class Projects extends React.Component {
	render(){
		return(
			
		<div id='3' className='Projects1'>
		<div className="button">
  <button type="button"  data-toggle="dropdown"><span className="caret"> <img border="0" height="40" width="50" src={MenuIcon} /></span></button>
  <ul className="dropdown-menu">
   	<li><a href="#1">Home</a></li>
    <li><a href="#2">About Me</a></li>
    <li><a href="#3">Projects</a></li>
    <li><a href="#4">CV</a></li>
  </ul>
</div>
		<div className='BQ'>
			<div className='BQ2'>
					<a href='https://adrievelyn.github.io/SCL010-Burger-Queen/'><img border="0" height="150" width="170" src={BurgerQueen} /></a>
				</div>
				<div className='BQ3'>	
					<p> Burguer Queen, es una interfaz diseñada para locales de comida.</p>
				</div>	
		</div>

		<div className='RS'>
				<div className='RS2'>	
					<p> Laboratorians, es una AppWeb que surge principalmente para las estudiantes y egresadas de Laboratoria.</p>
				</div>	
				<div className='RS3'>
					<a href='https://adrievelyn.github.io/SCL010-Social-Network/src/index.html'><img border="0" height="150" width="170" src={Laboratorians} /></a>
				</div>
				
		</div>
		<div className='SD'>
			<div className='SD2'>
					<a href='https://adrievelyn.github.io/SCL010-data-lovers/src/index.html'><img border="0" height="150" width="170" src={SocialData} /></a>
				</div>
				<div className='SD3'>	
					<p> Social Data, es una herramienta de análisis que contiene colecciones de indicadores del desarrollo del Banco Mundial.</p>
				</div>	
		</div>
</div>



			)
	};	
}



export default Projects;