import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png";

function HomePage() {
	return (
		<div>
			<Card className="bg-dark text-white">
				<Link to={"/Beers/"}>
					<Card.Img variant="top" src={beers} />
					<Card.ImgOverlay>
						<Card.Title>All Beers</Card.Title>
					</Card.ImgOverlay>
				</Link>
			</Card>
			<Card className="bg-dark text-white">
				<Link to={"/Random-Beer/"}>
					<Card.Img variant="top" src={randomBeer} />
					<Card.ImgOverlay>
						<Card.Title>Random Beer</Card.Title>
					</Card.ImgOverlay>
				</Link>
			</Card>
			<Card className="bg-dark text-white">
				<Link to={""}>
					<Card.Img variant="top" src={newBeer} />
					<Card.ImgOverlay>
						<Card.Title>Add Beer</Card.Title>
					</Card.ImgOverlay>
				</Link>
			</Card>
		</div>
	);
}

export default HomePage;
