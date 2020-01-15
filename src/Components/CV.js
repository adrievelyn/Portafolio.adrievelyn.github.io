import React from 'react';
import CVCSS from '../Components/CV.css';
import Linkedin from '../Styles/linkedin.svg';
import GitHub from '../Styles/github2.svg';
import GMail from '../Styles/gmail.svg';
import CVAdri from '../Styles/CV.svg';
import MenuIcon from '../Styles/ASM.png'


class CV extends React.Component {
	render(){
		return (
			<div id="4" className='CV1'>
			<div className="button">
  <button type="button"  data-toggle="dropdown"><span className="caret"> <img border="0" height="40" width="50" src={MenuIcon} /></span></button>
  <ul className="dropdown-menu">
   <li><a href="#1">Home</a></li>
    <li><a href="#2">About Me</a></li>
    <li><a href="#3">Projects</a></li>
    <li><a href="#4">CV</a></li>
  </ul>
</div>
				<div className='CV2'>
					<div className='CV3'>
					<a href='https://www.linkedin.com/in/adriana-sanchez-mejias'><img border="0" height="70" width="40" src={Linkedin} /></a>
				</div>

				<div className='CV4'>
					<a href='https://github.com/adrievelyn'><img border="0" height="65" width="35" src={GitHub} /></a>
				</div>

				<div className='CV5'>
					<a href='mailto:adrievelyn@gmail.com'><img border="0" height="70" width="30" src={GMail} /></a>
				</div>

				<div className='CV6'>
					<a href='#'><img border="0" height="70" width="40" src={CVAdri} /></a>
				</div>

			</div>
			</div>



			);
		}
     }



export default CV;