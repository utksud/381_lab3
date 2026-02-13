/* ==========================
   Exercise 3A: Arrays
========================== */

// 4. Declare array
const classRoster = ["Alice", "Tom", "Charlie", "Diana", "Evan"];

// 5. Convert to string
let rosterString = classRoster.toString();
console.log("Array as string:", rosterString);

// 6. Show original array unchanged
console.log("Original array:", classRoster);

// 7. Add two students
classRoster.push("Fiona", "Nancy");

// 8. Remove first student
let removedStudent = classRoster.shift();
console.log("Removed student:", removedStudent);

// 9. Log updated array
console.log("Updated classRoster:", classRoster);

// 10. Log length
console.log("Total students:", classRoster.length);



/* ==========================
   Exercise 3B: Objects
========================== */

// 1. Create object
const classInfo = {
    className: "ENSF381: Full-Stack Web Development",
    instructor: "Dr. Smith",
    students: classRoster,
    details: {
        semester: "Winter",
        year: 2025
    }
};

// 2. Add schedule property
classInfo.schedule = ["Monday", "Wednesday", "Friday"];

// 3. Update instructor
classInfo.instructor = "Dr. Abdellatif";

// 4. Log properties
console.log("Class Name:", classInfo.className);
console.log("Instructor:", classInfo.instructor);
console.log("Students:", classInfo.students);

// 5. Log nested semester
console.log("Semester:", classInfo.details.semester);

// 6. Log full object
console.log("Updated classInfo object:", classInfo);

// 7. Destructure className and students
const { className, students } = classInfo;
console.log("Destructured className:", className);
console.log("Destructured students:", students);

// 8. Destructure nested semester and year
const { semester, year } = classInfo.details;
console.log("Destructured semester:", semester);
console.log("Destructured year:", year);

// 9 & 10. Destructure first two students
const [student1, student2, ...remainingStudents] = classRoster;

// 11. Log results
console.log("Student 1:", student1);
console.log("Student 2:", student2);
console.log("Remaining Students:", remainingStudents);
