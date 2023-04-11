import React, { useState }from "react";
import Nav from "./Nav";
import allHogs from "../porkers_data";
import HogsList from "./HogsList";

function App() {
	const [hogs, setHogs] = useState(allHogs)
	const [nameChecked, setNameChecked] = useState("")
	const [weightChecked, setWeightChecked] = useState("")

	function handleShowGreasedHogs() {
		const greasedHogsList = hogs.filter(hog => hog.greased)
		setHogs(greasedHogsList)
	}

	function handleNameSort(e) {
		setNameChecked(nameChecked => !nameChecked)
		const nameSortedHogs = hogs.sort((a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 :0)
		setHogs(nameSortedHogs)
		
	}

	function handleWeightSort(e) {
		setWeightChecked(weightChecked => !weightChecked)
		const weightSortedHogs = hogs.sort((a, b) => (a.weight > b.weight) ? 1 : (a.weight < b.weight) ? -1 : 0)
		setHogs(weightSortedHogs)
	}

	return (
		<div className="App">
			<Nav />
			<div>
				<button onClick={handleShowGreasedHogs}>Show Greased Hogs</button>
				<br/>
				<h5>Filter piggies by</h5>
				<input 
					type="radio"
					name="name"
					value="name"
					onChange={handleNameSort}
					checked={nameChecked}
				/>
				<label> Name</label>
				<br/>
				<input 
					type="radio"
					name="weight"
					value="weight"
					onChange={handleWeightSort}
					checked={weightChecked}
				/>
				<label> Weight</label>
			</div>
			<HogsList hogs={hogs}/>
		</div>
	);
}

export default App;
