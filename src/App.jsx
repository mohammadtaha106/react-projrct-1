
import saylaniHero from './images/saylani.png'

import Navbar from './components/navbar'
import './App.css'


function App() {
  

  return (
    <>
    <Navbar/>
  
  <section>
    <div className="hero">
      <div className="text">
        <p className="p1">
          Welcome to the 
          <span className="green"> Saylani </span>Welfare
        </p>
        <div className="para">
          <p className="p2">The largest NGO offering free </p>
          <p className="typewriter-container">IT and vocational training.</p>
        </div>
        <p className="p3">
          Saylani Welfare is on the ground and already working with local
          communities to assess how best to support underprivileged families in
          more than 63 areas of day to day lives.
        </p>
        <div className="btn1">
          <button className="explore">
            {" "}
            Explore More
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
      <div className="img">
        <img src={saylaniHero} height="500px" />
      </div>
    </div>
  </section>
  

  
</>

  )
}

export default App
