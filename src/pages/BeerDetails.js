import Navbar1 from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Image, Button, Form, InputGroup, FloatingLabel } from "react-bootstrap";
import toast from 'react-hot-toast'

function BeerDetails() {
	const { beerId } = useParams();
	const [beer, setBeer] = useState({});
	const navigate = useNavigate();

	const [showForm, setShowForm] = useState(false);

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
		navigate("/");
		toast.success("Beer deleted!");
	}

	function handleReload() {
		setReload(!reload);
	}

	function handleChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			const clone = { ...form };
			delete clone._id;
			await axios.put(`https://ironbeer-api.fly.dev/edit/${beerId}`, clone);
			setReload(!reload);
			setShowForm(false);
		} catch (error) {
			console.log(error);
		}

		handleReload();
		toast.success("Beer Saved!");
		setShowForm(false);
	}

	return (
		<div>
			<Navbar1 />
			<Container>
					{!showForm && (
				<Card className="bg-dark text-white">
						<div>
							<Image fluid rounded src={beer.image} alt={beer.name} />
							<p>
								{beer.name} - Since {beer.first_brewed}
							</p>
							<p>{beer.description}</p>
							<p>{beer.brewers_tips}</p>
							<p>Att. level: {beer.attenuation_level}</p>
							<p>{beer.contributed_by}</p>
						</div>
						<Button variant="info" size="lg" className="mb-3"
						onClick={() => {
							setShowForm(!showForm);
							setReload(!reload);
						}}
					>
						Edit beer
					</Button>
					<Button variant="danger" size="lg" className="mb-3" onClick={handleDelete}>Delete beer</Button>
						</Card>
					)}

					{showForm === true && (
						<Card className="bg-dark">
						<Form>
						<FloatingLabel
							controlId="floatingInput"
							label="Name"
							className="mb-3"
						>
							<Form.Control
								id="basic-addon1"
								aria-label="With textarea"
								type="text"
								onChange={handleChange}
								name="name"
								value={form.name}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId="floatingInput"
							label="Image"
							className="mb-3"
						>
							<Form.Control
								id="basic-addon1"
								aria-label="With textarea"
								type="text"
								onChange={handleChange}
								name="image"
								value={form.image}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId="floatingInput"
							label="Tagline"
							className="mb-3"
						>
							<Form.Control
								id="basic-addon1"
								aria-label="With textarea"
								type="text"
								onChange={handleChange}
								name="tagline"
								value={form.tagline}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId="floatingInput"
							label="Contributed By"
							className="mb-3"
						>
							<Form.Control
								id="basic-addon1"
								aria-label="With textarea"
								type="text"
								onChange={handleChange}
								name="contributed_by"
								value={form.contributed_by}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId="floatingInput"
							label="Attenuation Level"
							className="mb-3"
						>
							<Form.Control
								id="basic-addon1"
								aria-label="With textarea"
								type="text"
								onChange={handleChange}
								name="attenuation_level"
								value={form.attenuation_level}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId="floatingInput"
							label="First Brewed"
							className="mb-3"
						>
							<Form.Control
								id="basic-addon1"
								aria-label="With textarea"
								type="text"
								onChange={handleChange}
								name="first_brewed"
								value={form.first_brewed}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId="floatingInput"
							label="Brewer Tips"
							className="mb-3"
						>
							<Form.Control
								id="basic-addon1"
								aria-label="With textarea"
								type="text"
								onChange={handleChange}
								name="brewers_tips"
								value={form.brewers_tips}
							/>
						</FloatingLabel>

						<Button
							variant="success"
							size="lg"
							className="mb-3"
							onClick={handleSubmit}
						>
							Save Beer
						</Button>
					</Form>
					
				</Card>
					)}
			</Container>
		</div>
	);
}

export default BeerDetails;
