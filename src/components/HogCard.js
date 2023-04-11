import { useState } from "react";
import HogDetails from "./HogDetails";

export default function HogCard({ hog }) {
  const [showDetails, setShowDetails] = useState(false)

  function showHogDetails() {
    setShowDetails(showDetails => !showDetails)
  }


  return (
    <div className="ui grid container" onClick={showHogDetails}>
      <h1 className="ui eight wide column">{hog.name}</h1>
      <img className="ui eight wide column" src={hog.image} />
      {showDetails ? <HogDetails hog={hog}/> : null}
    </div>
  )
}