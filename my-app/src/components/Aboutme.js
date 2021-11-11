import photo from './MyPhoto.png';
import { BsEnvelopeOpenFill } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';


function Aboutme(props){
    return (
        <div className="aboutme">
            <img className="mypic" src={photo} alt="mypicture"/>
            <h3 className="aboutbio">Hello, I'm Justin, and this is my solo front-end React project!!!  As part of my DigitalCrafts 
                bootcamp curriculum, I have been tasked with creating a site using React that has 3+ components
                that are class or functional, manage state through React or Redux, use React Router for 3 routes,
                and make at least one API call.  This craft beer brewery search site meets those requirments on a 
                6 day deadline.
                I am a software development student nearing my final project for graduation as of 11/11/21.  I hope
                that everyone who visits this site can find the best craft breweries near you so get out there and 
                try some delicious beers from thoughout the country.  Cheers!!! Prost!!! Salud!!! Sante!!! 
            </h3>
            <ul className="linkinfo">
                <li><a href="mailto:JGeho@gmail.com" target="_blank" rel="noreferrer"><BsEnvelopeOpenFill className="icons"/></a></li>
                <li className="icons"><a href="https://github.com/JGeho" target="_blank" rel="noreferrer"><BsGithub className="icons"/></a></li>
                <li className="icons"><a href="https://linkedin.com/in/justin-geho" target="_blank" rel="noreferrer"><BsLinkedin className="icons"/></a></li>
            </ul>
        </div>
    );
}

export default Aboutme;