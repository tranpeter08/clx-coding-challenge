const notFizzBuzz = require('./notFizzBuzz');
const {expect} = require('chai');
const {spy} = require('sinon');

describe('notFizzBuzz()', () => {
  let logSpy = spy(console, 'log');

  const strings = ['CLX', 'DTC'];
  const multiplesOf = {
    15: [],
    5: [],
    3: []
  };

  const otherMultiples = [];

  before(() => {
    notFizzBuzz();
    const allLogCalls = logSpy.getCalls();
    
    for (let i = 0; i < allLogCalls.length; i++) {
      const logCall = allLogCalls[i];
      const num = i + 1;

      if (num % 15 === 0) {
        multiplesOf[15].push(logCall);
      } else if (num % 5 === 0) {
        multiplesOf[5].push(logCall);
      } else if (num % 3 === 0) {
        multiplesOf[3].push(logCall);
      } else {
        otherMultiples.push([logCall, num]);
      }
    }
  });

  it('Calls console.log 100 times', () => {
    expect(logSpy.callCount).to.equal(100);
  });

  it('Prints "CLXDTC" for multiples of 15', () => {
    for (let logCall of multiplesOf[15]) {
      expect(logCall.args[0]).to.equal(strings.join(''));
    }
  });

  it('Prints "DTC" for multiples of only 5', () => {
    for (let logCall of multiplesOf[5]) {
      expect(logCall.args[0]).to.equal(strings[1]);
    }
  });

  it('Prints "CLX" for multiples of only 3', () => {
    for (let logCall of multiplesOf[3]) {
      expect(logCall.args[0]).to.equal(strings[0]);
    }
  });

  it('Prints a number if not a multiple of 3, 5 or 15', () => {
    for (let [logCall, number] of otherMultiples) {
      expect(logCall.notCalledWith(strings)).to.be.true;
      expect(logCall.args[0]).to.equal(number);
    }
  });
});