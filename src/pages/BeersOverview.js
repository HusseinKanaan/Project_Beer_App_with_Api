import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './BeersOverview.css'
/* import ProductItem from '../components/ProductItem' */
import Navbar from '../components/Navbar'

const BeersOverview = () => {
    const [products, setProducts] = useState([])

    /* useEffect(()=>{
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => res.json())
            .then(data => setProducts(data))
        }, [])  
        console.log(products)
        return(
            <>
        <h1>ja sibi</h1>
        {products.map((item, i) =>{
            <ProductItem
                key={i}
                bild={item.image_url}
                name={item.name}
                slogan={item.tagline}
                produzent={item.contributed_by} */
    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)

    return (
        <>
            <h1>Übersicht</h1>
            {products.map((i, e) => {

                return (
                    <section key={e} className='allBeersConainer'>

                        <div className='imagesApi'>
                            <img src={i.image_url} alt="" height={130} />
                        </div>

                        <div className='itemContainer'>
                            <h3>{i.name}</h3>
                            <p className="fontStyle">{i.tagline}</p>
                            <p>{i.contributed_by}</p>
                            <p>Hallo</p>
                            <div className="btnOverview">
                                <Link id={i._id} to={`/beersovervuew/${i._id}`}>Details</Link>
                            </div>
                        </div>
                    </section>
                )
            })}
            <Navbar />          
        </>
    )
}
export default BeersOverview