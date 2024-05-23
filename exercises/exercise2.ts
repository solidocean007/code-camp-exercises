export function getAverage(scores: number[]) {
  let sum = 0;
  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
}


export function getGrade(score: number) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

export function hasPassingGrade(score: number) {
  return getGrade(score) !== "F";
}

export function studentMsg(totalScores: number[], studentScore: number) {
  const averageScores = getAverage(totalScores);
  const yourGrade = getGrade(studentScore);
  const passMsg = hasPassingGrade(studentScore) ? "You passed the course." : "You failed the course.";
  
  return `Class average: ${averageScores}. Your grade: ${yourGrade}. ${passMsg}`;
}

