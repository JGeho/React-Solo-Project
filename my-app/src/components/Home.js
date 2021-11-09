import React from 'react';

function Home(props) {
    return (
        <div>
            <h2>Welcome to the MY SITE</h2>
            <form>
                <h3>Search Disc Golf Courses Near You!!</h3>
                <label>
                    Address:
                    <input type="text" name="address"></input>
                </label>
                <input type="submit" value="Submit"></input>
            </form>

        </div>
    );
}

export default Home;