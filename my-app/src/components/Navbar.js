import {Link} from 'react-router-dom';

function Navbar(props) {
    return (
        <div className="navbar">
            <Link to="/" style={{fontSize: 30}}>Home</Link>
            <Link to="/results" style={{fontSize: 30}}>Search Courses</Link>
            <Link to="/saved" style={{fontSize: 30}}>Saved Courses</Link>
        </div>
    );
}

export default Navbar;