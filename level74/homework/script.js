function rounding(n, m) {
    const remainder = n % m;
    if (remainder === 0) {
      return n;
    }
    const halfM = m / 2;
    if (remainder < halfM) {
      return n - remainder;
    } else if (remainder > halfM) {
      return n + (m - remainder);
    } else {
      return n;
    }
  }