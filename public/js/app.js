
$(document).ready(function(){
  var container = $('.container');
  var numOFRows = 10;
  var numOFCols = 10;
  var ten = $('#10');
  var fithteen = $('#15');
  var twenty = $('#20');




  ten.on('click', initGrid);
  fithteen.on('click', initGrid15);
  twenty.on('click', initGrid20);

  function initGrid20(){
    container.html('');
    var numOFRows = 20;
    var numOFCols = 20;
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
    addClickHandlers();
  }
  function initGrid15(){
    container.html('');
    var numOFRows = 15;
    var numOFCols = 15;
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
    addClickHandlers();
  }
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
    container.html('');
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
    addClickHandlers();
  }
});
