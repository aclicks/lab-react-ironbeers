import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src="" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default HomePage;
