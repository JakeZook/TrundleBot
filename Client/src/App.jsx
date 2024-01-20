import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./componets/nav";
import Home from "./Pages/Home";
import EditGms from "./Pages/EditGms";
import Reviews from "./Pages/Reviews";

function App() {
	return (
		<div>
			<Nav />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/GameMasters" element={<EditGms />} />
					<Route path="/Reviews" element={<Reviews />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
