var makeGrid = function(row, col) {
	    grid = [];
	    for (i = 0; i < row; i++) {
	        grid.push([]);
	        for (j = 0; j < col; j++) {
	            grid[i].push([]);
	        }
	    }
	    return grid;
}
