var Creature = {
  width: 40,
  height: 40,
  x: 0,
  y: 0,
  summon: function (posX, posY) {
    this.x = posX;
    this.y = posY;
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "black";
  }
}
