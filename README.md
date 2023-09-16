# js-conway-life

Work in progress....

6/3/2019 - New example using Vue.js for the UI components.

----

Implementation of Conway's Game of Life in Javascript by Matthew Page <work@mjp.co>

The Rules

Any live cell with fewer than two live neighbours dies, as if by underpopulation.

Any live cell with two or three live neighbours lives on to the next generation.

Any live cell with more than three live neighbours dies, as if by overpopulation.

Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

RLE Support

Load data direct from RLE (Run Length Encoded) sources


### Notes

Rebuild Tailwind CSS

- npx tailwindcss -i ./css/mjp-demo.css -o ./css/mjp-tailwind.css --watch

