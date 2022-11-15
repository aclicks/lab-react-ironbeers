import Navbar1 from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container } from "react-bootstrap";

function BeerDetails() {
	const { beerId } = useParams();
	const [beer, setBeer] = useState({});

	useEffect(() => {
		async function fetchBeer() {
			const response = await axios.get(
				`https://ih-beers-api2.herokuapp.com/beers/${beerId}`
			);
			setBeer(response.data);
		}

		fetchBeer();
	}, []);

	console.log(beer);

	return (
		<div>
			<Navbar1 />
			<Container>
				<Card>
					<img
						style={{
							width: 150,
							alignSelf: "center"
						}}
						src={beer.image_url}
					/>
					<p>{beer.name}</p>
					<p>
						{beer.tagline}
						<span>{beer.first_brewed}</span>
					</p>
					<p>{beer.description}</p>
					<p>{beer.contributed_by}</p>
				</Card>
			</Container>
		</div>
	);
}

export default BeerDetails;
