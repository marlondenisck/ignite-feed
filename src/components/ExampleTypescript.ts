interface User {
  name: string;
  age: number;
}

function sumAge (users: User[]) {
  let sum = 0;
  for (const user of users) {
    sum += user.age;
  }
  return sum;
}

const SumOfAllUserAges = sumAge([
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
]);