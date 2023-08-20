const CANVAS_SIZE = [250, 443];
const SNAKE_START = [
    [12, 14],
    [12, 13]
];
const APPLE_START = [8, 4];
const SCALE = 10;
const SPEED = 150;
const DIRECTIONS = {
    37: [-1, 0], // left
    38: [0, -1], // up
    39: [1, 0], // right
    40: [0, 1] // down
};

export {
    CANVAS_SIZE,
    SNAKE_START,
    APPLE_START,
    SCALE,
    SPEED,
    DIRECTIONS
};