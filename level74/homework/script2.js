function solution(number) {
    function sumDivisibleBy(n, limit) {
      const p = Math.floor((limit - 1) / n);
      return n * (p * (p + 1)) / 2;
    }
  
    const sum3 = sumDivisibleBy(3, number);
    const sum5 = sumDivisibleBy(5, number);
    const sum15 = sumDivisibleBy(15, number);
  
    return sum3 + sum5 - sum15;
  }