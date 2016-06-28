
$(document).ready(function(){
  var container = $('.container');
  var numOFRows = 10;
  var numOFCols = 10;

  initGrid();
  function initGrid(){
    for(var i = 0; i< numOFRows; i += 1){
      var row = $('<div></div>');
      for(var j = 0; j < numOFCols; j += 1){
        var cell = $('<div></div>');
        cell.addClass('cell border');
        row.append(cell);
      }
      container.append(row);
    }
  }
});
