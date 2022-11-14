import { useState, useEffect } from "react";
import axios from "axios";
import Navbar1 from "../components/Navbar";

const beer = Math.floor(Math.random() * (47 - 0 + 1) + 0);
console.log(beer)

function RandomBeer() {
	const [beers, setBeers] = useState([]);

	useEffect(() => {
		async function fetchBeers() {
			const response = await axios.get(
				"https://ih-beers-api2.herokuapp.com/beers"
			);
			setBeers(response.data);
		}

		fetchBeers();
	});

console.log(beers);

	return (
		<div>
			<Navbar1 />
			<h1>Random Beer</h1>
			            
            <div key={beers[beer]._id}>
				<img
					style={{
						resizeMode: "cover",
						height: 150,
					}}
                    src={beers[beer].image_url}
				/>
				<p>{beers[beer].name}</p>
				<p>{beers[beer].tagline}</p>
				<p>{beers[beer].contributed_by}</p>
			</div>
			
		</div>
	);
}

export default RandomBeer;
