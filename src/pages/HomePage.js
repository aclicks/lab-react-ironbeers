import {Container, Card} from 'react-bootstrap';
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png";


function HomePage() {
	return (
		<div>
			<Container>
			<Card className="bg-dark text-white">
				<Link to={"/Beers/"} >
					<Card.Img variant="top" src={beers} />
					<Card.ImgOverlay>
						<Card.Title className="link1" style={{fontSize: '3rem'}}>All Beers</Card.Title>
					</Card.ImgOverlay>
				</Link>
			</Card>
			<Card className="bg-dark text-white">
				<Link to={"/Random-Beer/"}>
					<Card.Img variant="top" src={randomBeer} />
					<Card.ImgOverlay>
						<Card.Title className="link1" style={{fontSize: '3rem'}}>Random Beer</Card.Title>
					</Card.ImgOverlay>
				</Link>
			</Card>
			<Card className="bg-dark text-white">
				<Link to={"/Add-Beer/"}>
					<Card.Img variant="top" src={newBeer} />
					<Card.ImgOverlay>
						<Card.Title className="link1" style={{fontSize: '3rem'}}>Add Beer</Card.Title>
					</Card.ImgOverlay>
				</Link>
			</Card>
			</Container>
		</div>
	);
}

export default HomePage;
