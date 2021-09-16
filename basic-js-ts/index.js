// Part A : 1.Fibonacci Sequence
const fib = (nums) => {
  let fib = [0, 1];
  let data = [1];

  for (let i = 2; i <= nums; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    data.push(fib[i]);
  }
  const lastIndex = data.length - 1;

  return data[lastIndex];
};

//Part ! : 2.Array shift
const shift = (data, direction, n) => {
  const number = n > data.length ? n % data.length : n;
  const lenght = direction === 'right' ? data.length - number : number;
  const shifted = data.splice(0, lenght);

  return data.concat(shifted);
};

//Part 1 : 3.Second max
const secondMax = (data) => {
  const result = [];
  const max = Math.max.apply(null, data);
  data.map((x) => {
    x != max ? result.push(x) : null;
  });

  return result.length > 0
    ? Math.max.apply(null, result)
    : data.length > 0
    ? max
    : 'Error!';
};

//Part 1 : 4.FizzBuzz...But
const fizzBuzz = (input) => {
  const result = [];
  switch (input % 3) {
    case 0:
      result.push('Fizz');
  }
  switch (input % 5) {
    case 0:
      result.push('Buzz');
  }

  return (result.toString()).replace(/,/g, '')
};

console.log(fizzBuzz(45));
