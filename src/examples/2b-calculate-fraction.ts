interface Fraction {
  numerator: number;
  denominator: number;
}

function calculateFraction({ numerator, denominator }: Fraction): number {
  return numerator / denominator;
}

// function calculateFraction(fraction: Fraction): number {
//   const { numerator, denominator } = fraction;
//   return numerator / denominator;
// }

// function calculateFraction(fraction: Fraction): number {
//   const numerator = fraction.numerator;
//   const denominator = fraction.denominator;
//   return numerator / denominator;
// }

export default calculateFraction;
