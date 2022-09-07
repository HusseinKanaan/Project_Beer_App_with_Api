import allBeersPic from './img/homeImg1.png';
import randomBeerPic from './img/homeImg2.png';
import { Link } from "react-router-dom"
import './App.css';



function App() {
  return (

    <div className="App">

      <div className='homeImageallBeersContainer'>
        <img src={allBeersPic} alt="" />
      <div className='homeAllbearsBtn'>
          <Link to='/beersOverview'>All Beers</Link>
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
  );
}

export default App;
