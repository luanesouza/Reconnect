let array = [1, '2', 3, '4']

function sumArray(array) {
  let acc;
  for(i = 0; i < array.length; i++) {
    acc += parseInt(array[i])
  }

  return acc;
  //loop through array and return sum of all elements
}
