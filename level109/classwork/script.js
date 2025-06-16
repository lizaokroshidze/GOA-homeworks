const {
  arr: [
    {
      level: [level1_1, level1_2, level1_3],
    },
    {
      level: [level2_1, level2_2, level2_3],
      students: [
        {
          name: student1Name,
          surname: student1Surname,
          score: [s1_score1, s1_score2, s1_score3],
        },
        {
          name: student2Name,
          surname: student2Surname,
          score: [s2_score1, s2_score2, s2_score3],
        },
      ],
    },
  ],
} = obj;

console.log("პირველი აითემის ლეველები:");
console.log(level1_1, level1_2, level1_3);

console.log("მეორე აითემის ლეველები:");
console.log(level2_1, level2_2, level2_3);

console.log("სტუდენტი 1:");
console.log(student1Name, student1Surname);
console.log(s1_score1, s1_score2, s1_score3);

console.log("სტუდენტი 2:");
console.log(student2Name, student2Surname);
console.log(s2_score1, s2_score2, s2_score3);
