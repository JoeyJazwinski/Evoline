function input() {
  document.addEventListener("click", (event) => {
    var mousex = event.clientX;
    var mousey = event.clientY;
    console.log("MouseX: " + mousex + "\nMouseY: " + mousey);
    popACapInYoCrackerAss();
  });
  document.addEventListener("keydown", function (e) {
    switch (e.key) {
      case "w":
        Player.yVel = -Player.speed;
        break;
      case "s":
        Player.yVel = Player.speed;
        break;
      case "a":
        Player.xVel = -Player.speed;
        break;
      case "d":
        Player.xVel = Player.speed;
        break;
    }
  });
  document.addEventListener("keyup", function (e) {
    switch (e.key) {
      case "w":
        Player.yVel = 0;
        break;
      case "s":
        Player.yVel = 0;
        break;
      case "a":
        Player.xVel = 0;
        break;
      case "d":
        Player.xVel = 0;
        break;
    }
  });
}
