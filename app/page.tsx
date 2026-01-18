export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Dental AI Dashboard</h1>
      <p className="mt-4">Welcome, Doctor. Your patient queue is ready.</p>
      <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-800 font-medium">Status: System Online (React 19)</p>
      </div>
    </main>
  );
}