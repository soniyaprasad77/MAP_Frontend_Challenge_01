import cardData from "./data/data.json";
import Card from "./components/Card";
export default function App() {
  return (
<>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-gray-800">Events</h1>
      <Card props={cardData} />
    </div>
</>
  )
}