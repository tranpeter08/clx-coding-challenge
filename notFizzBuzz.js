function notFizzBuzz() {
  function isMultipleOf(value, int) {
    return value % int === 0;
  }

  for (let i = 1; i <= 100; i++) {
    let output = '';
  
    if (isMultipleOf(i, 3)) {
      output += 'CLX';
    }
  
    if (isMultipleOf(i, 5)) {
      output += 'DTC';
    }
  
    if (output === '') {
      output = i;
    }
  
    console.log(output);
  }
}

module.exports = notFizzBuzz;