import HogCard from "./HogCard"

export default function HogsList({ hogs }) {
  console.log(hogs)

  const hogsList = hogs.map(hog => (
    <HogCard key={hog.name} hog={hog} />
  ))

  return (
    <h1>{hogsList}</h1>
  )
}