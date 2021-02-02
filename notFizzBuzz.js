function notFizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = '';
  
    if (i % 3 === 0) {
      output += 'CLX';
    }
  
    if (i % 5 === 0) {
      output += 'DTC';
    }
  
    if (output === '') {
      output = i;
    }
  
    console.log(output);
  }
}

module.exports = notFizzBuzz;