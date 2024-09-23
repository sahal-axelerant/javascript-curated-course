// Calculate the grade of a student.
// Pass in an array of marks, calculate its average.
// Average 1-59: F
// Average 60-69: D
// Average 70-79: C
// Average 80-89: B
// Average 90-100: A


const marks = [85, 95, 90];

let avg = findAverage(marks);
let grade = findGrade(avg);
console.log(avg);
console.log(grade);

function findAverage(marks) {
    let sum = 0;
    for (let mark of marks) {
        sum += mark;
    }
    return sum/marks.length;
}

function findGrade(avgMark) {
    if (avgMark >= 90) {
        return 'A';
    }
    else if (avgMark >= 80) {
        return 'B';
    }
    else if (avgMark >= 70) {
        return 'C';
    }
    else if (avgMark >= 60) {
        return 'D';
    }
    else {
        return 'F';
    }
}