function init() {
  'use strict'
  function select(a) {
    return document.querySelector(a);
  }
  var randomNum = Math.floor((Math.random() * 24) + 1),
      triangle = select('.triangle img'),
      circle = select('.circle img'),
      cross = select('.cross img'),
      box = select('.box img'),
      link = 'http://kapilnemo.free.fr/codepen/playstation-loading/',
      order = [
        [1,2,3,4],
        [1,2,4,3],
        [1,3,2,4],
        [1,3,4,2],
        [1,4,2,3],
        [1,4,3,2],
        [2,1,3,4],
        [2,1,4,3],
        [2,3,1,4],
        [2,3,4,1],
        [2,4,1,3],
        [2,4,3,1],
        [3,1,2,4],
        [3,1,4,2],
        [3,2,1,4],
        [3,2,4,1],
        [3,4,1,2],
        [3,4,2,1],
        [4,1,2,3],
        [4,1,3,2],
        [4,2,1,3],
        [4,2,3,1],
        [4,3,1,2],
        [4,3,2,1]
      ];

  triangle.src = link + order[randomNum][0] + ".png";
  circle.src = link + order[randomNum][1] + ".png";
  cross.src = link + order[randomNum][2] + ".png";
  box.src = link + order[randomNum][3] + ".png";


}
window.setInterval(init, 2000);