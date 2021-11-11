import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Results from './Results';

function Home(props) {
    const [beerData,setBeerData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);
    const [address, setAddress] = useState("");
    const fetchBreweries = (e) =>{
        e.preventDefault()
        const address = document.getElementById('address').value;
        axios.get(`https://api.openbrewerydb.org/breweries?by_postal=${address}`)
        .then(breweries=>{
            if (breweries.data.length === 0){
               setErrorMessage(true); 
            }
            setBeerData(breweries.data)});
    }

    return (
        <div className="container">
                <h3>Search Craft Beer Breweries Near You!!</h3>
                <form onSubmit={fetchBreweries}>
                <input required maxLength ="5" minLength="5" onChange={(e)=> setAddress(e.target.value)} type="text" name="address" id="address" placeholder="Zip Code"></input>
                <button type="submit">Search</button>
                </form>
            {!errorMessage ? <Results beerData={beerData}/> : <h2>Sorry! No Breweries in your Zip Code {address}</h2>}
        </div>
    );
}

export default Home;