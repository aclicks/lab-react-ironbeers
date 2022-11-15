import Navbar1 from "../components/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
	Card,
	Container,
	Button,
	Form,
	InputGroup,
	FloatingLabel,
} from "react-bootstrap";
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
				<Navbar1 />
				{showForm === false && (
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

export default AddBeer;
