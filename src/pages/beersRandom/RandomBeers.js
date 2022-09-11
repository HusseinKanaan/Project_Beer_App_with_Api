import { useEffect, useState } from 'react'

import './RandomBeers.css'

const RandomBeers = () => {
    const [random, setRandom] = useState([])

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(res => res.json())
            .then(data => setRandom(data))
    }, [])

    return (
        <section>
            <h3>{random.name}</h3>
            <img src={random.image_url} alt='' height={130} />
            <p>{random.tagline}</p>
            <p>{random.first_brewed}</p>
            <p>{random.attenuation_level}</p>
            <p>{random.description}</p>
            <p>{random.contributed_by}</p>
        </section>
    )
}
export default RandomBeers