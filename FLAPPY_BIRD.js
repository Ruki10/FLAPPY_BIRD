// define the initial position of the bird
let birdPosition = [50, 50];

// define the initial velocity of the bird
let birdVelocity = 0;

// define the acceleration due to gravity
const gravity = 0.5;

// define the initial position of the pipes
let pipes = [];

// define the distance between each pipe
const pipeDistance = 100;

// define the width of the pipes
const pipeWidth = 50;

// define the speed at which the pipes move
const pipeSpeed = 3;

// define the main game loop
function draw() {
  // clear the screen
  background(0);

  // update the bird's position
  birdVelocity += gravity;
  birdPosition[1] += birdVelocity;

  // check if the bird has hit the ground or a pipe
  if (birdPosition[1] > height || birdPosition[1] < 0) {
    // end the game
  }
  for (let i = 0; i < pipes.length; i++) {
    if (
      birdPosition[0] > pipes[i][0] &&
      birdPosition[0] < pipes[i][0] + pipeWidth &&
      (birdPosition[1] < pipes[i][1] ||
        birdPosition[1] > pipes[i][1] + pipeDistance)
    ) {
      // end the game
    }
  }

  // draw the bird
  fill(255);
  ellipse(birdPosition[0], birdPosition[1], 25, 25);

  // move the pipes
  for (let i = 0; i < pipes.length; i++) {
    pipes[i][0] -= pipeSpeed;
  }

  // generate new pipes
  if (pipes.length === 0 || pipes[pipes.length - 1][0] < width - pipeWidth) {
    pipes.push([
      width,
      Math.floor(Math.random() * (height - pipeDistance))
    ]);
  }

  // draw the pipes
  for (let i = 0; i < pipes.length; i++) {
    fill(255);
    rect(pipes[i][0], 0, pipeWidth, pipes[i][1]);
    rect(
      pipes[i][0],
      pipes[i][1] + pipeDistance,
      pipeWidth,
      height - (pipes[i][1] + pipeDistance)
    );
  }
}

// handle user input to make the bird flap
function keyPressed() {
  if (key === " ") {
    birdVelocity = -5;
  }
}
