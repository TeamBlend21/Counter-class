function StudentCard({ id, name, department, level, skills, image, status }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      {/* TODO 1: Display the student's profile image using props */}
      <div>
        <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />

        <div>
          <h2 className="text-lg font-bold text-slate-800">{name}</h2>
          <p className="text-sm text-slate-500">{department}</p>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-slate-500">Level</span>
            <span className="text-sm font-semibold text-slate-700">{level}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-500">Status</span>

            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
            >
              {status}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-slate-700 mb-3">Skills</h3>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span className="bg0blue-50 text-blue-700 text-xs px-3 py-2 rounded-lg">{skill}</span>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <p className="text-xs text-slate-400">student ID: {id}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
