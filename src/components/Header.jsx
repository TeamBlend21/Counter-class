function Header() {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">StudentHub</h1>

          <p className="text-sm text-slate-500">Student directory and profiles</p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-sm font-semibold transition">
          + Add Student
        </button>
      </div>
    </header>
  );
}

export default Header;
