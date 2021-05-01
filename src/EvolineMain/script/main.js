var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var canvasColor = "green";

canvas.setAttribute("id", "canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "green";
document.body.appendChild(canvas);

var resoluton = {
  width: screen.width,
  height: screen.height,
};

var Player = {
  PLayerLevel: 0,
  setPlayerLevel: function (level) {
    this.PLayerLevel = level;
  },
  getPlayerLevel: function () {
    return this.PLayerLevel;
  },

  xVel: 0,
  yVel: 0,
  width: 50,
  height: 50,
  speed: 4,
  x: resoluton.width / 2 - 25, // width / 2
  y: resoluton.height / 2 - 25, // height / 2
};

function update() {
  requestAnimationFrame(update);

  if (Player.x >= window.innerWidth - Player.width) {
    Player.x = window.innerWidth - Player.width;
  } else if (Player.x <= 0) {
    Player.x = 0;
  }

  if (Player.y > window.innnerHeight - Player.height) {
    Player.y = window.innerHeight - Player.height;
  } else if (Player.y <= 0) {
    Player.y = 0;
  }

  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  Creature.summon(240, 280);
  
  ctx.fillStyle = "black";
  ctx.fillRect(Player.x, Player.y, Player.width, Player.height);
  Player.y += Player.yVel;
  Player.x += Player.xVel;
  checkCollision(Player, Creature);
}
input();
update();
