
$(document).ready(function(){
  var container = $('.container');
  var numOFRows = 10;
  var numOFCols = 10;

  initGrid();
  addClickHandlers();

  function changeColor(){
    var colorClasses = ['white', 'red', 'green', 'blue'];
    var colorCycle = Math.round(Math.random() * (colorClasses.length-1));
    var color = colorClasses[colorCycle];
    $(this).removeClass(colorClasses.join(' '));
    $(this).addClass(color);
      }
  function addClickHandlers(){
    var cells = $('.cell');
    for(var counter = 0; counter < cells.length; counter += 1){
      var cell = cells[counter];
      $(cell).on('click', changeColor);
    }
  }
  function initGrid(){
    for(var i = 0; i< numOFRows; i += 1){
      var row = $('<div></div>');
      row.addClass('row');
      for(var j = 0; j < numOFCols; j += 1){
        var cell = $('<div></div>');
        cell.addClass('cell border');
        row.append(cell);
      }
      container.append(row);
    }
  }
});
