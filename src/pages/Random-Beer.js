import { useState, useEffect } from "react";
import axios from "axios";
import Navbar1 from "../components/Navbar";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

function RandomBeer() {
	const [beer, setBeer] = useState([]);

	useEffect(() => {
		async function fetchBeer() {
			const response = await axios.get("https://ironbeer-api.fly.dev/random/");
			setBeer(response.data);
		}

		fetchBeer();
	}, []);

	return (
		<div>
			<Navbar1 />
			<h1>Random Beer</h1>

			<div key={beer._id}>
				<Link to={`/Beers/${beer._id}`}>
					<Container>
						<Card className="bg-dark text-white">
							<Link
								to={`/Beers/${beer._id}`}
								className="link1"
								style={{ fontSize: "2rem" }}
							>
								<img
									style={{
										resizeMode: "cover",
										height: 150,
									}}
									src={beer.image}
									alt={beer.name}
								/>
								<p>{beer.name}</p>
								<p className="link2" style={{ fontSize: "1rem" }}>
									{beer.brewers_tips}
								</p>
								<p className="link2" style={{ fontSize: "1rem" }}>
									{beer.contributed_by}
								</p>
							</Link>
						</Card>
					</Container>
				</Link>
			</div>
		</div>
	);
}

export default RandomBeer;
