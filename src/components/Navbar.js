
import { Navbar, Container, Image } from "react-bootstrap";
import HomeBeer from '../assets/homebeer.png'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar1 () {
	return (
		<div>
			<Container fluid>
			<Link to={"/"}>
			<Navbar bg="warning" className="">
			
            <Image fluid
              src={HomeBeer}
              width="80"
              alt="Home"
            />
			</Navbar>
			</Link>
			</Container>
		</div>
	);
}

export default Navbar1;
