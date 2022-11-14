import { useState, useEffect } from "react";
import axios from "axios";
import Navbar1 from "../components/Navbar";


function RandomBeer() {
	const [beers, setBeers] = useState([]);

	useEffect(() => {
		async function fetchBeers() {
			const response = await axios.get(
				"https://ih-beers-api2.herokuapp.com/beers/random"
			);
			setBeers(response.data);
		}

		fetchBeers();
	}, []);
	
	return (
		<div>
			<Navbar1 />
			<h1>Random Beer</h1>
			            
            <div key={beers._id}>
				<img
					style={{
						resizeMode: "cover",
						height: 150,
					}}
                    src={beers.image_url}
				/>
				<p>{beers.name}</p>
				<p>{beers.tagline}</p>
				<p>{beers.contributed_by}</p>
			</div>
			
		</div>
	);
}

export default RandomBeer;
