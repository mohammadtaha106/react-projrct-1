
import saylaniLogo from './images/saylani-logo.png'
function Navbar() {
    return(

        <nav>
    <div className="nav">
      <img src={saylaniLogo} height="60px" alt="" />
      <ul>
        <li className="list-items">Home</li>
        <li className="list-items">About Us</li>
        <li className="list-items">Services</li>
        <li className="list-items">Media</li>
        <li className="list-items">News</li>
        <li className="list-items">Contact Us</li>
        <li className="list-items">Bank Details</li>
        <li className="list-items">Overseas Donors</li>
      </ul>
      <div className="btn">
        <button className="btn-blue">Donate Now</button>
        <button className="btn-green">Be A Sponser</button>
      </div>
    </div>
  </nav>
    )
    
}

export default Navbar;