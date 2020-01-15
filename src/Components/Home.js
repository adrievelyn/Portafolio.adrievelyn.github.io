import React from 'react';
import HomeCss from '../Components/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import MenuIcon from '../Styles/ASM.png'
import PersonalPhoto from '../Styles/adriana_foto.png';
import About from '../Components/About.js';
import Projects from '../Components/Projects.js';
import CV from '../Components/CV.js';

	//<div className='Button'>
					//<button type=""><img border="0" height="40" width="50" src={MenuIcon} /></button>
				//</div>
class Home extends React.Component {
	render(){
		return (

<div id='1' style={{backgroundColor: "black" }} className='Menu'>


			<div className='Icono'>

			
				<ul className='GeneralMenu'>
					<li className='Home'><a href="#1" title="Home" id="p01">Home</a></li>
   					<li className='About'><a href="#2" title="About" id="p01">About Me</a></li>
   					<li className='Projects'><a href="#3" title="Services" id="p01">Projects</a></li>
   					<li className='CV'><a href="#4" title="Portfolio" id="p01">CV</a></li>
				</ul>


				</div>
							<div className="button">
  <button type="button"  data-toggle="dropdown"><span className="button"> <img border="0" height="40" width="50" src={MenuIcon} /></span></button>
  <ul className="dropdown-menu">
    <li><a href="#1">Home</a></li>
    <li><a href="#2">About Me</a></li>
    <li><a href="#3">Projects</a></li>
    <li><a href="#4">CV</a></li>
  </ul>
</div>
					<div className='PhoName'>
						<div className='Photo'>
							<img border="0" height="260" width="300" src={PersonalPhoto} />
						</div>
						<div className='Name'>
							<p> Hola, Soy Adriana,</p>
							<p>Desarrolladora Front-End</p>
						</div>
				</div>
		<About />
		<Projects />
		<CV />
</div>

	

			)


		};
	}








export default Home;



