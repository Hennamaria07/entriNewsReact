import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Trending = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
            .then((res) => res.json())
            .then((data) => setCountries(data))
    }, [])
    return (
        <div className='grid-container'>
            {countries?.map((country) => (
                <div key={country.name} className="card">
                    <div className="card-flag-container">
                        <Link to={country.alpha2Code}>
                            <img className='card-flag' src={country.flags.svg} alt="" />
                        </Link>
                    </div>
                    <div className="card-info">
                        <h2>{country.name}</h2>
                        <p>population: {country.population.toLocaleString()}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Trending