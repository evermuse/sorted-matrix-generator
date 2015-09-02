function matrixGenerator ( r, c ) {

  var sortedArr = [];

  for (i = 0; i < (r * c); i++) {

    sortedArr.push(Math.floor((Math.random() * 100)));

  }

  sortedArr.sort(function(a,b) {

    return a - b;

  });

  console.log(sortedArr);

  var multiArr = [];

  for (i = 0; i < r; i++) {

    multiArr[i] = [];

    multiArr[i].push(sortedArr[i * c], sortedArr[i + (i * c)], sortedArr[i + (i * c)]);

  }

  console.log(multiArr);

}

matrixGenerator( 4, 4 );

