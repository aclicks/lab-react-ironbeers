
import Navbar from "react-bootstrap/Navbar";
import HomeBeer from '../assets/homebeer.png'
import { Link } from "react-router-dom";

function Navbar1 () {
	return (
		<div>
			<Link to={"/"}>
			<Navbar bg='primary' variant="warning" expand="lg" className="mb-2" border='warning'>
			<Navbar.Brand href="#home">
            <img
              src={HomeBeer}
              width="80"
              className="d-inline-block align-top"
              alt="Home"
            />
          </Navbar.Brand>
			</Navbar>
			</Link>
		</div>
	);
}

export default Navbar1;
