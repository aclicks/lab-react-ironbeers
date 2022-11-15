import { useState, useEffect } from "react";
import axios from "axios";
import Navbar1 from "../components/Navbar";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

function Beers() {
	const [beers, setBeers] = useState([]);

	useEffect(() => {
		async function fetchBeers() {
			const response = await axios.get(
				"https://ih-beers-api2.herokuapp.com/beers"
			);
			setBeers(response.data);
		}

		fetchBeers();
	}, []);

	return (
		<div>
			<Navbar1 />

			<h1>All Beers</h1>

			{beers.map((beer) => {
				return (
					<div key={beer._id}>
						<Container>
							<Card className="bg-light text-white">
								<Link to={`/Beers/${beer._id}`}>
									<img
										style={{
											resizeMode: "cover",
											height: 150,
										}}
										src={beer.image_url}
										alt={beer.name}
									/>
									<p>{beer.name}</p>
									<p>{beer.tagline}</p>
									<p>{beer.contributed_by}</p>
								</Link>
							</Card>
						</Container>
					</div>
				);
			})}
		</div>
	);
}

export default Beers;
