import Navbar1 from "../components/Navbar";
import { useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

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

console.log(beer)
    
    return (
		<div>
			<Navbar1 />

			
			<img
				style={{
					resizeMode: "cover",
					height: 150,
				}}
				src={beer.image_url}
			/>
			<p>{beer.name}</p>
			<p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.description}</p>
			<p>{beer.contributed_by}</p>

		</div>
	);
}

export default BeerDetails;
