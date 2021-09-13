class Game{
    constructor() {
        this.level = 1;
        LAB = new Lab();
        INFOBOX = new Infobox();
        this.initalizeAnimationInterval();
    }

    render() {
        clearCanvas();
        LAB.render();
        INFOBOX.render();
        PLAYER.render();
        if(this.level === 4) {
            setTimeout(() => {
                ENDING = new Ending(true);
                return;
            }, 1000);
        }
    }

    initalizeAnimationInterval() {
        this.animationInterval = setInterval( () => {
            this.startFlickerThree();
            this.startFlickerTwo();
        }, 500);
    }

    destroyAnimationInterval() {
        clearInterval(this.animationInterval);
    }

    startFlickerThree() {
        if(COUNTER_FLICKER_THREE < 3) {
            COUNTER_FLICKER_THREE++;
        } else {
            COUNTER_FLICKER_THREE = 1;
        }
    }

    startFlickerTwo() {
        if(COUNTER_FLICKER_TWO) {
            COUNTER_FLICKER_TWO = false;
        }else{
            COUNTER_FLICKER_TWO = true;
        }
    }
}