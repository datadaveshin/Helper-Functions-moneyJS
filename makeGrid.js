// makeGrid - Makes a 2D grid within an array. User chooses what goes in the
//            inner most part of the grid.
var makeGrid = function(row, col, innerType) {
        grid = [];
        for (i = 0; i < row; i++) {
            grid.push([]);
            for (j = 0; j < col; j++) {
                grid[i].push(innerType);
            }
        }
        return grid;
};
