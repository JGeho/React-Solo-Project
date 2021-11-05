import {Link} from 'react-router-dom';

function Navbar(props) {
    return (
        <div className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/results">Search Courses</Link>
            <Link to="/saved">Saved Courses</Link>
        </div>
    );
}

export default Navbar;