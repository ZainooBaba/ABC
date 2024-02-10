const getRandomName = () => {
    const names = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'Eva', 'David', 'Sophia'];
    return names[Math.floor(Math.random() * names.length)];
};

const getRandomAge = () => Math.floor(Math.random() * 5) + 18; // Random age between 18 and 22

const getRandomGrade = () => {
    const grades = ['A', 'B', 'C', 'D', 'F'];
    return grades[Math.floor(Math.random() * grades.length)];
};

const getRandomSubjects = () => {
    const subjects = ['Math', 'English', 'Science', 'History', 'Art', 'Physics', 'Chemistry', 'Computer Science', 'Spanish'];
    const numberOfSubjects = Math.floor(Math.random() * 4) + 1; // Random number of subjects (1 to 4)
    const selectedSubjects = [];

    while (selectedSubjects.length < numberOfSubjects) {
        const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
        if (!selectedSubjects.includes(randomSubject)) {
            selectedSubjects.push(randomSubject);
        }
    }

    return selectedSubjects;
};

const generateRandomStudent = (id) => ({
    id,
    name: getRandomName(),
    age: getRandomAge(),
    grade: getRandomGrade(),
    subjects: getRandomSubjects(),
});

const numberOfStudents = 3;

export function getStudentData() {
    return Array.from({ length: numberOfStudents }, (_, index) => generateRandomStudent(index + 1));
}