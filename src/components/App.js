import React, { useState }from "react";
import Nav from "./Nav";
import allHogs from "../porkers_data";
import HogsList from "./HogsList";

function App() {
	const [hogs, setHogs] = useState(allHogs)


	return (
		<div className="App">
			<Nav />
			<HogsList hogs={hogs}/>
		</div>
	);
}

export default App;
