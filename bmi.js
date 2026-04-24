function bmiCalculator(weight, height) {
  let bmi = weight / (height * height);
  Math.round(bmi);

  return bmi;

}

bmiCalculator(130, 25);
