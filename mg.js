function matrixGenerator ( r, c ) {

  var sortedArr = [];

  for (i = 0; i < (r * c); i++) {

    sortedArr.push(Math.floor((Math.random() * 100)));

  }

  sortedArr.sort(function(a,b) {

    return a - b;

  });

  var multiArr = [];

  for (i = 0; i < r; i++) {

    multiArr[i] = [];

    for ( j = 0; j < c; j++)

    multiArr[i].push(sortedArr[(j + (i * c))]);

  }

}

matrixGenerator( 5, 5 );

