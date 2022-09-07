import BeersOverview from '../pages/BeersOverview'
import Navbar from './Navbar'

const ProductItem = (props)=>{
    return(
        <>
        <img src={props.bild} alt="" />
        <p>${props.name}</p>
        <p>${props.slogan}</p>
        <p>${props.produzent}</p>
        console.log(p)
        </>
    )
}
export default ProductItem