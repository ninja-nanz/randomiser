const shuffle = require('./shuffle')

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

// 
const arr = [1,2,3,4,5,6,7,8,9,10]

// check is array length is the same 

test('array length is the same', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10]
    var actual = shuffle(arr).length
    var expected = 10
    expect(actual).toEqual(expected)
});

// check first item before and after shuffling array. 
// pass if it's different

test('first item is different after shuffle', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10]
    var actual = shuffle(arr)[0]
    var expected = 1
    expect(actual).not.toEqual(expected)
});