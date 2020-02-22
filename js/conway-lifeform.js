/**
 * A Conway lifeform / shape. Can load RLE formatted data and be added to
 * to a ConwayWorld
 *
 * @property {String} name - The name of this lifeform
 * @property {String[]} comments - Array of comments about this lifeform
 * @property {String} discoveredBy - The person who discovered this shape
 * @property {Boolean[]} grid - Grid representation, boolean values
 * @property {Number} width - The width of this lifeform
 * @property {Number} height - The width of this lifeform
 */
class ConwayLifeform {
    /**
     * Make a new empty lifeform.
     */
	constructor(id) {
        this.id = id;
		this.name = "";
		this.comments = [];
		this.discoveredBy = "";
		this.grid = [];
		this.width = 0;
		this.height = 0;
        /* Make it chainable */
        return this;
	}
    /**
	 * Compress the string
     * Input bbbboobbbboooobbooobbbb
     * Expected Output 4b2o4b4o2b3o4b
	 *
     * @param {String} rle - The compressed RLE string
     * @return {String} The uncompressed RLE string
	 */
	compress(rle) {
		return rle.replace(/(.)\1{2,}/g, (match)=>{
  			return ( match.length + match.substring(0,1) );
		});
	}

    /**
	 * Decompress the RLE data.
     * Input o3b2ob
     * Expected Output obbboob
	 *
	 * @param {String} rle - The compressed RLE string
     * @return {String} The uncompressed RLE string
	 */
	decompress(rle) {
		return rle.replace(/([0-9]+)([a-z])/g, (match, count, letter) => {
			return letter.repeat(count);
		});
	}

    /**
     * Return the RLE string (uncompressed) from the grid values.
     */
     get rle() {
        return this.grid.reduce( (total, currentValue, currentIndex, arr) => {
            return total + arr[currentIndex].reduce( (total, currentValue, currentIndex, arr) => {
                return total + ( (arr[currentIndex]) ?  "o" : "b" );
            }, "");
        }, "");
     }
	/**
	 * Load the data from a RLE (Run Length Encoded) file, process and update the grid
	 *
	 * @param {String} rle - The raw RLE file data including comments etc
	 */
	loadRLE(rle) {
		let lines = rle.split("\n");
		let rleString = "";

		lines.forEach((line)=>{
			if(line.charAt(0) == "#") {
                /* Extracts the comments from this line */
				this.extractComment(line);
			} else {
				line = line.replace(/ /g, "").toLowerCase();
				if( line.match(/x=/) ) {
                    /* Extract the x, y values (width. height of lifeform) */
					this.extractXY(line);
				} else {
                    /* Remaining strings are part of the RLE string */
					rleString += line;
				}
			}
		});
        /* Decompress the RLE string ( o3b2ob -> obbboob ) */
		rleString = this.decompress(rleString);
        /* Make the empty grid for this uncompressed RLE string */
		this.makeGrid();
        /* Read the RLE string and update the grid */
		this.readRLE(rleString);

        return this;
	}
	/**
	 * Make the empty grid
	 */
	makeGrid() {
		this.grid = [];
		for(let y = 0; y <= this.height; y += 1) {
			this.grid[y] = [];
			for(let x = 0; x <= this.width; x += 1) this.grid[y][x] = false;
		}
	}
	/**
	 * Read the RLE data string and update the grid
	 *
	 * @param {String} rle - The raw RLE uncompressed string
	 */
	readRLE(rle) {
		let y = 0, x = 0;
		[...rle].forEach((ch)=>{
			if(ch=="$") {
				y += 1;
				x = 0;
			} else if(ch == "o" || ch == "b") {
				this.grid[y][x] = ch == "o";
				x += 1;
			}
		});
	}
	/**
	 * Extract the x, y values from the RLE value
	 *
	 * @param {String} line - The line containing these values
	 */
	extractXY(line) {
		this.width = line.match(/x=([0-9]{1,9})/i)[1];
		this.height = line.match(/y=([0-9]{1,9})/i)[1];
	}
	/**
	 * Extract the comments and name from the RLE value
	 *
	 * @param {String} line - The line containing these values
	 */
	extractComment(line) {
		if(line.charAt(1) == "C") {
			this.comments.push(line.substring(2, line.length));
		} else if(line.charAt(1) == "N") {
			this.name = line.substring(2, line.length);
		} else if(line.charAt(1) == "O") {
			this.discoveredBy = line.substring(2, line.length);
		}
	}

}
