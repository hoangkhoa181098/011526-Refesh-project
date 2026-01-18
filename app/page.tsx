import { Patient } from './types';

const MOCK_PATIENTS: Patient[] = [
  { id: '1', name: 'John Doe', age: 45, lastVisit: '2025-12-10', hasInsurance: true, status: 'Scheduled' },
  { id: '2', name: 'Jane Smith', age: 32, lastVisit: '2026-01-05', hasInsurance: false, status: 'Critical' },
  { id: '3', name: 'Robert Lee', age: 58, lastVisit: '2025-11-20', hasInsurance: true, status: 'Completed' },
];

export default function Home() {
  return (
    <main className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">Dental AI Dashboard</h1>
      <p className="text-gray-600 mb-8">Current Patient Queue</p>

      <div className="grid gap-4">
        {MOCK_PATIENTS.map((patient) => (
          <div key={patient.id} className="p-5 bg-white shadow-sm border rounded-xl flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-lg text-black">{patient.name}</h2>
              <p className="text-sm text-gray-500">Age: {patient.age} | Last Visit: {patient.lastVisit}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
              patient.status === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}>
              {patient.status}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}