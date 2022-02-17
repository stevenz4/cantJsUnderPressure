import Home from "./components/pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./components/pages/tests/exo1/First";
import Second from "./components/pages/tests/exo2/Second";
import Third from "./components/pages/tests/exo3/Third";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/exo1' element={<First/>}/>
					<Route path='/exo2' element={<Second/>}/>
					<Route path='/exo3' element={<Third/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
