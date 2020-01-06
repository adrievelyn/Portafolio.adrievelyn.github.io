import React from 'react';
import HomeCss from '../Components/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import MenuIcon from '../Styles/ASM.png'
import PersonalPhoto from '../Styles/adriana_foto.png';
import About from '../Components/About.js';
import Projects from '../Components/Projects.js';


class Home extends React.Component {
	render(){
		return (

			<div id='1' className='Menu'>
			<div className='Icono'>
				<div className='Button'>

					<button type=""><img border="0" height="40" width="50" src={MenuIcon} /></button>
				</div>
				<ul className='GeneralMenu'>
					<li className='Home'><a href="#1" title="Home" id="p01">Home</a></li>
   					<li className='About'><a href="#2" title="About" id="p01">About Me</a></li>
   					<li className='Projects'><a href="#3" title="Services" id="p01">Projects</a></li>
   					<li className='CV'><a href="#4" title="Portfolio" id="p01">CV</a></li>
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
</div>

			

			)


		}
	};



//<button type="submit"><img src="./Styles/input.svg" alt=""/></button>
//<a href="URL_BLOG"> <img border="0" height="35" width="45" src="./Styles/input.svg" /></a> 
//<a href="#"><img border="0" height="35" width="45" src="./Styles/input.png"/></a>

//<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
//<link rel="icon" href="/favicon.ico" type="image/x-icon">
//<a href="/favicon.ico" type="AS/png"> <img border="0" height="35" width="45"/></a>




			

    




export default Home;