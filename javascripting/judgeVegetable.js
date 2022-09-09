const judgeVegetable = function (vegetables, metric) {
  let winner = vegetables[0];
  for (const vegetable of vegetables) {
    if (vegetable[metric] > winner[metric]){
      winner = vegetable
    }
  }
return winner.submitter;
  
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))