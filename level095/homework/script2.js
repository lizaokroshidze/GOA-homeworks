const students = [
    { name: "Alice", surname: "Brown", grades: [95, 90, 92] },
    { name: "Ethan", surname: "Smith", grades: [80, 85, 70] },
    { name: "Olivia", surname: "Johnson", grades: [90, 91, 89] },
    { name: "luka", surname: "Davis", grades: [100, 100, 100] },
    { name: "Emma", surname: "Wilson", grades: [75, 60, 80] }
];

function calculateAverage(grades) {
    const sum = grades.reduce((a, b) => a + b, 0);
    return sum / grades.length;
}

const topStudents = students.filter(student => calculateAverage(student.grades) >= 90);
const topNames = topStudents.map(student => student.name);

console.log("Top students:", topStudents);
console.log("Names only:", topNames);