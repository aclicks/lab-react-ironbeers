import { useState, useEffect } from "react";
import axios from "axios";
import Navbar1 from "../components/Navbar";
import { Link } from "react-router-dom";
import { Card, Container, Image } from "react-bootstrap";

function Beers() {
	const [beers, setBeers] = useState([]);

	useEffect(() => {
		async function fetchBeers() {
			const response = await axios.get(
				"https://ironbeer-api.fly.dev/"
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
							<Card className="bg-dark text-white">
								<Link to={`/Beers/${beer._id}`} className="link1" style={{fontSize: '2rem'}}>
									<Image fluid rounded
										style={{
											resizeMode: "cover",
											height: 150,
										}}
										src={beer.image}
										alt={beer.name}
									/>
									<p>{beer.name}</p>
									<p className="link2" style={{fontSize: '1rem'}}>{beer.brewers_tips}</p>
									<p className="link2" style={{fontSize: '1rem'}}>{beer.contributed_by}</p>
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
