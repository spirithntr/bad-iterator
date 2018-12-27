import Iterator from "./iterator.js";
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var config = {
  'cyclic': true, 'width': 3,
  // this function is only! an example of usage
  // iterator should except any window transformation function (with proper API) 
  // and use it for moving or transforming window in a designed way 
  'windowTransform': function (windowStart, windowEnd) {
    // which params to pass you can choose yourself 
    var newStart = --windowStart;
    var newEnd = --windowEnd;
    return { newStart, newEnd };
  }
};
console.log('---------------------------------------------')
var iterator = new Iterator(array, config);
console.log(iterator.current())
// --> [0, 1, 2]
// iterator.forward()
// iterator.forward()
// --> [9, 0, 1]
console.log('backwards')
console.log(iterator.backward())
// --> [0, 1, 2]