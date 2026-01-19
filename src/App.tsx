import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-[#1a1a1a] border-b border-gray-800">
        <div className="flex items-center gap-4">
          <img
            src="https://store.supercell.com/_next/static/media/store_logo.4fc97a22.png"
            alt="Supercell Logo"
            className="h-8"
          />
          <span className="text-xl font-bold tracking-tight">STORE</span>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-gray-300 hover:text-white">Games</button>
          <button className="text-gray-300 hover:text-white">Support</button>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-bold transition">
            Log In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40 z-10" />
        <img
          src="https://images.ctfassets.net/609u6u78x0b7/7p1m2k3l4n5o6p7q8r9s0/a1b2c3d4e5f6g7h8i9j0/Supercell_Store_Banner.jpg"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/1920x400?text=Supercell+Store';
          }}
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl font-black mb-4">WELCOME TO THE SUPERCELL STORE</h1>
          <p className="text-xl text-gray-200 mb-8">Official home for your favorite Supercell games</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition">
              Explore Store
            </button>
          </div>
        </div>
      </header>

      {/* Game Grid */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-10">Our Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Clash of Clans', color: 'bg-yellow-600', img: 'https://ui-avatars.com/api/?name=COC&background=edb132&color=fff&size=200&bold=true' },
            { name: 'Brawl Stars', color: 'bg-red-600', img: 'https://ui-avatars.com/api/?name=BS&background=e63946&color=fff&size=200&bold=true' },
            { name: 'Clash Royale', color: 'bg-blue-600', img: 'https://ui-avatars.com/api/?name=CR&background=457b9d&color=fff&size=200&bold=true' },
            { name: 'Hay Day', color: 'bg-green-600', img: 'https://ui-avatars.com/api/?name=HD&background=2a9d8f&color=fff&size=200&bold=true' },
            { name: 'Boom Beach', color: 'bg-cyan-600', img: 'https://ui-avatars.com/api/?name=BB&background=00b4d8&color=fff&size=200&bold=true' },
            { name: 'Squad Busters', color: 'bg-orange-600', img: 'https://ui-avatars.com/api/?name=SB&background=f4a261&color=fff&size=200&bold=true' },
          ].map((game, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer bg-[#1a1a1a] hover:scale-[1.02] transition-transform duration-300">
              <div className={`absolute inset-0 opacity-20 ${game.color}`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-24 h-24 rounded-2xl bg-white/10 mb-4 flex items-center justify-center overflow-hidden">
                   <img
                    src={game.img}
                    alt={game.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/100?text=' + game.name[0];
                    }}
                   />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-wider">{game.name}</h3>
                <button className="mt-4 opacity-0 group-hover:opacity-100 bg-white text-black px-6 py-2 rounded-full font-bold transition-opacity">
                  View Store
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-12 px-8 mt-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img
              src="https://store.supercell.com/_next/static/media/store_logo.4fc97a22.png"
              alt="Supercell Logo"
              className="h-6 opacity-50"
            />
            <span className="text-gray-500">© Supercell 2025</span>
          </div>
          <div className="flex gap-8 text-gray-500 text-sm">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Parent's Guide</a>
            <a href="#" className="hover:text-white">Safe and Fair Play</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
