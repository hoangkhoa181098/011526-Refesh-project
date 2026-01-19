'use client'; // This tells Next.js this page is interactive
import { useState } from 'react';
import { Patient } from './types';

const INITIAL_PATIENTS: Patient[] = [
  { id: '1', name: 'John Doe', age: 45, lastVisit: '2025-12-10', hasInsurance: true, status: 'Scheduled' },
  { id: '2', name: 'Jane Smith', age: 32, lastVisit: '2026-01-05', hasInsurance: false, status: 'Critical' },
];

export default function Home() {
  // This is 'State' - it allows the UI to 'remember' changes
  const [patients, setPatients] = useState<Patient[]>(INITIAL_PATIENTS);

  const checkIn = (id: string) => {
    setPatients(prev => prev.map(p =>
      p.id === id ? { ...p, status: 'Completed' } : p
    ));
  };

  return (
    <main className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold">Dental AI Dashboard</h1>
      <div className="grid gap-4 mt-5">
        {patients.map((p) => (
          <div key={p.id} className="p-5 bg-white shadow border rounded-xl flex justify-between">
            <div>
              <h2 className="font-semibold">{p.name}</h2>
              <p className="text-sm text-gray-500">Status: {p.status}</p>
            </div>
            {p.status !== 'Completed' ? (
              <button
                onClick={() => checkIn(p.id)}
                className="bg-blue-600 text-white px-4 py-1 rounded-lg text-sm"
              >
                Check In
              </button>
            ) : (
              <button
                className="bg-gray-600 text-white px-4 py-1 rounded-lg text-sm"
              >
                Checked In
              </button>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}