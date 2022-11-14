import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Beers from "./pages/Beers"
import RandomBeer from "./pages/Random-Beer"

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage/>} />
        <Route path="/Beers" element={ <Beers /> } />
        <Route path="/Random-Beer" element={ <RandomBeer /> } />
        {/* <Route path="*" element={ <ErrorPage /> } /> */}
			</Routes>
		</div>
	);
}

export default App;
