/**
 * A Conway Game of Life world, the grid on which cells can live and die
 *
 * @property {ConwayCell[]} cells - A single dimensional array of cells
 * @property {ConwayCell[][]} grid - Multi dimensional grid array of cells
 * @property {Number} width - Number of columns (width)
 * @property {Number} height - Number of rows (height)
 * @property {Number} rowTotal - Total living cells in this row (kind of bucket)
 *
 */
class ConwayWorld {
    /**
     * Make a new Conway World and reset the data.
     *
     * @param {Number} h - Number of rows (height)
     * @param {Number} w - Number of columns (width)
     */
	constructor(w, h) {
		this.cells = [];
		this.grid = [];
		this.width = w;
		this.height = h;
		this.rowTotal = [];
		this.reset();
	}
	/**
	 * Add a new lifeform to the world / grid. Loop through the lifeform
	 * grid and set the relevant cells in the main grid / world.
	 *
	 * @param {ConwayLifeform} l - The lifeform to add
	 * @param {Number} offsetX - The X offset in the world
	 * @param {Number} offsetY - The Y offset in the world
	 */
	addLifeform(l, offsetX, offsetY) {
		for(let y = 0; y <= l.height; y += 1) {
			for(let x = 0; x <= l.width; x += 1) {
				if(this.isInside(x+offsetX, y+offsetY)) {
					this.grid[y+offsetY][x+offsetX].state = l.grid[y][x];
					this.rowTotal[y+offsetY] += 1;
				}
			}
		}
	}
	/**
	 * Is the point inside the world
	 */
	isInside(x, y) {
		return ( x >= 0 && x < this.width && y >= 0 && y < this.height );
	}
	/**
	* Reset the grid and cells. Empty the arrays and remake
	* the ConwayCell instances in the new grid and cells array.
	*/
	reset() {
		this.cells = [];
		this.grid = [];
		for(let y = 0; y <= this.height+1; y += 1) {
			this.rowTotal[y] = 0;
			this.grid[y] = [];
			for(let x = 0; x <= this.width; x += 1) {
				this.cells.push(new ConwayCell(this, x, y, false));
				this.grid[y][x] = this.cells[this.cells.length-1];
			}
		}
	}
	/**
	* Take the next step in time. First calculate the next state of each
	* cell, then update each cell to its nextState after all the calcs are done
	*/
	tick() {
		for(let y = 0; y <= this.height; y += 1) {
			if( y > 0 ) {
				if(this.rowTotal[y-1] != 0 || this.rowTotal[y] != 0 || this.rowTotal[y+1] != 0) {
					for(let x = 0; x <= this.width; x += 1) {
						this.grid[y][x].calcNextState();
					}
				} // else { console.log(`Skip row ${y}`); }
			}
		}
		this.cells.forEach((cell)=>{
			cell.tick();
		});
	}
}
