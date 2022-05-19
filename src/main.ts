const test1 = [4,2,2]; 

export function getConjugateCollection(numbers: number[]) : number[]{
  const secondMap = new Map<number, number>();
  for(let i = 0; i <= numbers.length; i++) {
    for(let j = 1; j <= numbers[i]; j++) {
      if(!secondMap.get(j)){
        secondMap.set(j, 1);
      } else{
        secondMap.set(j, secondMap.get(j)! + 1);
      }
    }
  }
  return Array.from(secondMap.values())
}

export function printMatrix(numbers: number[]){
  for(let i = 0; i <= numbers.length; i++) {
    let out = ""
    for(let j = 1; j <= numbers[i]; j++) {
      out += " O ";
    }
    console.log(out);
  }
}


console.log(test1);
printMatrix(test1);

const conjugateCollection = getConjugateCollection(test1);
console.log(conjugateCollection);
printMatrix(conjugateCollection);


