import Footer from './Footer';

export default function Sponsors() {
  return (
    <div className="min-h-screen bg-[#F9F7F1] text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <header className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-[#c41e3a]">LITERATI 26</h1>
          <p className="text-[#6b2a4a] mt-2 font-serif text-xl">Threads of mythology</p>
          <p className="text-stone-600 mt-3">IIT Delhi's annual literature and arts festival</p>
        </header>

        <main className="bg-white rounded-lg shadow p-10">
          <h2 className="text-2xl font-semibold mb-4">Sponsors</h2>
          <p className="text-stone-600">Coming soon</p>
          <div className="mt-6">
            <a href="/" className="inline-block px-4 py-2 bg-[#c41e3a] text-white rounded hover:bg-[#a01729]">Back to Home</a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
