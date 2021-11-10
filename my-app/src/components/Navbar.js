import {Link} from 'react-router-dom';

function Navbar(props) {
    return (
        <div className="navbar">
            <Link to="/" style={{fontSize: 30}}>Home</Link>
            <h2>Welcome to the Brewery Search Site!!!</h2>
            <Link to="/Aboutme" style={{fontSize: 30}}>About Me</Link>
        </div>
    );
}

export default Navbar;