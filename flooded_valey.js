var getValleyVolume = function(valleyArray) {
  // extract relevant array for trapped water in a valley array
  // the algorithm is -
  //   - create a suitable two dim array with the same number of columns
  //      as the length of array provided, and with the number rows set
  //      between the min and max of the array entries provided, with 
  //      increments of 1
  //   -  For each being built
  //   -- if the current array value is less than the row number being
  //      processed, set the 2 dim array cell value to 0, else set it 
  //      to the row number
  var valleyArrayLen = valleyArray.length;
  var maxValleyArray = Math.max.apply(null,valleyArray);
  var minValleyArray = Math.min.apply(null,valleyArray);
  var twoDimArray =[];
  var oneDimArray=[];
  
  // populate our 2 dim array
  for (var  j =maxValleyArray; j >= minValleyArray;j--) {
    for (var i =0; i < valleyArrayLen;i++) {
      oneDimArray.push((valleyArray[i] >= j) ? j: 0);
    }
    twoDimArray[maxValleyArray-j]=oneDimArray;
    oneDimArray=[];
  }
  
  // call our cell counting function with the 2 dim array above
  return getVolumeFromTwoDimArray(twoDimArray);
}

var getVolumeFromTwoDimArray = function(inputTwoDimArray) {
  // Count cells for trapped water in a 2 dim valley array
  // the algorithm is -
  //   -  For each cell of value zero in the above 2 dim array
  //   -- if the curret cell value is less than or equal to the max of
  //      values 'on left' and is also less than or equal to the max of
  //      values 'on right', then water would stay there after flood
  //      subsides, so we increment out counter 
  var oneDimArray=[];
  var maxOnLeft;
  var maxOnRight;
  var cellCountForFloodedWater =0;
  
  // loop through supplied 2 dim array and increment counter when
  // specific conditions are met
  for (var  i =0; i < inputTwoDimArray.length;i++) {
    oneDimArray = inputTwoDimArray[i];
    // we don't care about 'edge' cells
    for (var j =1; j < oneDimArray.length-1;j++) {
      maxOnLeft = Math.max.apply(null,oneDimArray.slice(0,j));
      maxOnRight = Math.max.apply(null,oneDimArray.slice(j+1));
      if (oneDimArray[j] === 0 
          && maxOnLeft > 0
          && maxOnRight > 0
          && oneDimArray[j]<=maxOnLeft 
          && oneDimArray[j]<=maxOnRight ) {
            cellCountForFloodedWater++;
            // useful to print out for debugging
            //inputTwoDimArray[i][j] =-1;
      }
    }
  }
  
  // return appropriate cellcount
  return cellCountForFloodedWater;
}

//personal sample below
console.log(getValleyVolume( [2, 1,1,2]));
console.log(getValleyVolume( [1, 2,3,1,2,2,0,3,4,5,5]));

// actual samples received below
console.log(getValleyVolume( [2, 4, 5, 2, 3, 4, 6, 6, 4, 5]));
console.log(getValleyVolume( [9, 8, 7, 6, 5, 5, 6, 7, 8, 9]));
console.log(getValleyVolume( [3, 2, 1, 2]));
console.log(getValleyVolume( [5, 4, 3, 2, 1, 5]));
console.log(getValleyVolume( [5, 1, 2, 3, 4, 5]));