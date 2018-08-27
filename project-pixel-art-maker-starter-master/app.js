// Select color input
var color = document.getElementById('colorPicker').value;

// Select the Canvas
var pixelCanvas = document.getElementById('pixel_canvas'); 
 
// Select size form
var sizePicker = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener( 'submit', function() {
	event.preventDefault(); //it will prevent the default JS function from executing
	
	//This gets the user input for height and width of the pixel canvas to draw the grid
	var inputWidth = document.getElementById('input_width').value; //can also be understood as number of columns/cells
	var inputHeight = document.getElementById('input_height').value;//can also be understood as number of rows
	makeGrid(inputHeight, inputWidth);
})

function makeGrid(height, width) {
	
	pixelCanvas.innerHTML = ""; //reset content of <table> in html
	
	//this outer loop is to draw the rows of the grid
	for(var i = 0; i < height; i++){ 
		var newRow = pixelCanvas.insertRow(); //This will insert a new row in the grid
		for(var j = 0; j < width; j++){
			var newCell = newRow.insertCell(); //This will insert a new cell in the grid
			newCell.onclick = changeCellColor; 
			//is a function that changes the background color when the cell is clicked
		}
	}
} 

// Get user input for color change 
function changeCellColor() {
	console.log('cell change');
	color = document.getElementById('colorPicker').value;
	this.style.background = color; 
}

