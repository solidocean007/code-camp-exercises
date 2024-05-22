function getAverage(scores: number[]) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
}

export default function exercise2(){
 
getAverage([34, 43, 69, 49, 39]);

};
