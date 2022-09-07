import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './BeersOverview.css'
import ProductItem from '../components/ProductItem'
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
        {products.map((i) =>{
            <ProductItem
                key={i}
                bild={i.image_url}
                name={i.name}
                slogan={i.tagline}
                produzent={i.contributed_by} */
    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)

    return (
        <>
            <h1>Übersicht</h1>
            {products.map((i) => {
                return (
                    <section className='allBeersConainer'>

                        <div className='imagesApi'>
                            <img src={i.image_url} alt="" height={130} />
                        </div>

                        <div className='itemContainer'>
                            <h3>{i.name}</h3>
                            <p className="fontStyle">{i.tagline}</p>
                            <p>{i.contributed_by}</p>
                            <button>Details</button>
                        </div>
                    </section>
                )




                /* return (
                    <>
                    <p>{products.name }</p>
                    </>
                ) */
            })}{/* } */}
        </>
    )
}
export default BeersOverview