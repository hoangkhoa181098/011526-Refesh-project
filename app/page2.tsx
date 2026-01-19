import { useState } from "react";
import { Patient } from "./types";

const MOCK_PATIENTS: Patient[] = [
  { id: '1', name: 'John Doe', age: 45, lastVisit: '2025-12-10', hasInsurance: true, status: 'Scheduled' },
  { id: '2', name: 'Jane Smith', age: 32, lastVisit: '2026-01-05', hasInsurance: false, status: 'Critical' },
  { id: '3', name: 'Robert Lee', age: 58, lastVisit: '2025-11-20', hasInsurance: true, status: 'Completed' },
]

export default function Page2() {

  const [patients, setPatients] = useState<Patient[]>(MOCK_PATIENTS);

  const checkIn = (id: string) => {
    setPatients(prev => prev.map(p => p.id === id ? {...p, status: 'Completed'} : p))
  };

  return (
    <main className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold">Dental AI Dashboard</h1>
      <div className="grid gap-4 mt-5">
        {patients.map((p) => (
          <div key={p.id}>
            {p.id}
            {p.name}
            {p.age}
            {p.lastVisit}
            {p.hasInsurance}
            {p.status}
            <button onClick={() => {checkIn(p.id)}}>Check In</button>
          </div>
        ))}
      </div>
    </main>
  );
}