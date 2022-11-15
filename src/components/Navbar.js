
import { Navbar, Container } from "react-bootstrap";
import HomeBeer from '../assets/homebeer.png'
import { Link } from "react-router-dom";

function Navbar1 () {
	return (
		<div>
			<Container>
			<Link to={"/"}>
			<Navbar expand="lg" bg="warning" variant="warning">
			<Navbar.Brand href="#home">
            <img style={{
							alignSelf: "center",
							justifyContent: "center"
						}}
              src={HomeBeer}
              width="80"
              className="me-auto "
              alt="Home"
			  
            />
          </Navbar.Brand>
			</Navbar>
			</Link>
			</Container>
		</div>
	);
}

export default Navbar1;
