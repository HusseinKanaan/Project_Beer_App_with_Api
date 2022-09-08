import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './BearsDetails.css'

const BeersDetails = () => {
    const params = useParams()
    const [details, setDetails] = useState([])

    useEffect(() => {
        console.log(params)
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.beersid}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [params])

    return (
        <section>
            <h3>{details.name}</h3>
            <img src={details.image_url} alt='' height={130} />
            <p>{details.tagline}</p>
            <p>{details.first_brewed}</p>
            <p>{details.attenuation_level}</p>
            <p>{details.description}</p>
            <p>{details.contributed_by}</p>
        </section>


    )
}
export default BeersDetails