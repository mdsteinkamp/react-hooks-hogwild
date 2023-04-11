export default function HogDetails({hog}) {
  return (
    <div>
      <p>Specialty: {hog.specialty}</p>
      <p>Weight: {hog.weight}</p>
      <p>Greased: {hog.greased ? "YES" : "NO"}</p>
      <p>Medal: {hog["highest medal achieved"]}</p>

    </div>
  )
}