export default function HogCard({ hog }) {
  return (
    <div>
      <h1>{hog.name}</h1>
      <img src={hog.image} />
    </div>
  )
}