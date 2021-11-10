import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Results from './Results';

function Home(props) {
    const [beerData,setBeerData] = useState([]);
    const fetchBreweries = () =>{
        const address = document.getElementById('address').value;
        axios.get(`https://api.openbrewerydb.org/breweries?by_postal=${address}`)
        //return axios.get("https://api.openbrewerydb.org/breweries?by_postal="+address)
        .then(breweries=>{
            console.log(breweries.data)
            setBeerData(breweries.data)});
    }

    return (
        <div>
            <h2>Welcome to the Brewery Search Site!!!</h2>
           
                <h3>Search Craft Beer Breweries Near You!!</h3>
                <input type="text" name="address" id="address" placeholder="Zip Code"></input>
                <input onClick={fetchBreweries} type="button" value="Submit"></input>
          
            <Results beerData={beerData}/>
        </div>
    );
}

export default Home;