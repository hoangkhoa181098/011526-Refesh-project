// A simple 2026 React Component for a Dental Clinic
export default function PatientCard({ name, lastVisit }: { name: string, lastVisit: string }) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold text-blue-600">{name}</h2>
      <p className="text-gray-600">Last Checkup: {lastVisit}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 hover:cursor-pointer">
        View Dental X-rays
      </button>
    </div>
  );
}