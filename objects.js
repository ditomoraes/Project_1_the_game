/* objetos:
runway: width, height, posX, posY, context, canvas, image, drawRunway, moveRunway
cactus (obstacle): width, height, posX, posY, context, canvas, image, drawCactus, moveCactus, collisionVerification
dino (player): width, height, posX, posY, context, canvas, image, drawDino, moveDino, collisionVerification
*/

class Object {
  constructor(canvas, context, posX, posY, width, height) {
    this.canvas = canvas;
    this.context = context;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
  }
}

class Runway extends Object {
  constructor(canvas, context, posX, posY, width, height, image) {
    super(canvas, context, posX, posY, width, height);
    this.image = image;
    // this.speed = speed;
  }
  drawRunway() {
    this.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
  }

  moveRunway(speed){
    this.posX += speed;
  }
}

class Cactus extends Object {
  constructor(canvas, context, posX, posY, width, height, image) {
    super(canvas, context, posX, posY, width, height);
    this.image = image;
  }
}

class Dino extends Object {
  constructor(canvas, context, posX, posY, width, height, image) {
    super(canvas, context, posX, posY, width, height);
    this.image = image;
  }
}