onload = () => {
  CONTAINER = document.getElementById('con');
  CANVAS = document.getElementById('can');
  CANVAS.width = CONFIG.width;
  CANVAS.height = CONFIG.height;

  CTX = CANVAS.getContext('2d');

  document.addEventListener(
    "keyup",
    (e) => {
      let key = e.key ;

      if(SCREEN == 'menu') {
        if (key == 'Enter') {
          SCREEN = 'game';
          GAME = new Game();
        }
      }
      if(SCREEN == 'game') {
        if ((key == 'e') || (key == 'E')) {
          PLAYER.toggleUse(false);
        }
      }
      if(SCREEN == 'ending') {
        if (key == 'Enter') {
          resetWorld();
        }
      }
    },
    false
  );
  document.addEventListener(
    "keydown",
    (e) => {
      let key = e.key ;
  
      if(SCREEN == 'game') {
        if ((key == 'e') || (key == 'E')) {
          PLAYER.toggleUse(true);
        }
        if (key == 'ArrowRight') {
          if(!PLAYER.direction) {
            PLAYER.direction = 1;
            if(e.repeat) {
              PLAYER.moveForward(15);
            }
          } else {
            PLAYER.moveForward(15);
          }
        }
        if (key == 'ArrowLeft') {
          if(PLAYER.direction) {
            PLAYER.direction = 0;
            if(e.repeat) {
              PLAYER.moveBackwards(15);
            }
          } else {
            PLAYER.moveBackwards(15);
          }
        }
      }
    },
    false
  );

  resetWorld();

  animationFrame();
};

clearCanvas = () => {
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
};

resetWorld = () => {
  clearCanvas();
  PLAYER = new Player();
  MENU = new Menu();
  if(GAME) {
    GAME.destroyAnimationInterval();
  }
  SCREEN = 'menu';
}

animationFrame = () => {
  if(SCREEN === 'game') {
    GAME.render();
  }

  requestAnimationFrame(animationFrame);
}