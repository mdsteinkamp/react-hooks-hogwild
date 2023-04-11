import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsList from "./HogsList";

function App() {
	return (
		<div className="App">
			<Nav />
			<HogsList hogs={hogs}/>
		</div>
	);
}

export default App;
