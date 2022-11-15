import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/Random-Beer";
import BeerDetails from "./pages/BeerDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from 'react-hot-toast'

function App() {
	return (
		<div className="App">
			<Toaster/>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/Beers" element={<Beers />} />
				<Route path="/Beers/:beerId" element={<BeerDetails />} />
				<Route path="/Random-Beer" element={<RandomBeer />} />
				{/* <Route path="*" element={ <ErrorPage /> } /> */}
			</Routes>
		</div>
	);
}

export default App;
