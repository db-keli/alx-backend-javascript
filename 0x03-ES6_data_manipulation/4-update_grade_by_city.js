export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((s) => s.location === city);
  return cityStudents.map((s) => {
    const grade = newGrades.filter((g) => g.studentId === s.id);
    const studentGrade = grade.length === 1 ? grade[0].grade : 'N/A';
    return { ...s, grade: studentGrade };
  });
}
