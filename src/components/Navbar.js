import './Navbar.css'
import logoNavbar from '../img/Logo.svg'

const Navbar= ()=> {
    return(
        <>
        <footer>
                <div className='imageContainer'><img src={logoNavbar} alt={""} height={50}/></div>
        </footer>
        </>
    )
}
export default Navbar