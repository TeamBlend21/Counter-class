import StudentCard from './StudentCard';

function StudentList({ students }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* TODO 1: Use map() to loop through the students array received through props */}
      {students.map((student) => (
        <StudentCard
          key={student.id}
          id={student.id}
          name={student.name}
          image={student.image}
          department={student.department}
          level={student.level}
          status={student.status}
          skills={student.skills}
        />
      ))}
    </div>
  );
}

export default StudentList;
