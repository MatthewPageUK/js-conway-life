/**
 * Conway cell
 *
 * @property {ConwayWorld} world - The Conway world this cell exists in
 * @property {Number} x - The X position of this cell in the grid / world
 * @property {Number} y - The Y position of this cell in the grid / world
 * @property {Boolean} state - The states of this cell, dead or alive
 * @property {Boolean} nextState - The state the cell will be in the next generation
 */
class ConwayCell {
	/**
	 * Make a new Cell
	 *
	 * @param {ConwayWorld} w - The Conway world this cell exists in
	 * @param {Number} x - The X position of this cell in the grid / world
	 * @param {Number} y - The Y position of this cell in the grid / world
	 * @param {Boolean} s - The states of this cell, dead or alive
	 */
	constructor(w, x, y, s) {
		this.world = w;
		this.x = x;
		this.y = y;
		this.state = false;
		this.nextState = false;
		this.recentlyDied = false;
	}
	/**
	 * How many living neighbours do we have. Exit if we get to 4 as we don't need to know
	 * about > 3.
	 */
	countNeighbours() {
		let c = 0;
		for(let x =- 1; x <= 1; x++) {
			for(let y =- 1; y <= 1; y++) {
				let neighbour = { x: this.x + x, y: this.y + y };
				if( this.world.isInside(neighbour.x, neighbour.y) &&
				   (( neighbour.x !== this.x ) || ( neighbour.y !== this.y )) ) {
					if(this.world.grid[neighbour.y][neighbour.x].state) c += 1;
					if(c > 3) return c;
				}
			}
		}
		return c;
	}
	/**
	 * Calculate the next generation without changing the current grid. This is the main
	 * algorithm..
	 *
	 * Any live cell with fewer than two live neighbors dies, as if by underpopulation.
	 *
	 * Any live cell with two or three live neighbors lives on to the next generation.
	 *
	 * Any live cell with more than three live neighbors dies, as if by overpopulation.
	 *
	 * Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
	 */
	calcNextState() {
		let liveN = this.countNeighbours();
		if( (liveN == 2 && this.state) || liveN == 3 ) {
			this.nextState = true;
		} else {
			this.nextState = false;
		}
	}
	/**
	 * Do a clock tick in time, set current state to the next state, reset next state
	 * Track rowTotal as a 1 line bucket, allows later to check blocks of 3 rows instead
	 * of every cell.
	 */
	tick() {
		if(this.state) {
			if(!this.nextState) {
				this.world.rowTotal[this.y] -= 1;
			}
		}
		if(!this.state) {
			if(this.nextState) {
				this.world.rowTotal[this.y] += 1;
			}
		}
		if(this.recentlyDied) this.recentlyDied = false;
		if(this.state && !this.nextState) this.recentlyDied = true;
		/* The actual tick */
		this.state = this.nextState;
		this.nextState = false;
	}
}
