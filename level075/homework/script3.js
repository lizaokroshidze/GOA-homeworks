let student = {
    fullName: "Liza Okroshidze",
    scores: [85, 90, 78, 92, 88],
    averageScore: function() {
        let sum = this.scores.reduce((acc, score) => acc + score, 0)
        return sum / this.scores.length;
    },
    checkStudent: function() {
        let avg = this.averageScore()
        if (avg > 90) {
            console.log("Best student")
        } else if (avg > 60) {
            console.log("Good student")
        } else {
            console.log("Average student")
        }
    }
}

console.log("Average score:", student.averageScore());


student.checkStudent()