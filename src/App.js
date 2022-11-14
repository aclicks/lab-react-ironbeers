import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Beers from "./pages/Beers"
import RandomBeer from "./pages/Random-Beer"

function App() {
	return (
		<div className="App">
			<HomePage/>
      <Routes>
				<Route path="/" element={<HomePage/>} />
        <Route path="/Beers" element={ <Beers /> } />
        <Route path="/Randoom-Beer" element={ <RandomBeer /> } />
        {/* <Route path="*" element={ <ErrorPage /> } /> */}
			</Routes>
		</div>
	);
}

export default App;
