// var matrix =
// [ [0,1,2],
//   [1,2,0],
//   [2,0,1] ];

// export var Row = function(one, two, three) {
//   var rowArray = [];
//   rowArray.push(one);
//   rowArray.push(two);
//   rowArray.push(three);
//   this.columns = rowArray.slice();
// }
// new Board([1,2,0],[2,1,0],[0,1,2])

export var Board = function (rowOne, rowTwo, rowThree)
{
  var tempArray= [];
  tempArray.push(rowOne);
  tempArray.push(rowTwo);
  tempArray.push(rowThree);
  this.matrix = tempArray.slice();
}

// var rowOne = new Row(0,1,2);
// var rowTwo = new Row(1,2,0);
// var rowThree = new Row(2,0,1);
// var newBoard = new Board(rowOne, rowTwo, rowThree);


export var numberArray = [0,1,2];


Board.prototype.rowChecker = function () {

  var matchedRow = 0;
  for (var i=0; i< 3; i++){
    var storedArray = [];
    var tempMatrix = this.matrix;
    storedArray = tempMatrix[i].slice();
    if(storedArray.sort().join('') === numberArray.join(''))
    {
      matchedRow++;
    }
  }

  if (matchedRow === 3) {
    return true;
  }
  else {
    return false;
  }
}


Board.prototype.colChecker = function (){
  var matchedCol = 0;
  for (var j=0; j< 3; j++)
  {
    var storedArray = [];
    for (var i=0; i< 3; i++) {
      var tempMatrix = this.matrix;
      storedArray.push(tempMatrix[i][j]);
    }

    if(storedArray.sort().join('') === numberArray.join('')) {
      matchedCol++;
    }
  }

  if(matchedCol === 3){
    return true;
  } else {
    return false;
  }
}


Board.prototype.ultChecker = function () {

  var rowResult = this.rowChecker();
  var colResult = this.colChecker();

  if(rowResult && colResult) {
    return true;
  }
  else {
    return false;
  }
}
