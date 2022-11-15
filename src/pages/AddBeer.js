import Navbar1 from "../components/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Container, Image } from "react-bootstrap";
import toast from "react-hot-toast";

function AddBeer() {
	const [showForm, setShowForm] = useState(false);
	const navigate = useNavigate();
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

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			const clone = { ...form };
			delete clone._id;
			await axios.put(`https://ironbeer-api.fly.dev/`, clone);
			setReload(!reload);
			setShowForm(false);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		async function fetchBeers() {
			const response = await axios.get(`https://ironbeer-api.fly.dev/`);

			setForm(response.data);
		}

		fetchBeers();
	}, [reload]);

	function handleReload() {
		setReload(!reload);
	}

	function handleChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	async function handleSubmit(e) {
		e.preventDefault();
		await axios.post(`https://ironbeer-api.fly.dev/new/`, form);
		setForm({
			name: "",
			image: "",
			tagline: "",
			contibuted_by: "",
			attenuation_level: "",
			description: "",
			first_brewed: "",
			brewers_tips: "",
		});

		handleReload();
		toast.success("Beer saved!");
		setShowForm(true);
		navigate("/");
	}

	return (
		<div>
			<Container>
				{showForm === false && (
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
			</Container>
		</div>
	);
}

export default AddBeer;
