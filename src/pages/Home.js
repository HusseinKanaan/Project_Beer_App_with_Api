import allBeersPic from '../img/homeImg1.png';
import randomBeerPic from '../img/homeImg2.png';
import { Link } from "react-router-dom";
import './Home.css';


const Home = () => {
    return (
        <div className="homeDiv">

            <div className='homeImageallBeersContainer'>
                <img src={allBeersPic} alt="" />
                <div className='homeAllbearsBtn'>
                    <Link to='/beersoverview'>All Beers</Link>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur </p>
            </div>

            <div className='homeImageRandomContainer'>
                <img src={randomBeerPic} alt="" />
                <div className='homeRandomBtn'>
                    <Link to='/randombeers'>Random Beer</Link>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur </p>
            </div>
        </div>
    )
}
export default Home 
