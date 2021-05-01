function checkCollision(obj1, obj2) {
  let leftObject = obj1.x > obj2.x ? obj2 : obj1;
  let rightObject = obj1.x <= obj2.x ? obj2 : obj1;
  let upObject = obj1.y > obj2.y ? obj2 : obj1;
  let downObject = obj1.y <= obj2.y ? obj2 : obj1;

  if (
    upObject.y + upObject.height >= downObject.y &&
    leftObject.x + leftObject.width >= rightObject.x
  ) {
    console.log("Colliding Bing Bong");
  }
}
