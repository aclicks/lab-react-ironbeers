import Navbar1 from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Image } from "react-bootstrap";

function BeerDetails() {
	const { beerId } = useParams();
	const [beer, setBeer] = useState({});
	const navigate = useNavigate();

	const [showForm, setShowForm] = useState(false);
	const [showForm2, setShowForm2] = useState(true);
	const [reload, setReload] = useState(false);

	const [form, setForm] = useState({
		name: "",
		image: "",
		tagline: "",
		contibuted_by: "",
		attenuation_level: "",
		description: "",
		first_brewed: "",
		brewers_tips: "",
	});

	useEffect(() => {
		async function fetchBeer() {
			const response = await axios.get(
				`https://ironbeer-api.fly.dev/${beerId}`
			);
			setBeer(response.data);

			setForm(response.data);
		}

		fetchBeer();
	}, [reload]);

	async function handleDelete(e) {
		await axios.delete(`https://ironbeer-api.fly.dev/delete/${beerId}`);
		navigate("/api-teste");
	}

	function handleChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			const clone = { ...form };
			delete clone._id;
			await axios.put(`https://ironbeer-api.fly.dev/new/${beerId}`, clone);
			setReload(!reload);
			setShowForm(false);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
			<Navbar1 />
			<Container>
				<Card className="bg-dark text-white">
					{!showForm && (
						<div>
							<Image fluid src={beer.image} alt={beer.name} />
							<p>
								{beer.name} - Since {beer.first_brewed}
							</p>
							<p>{beer.description}</p>
							<p>{beer.brewers_tips}</p>
							<p>
								Att. level: {beer.attenuation_level}
							</p>
							<p>{beer.contributed_by}</p>
						</div>
					)}

					{showForm === true && (
						<form>
							<div>
								<label>Name</label>
								<input
									type="text"
									onChange={handleChange}
									name="name"
									value={form.name}
								/>
							</div>

							<div>
								<label>Image</label>
								<input
									type="text"
									onChange={handleChange}
									name="image"
									value={form.image}
								/>
							</div>

							<div>
								<label>Tagline</label>
								<input
									type="text"
									onChange={handleChange}
									name="tagline"
									value={form.tagline}
								/>
							</div>
							<div>
								<label>Contributed by</label>
								<input
									type="text"
									onChange={handleChange}
									name="contributed_by"
									value={form.contributed_by}
								/>
							</div>
							<div>
								<label>Attenuation Level</label>
								<input
									type="text"
									onChange={handleChange}
									name="attenuation_level"
									value={form.attenuation_level}
								/>
							</div>
							<div>
								<label>First Brewed</label>
								<input
									type="text"
									onChange={handleChange}
									name="first_brewed"
									value={form.first_brewed}
								/>
							</div>

							<div>
								<label>Brewers Tips</label>
								<input
									type="text"
									onChange={handleChange}
									name="brewers_tips"
									value={form.brewers_tips}
								/>
							</div>

							<button onClick={handleSubmit}>Save Beer</button>
						</form>
					)}
					<button
						onClick={() => {
							setShowForm(!showForm);
							setReload(!reload);
						}}
					>
						Edit beer
					</button>
					<button onClick={handleDelete}>Delete beer</button>
				</Card>
			</Container>
		</div>
	);
}

export default BeerDetails;
