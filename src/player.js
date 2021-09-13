class Player{

    constructor() {
        this.lives = 3;
        this.width = 70;
        this.height = 153;
        this.x = 0;
        this.y = (CANVAS.height - 105) - this.height;
        this.minX = 0;
        this.maxX = CANVAS.width - 70;
        this.minY = (CANVAS.height - 105) - this.height;
        this.maxY = CANVAS.height - this.height;
        this.direction = 1;
    }

    render() {
        this.drawAlien(this.direction, this.x, this.y);
    }
  
    moveForward(step) {
        let nextX = this.x + step;
        if(nextX < this.maxX) {
            this.x += step;
        } else {
            this.x = this.maxX;
        }
    }
    moveBackwards(step) {
        let nextX = this.x - step;
        if(nextX > this.minX) {
            this.x -= step;
        } else {
            this.x = this.minX;
        }
    }
    drawAlien(direction, x, y) {
        if( direction ) {
            //arm-back
            CTX.fillStyle = '#B9F6CA';
            CTX.beginPath();
            CTX.moveTo(55 + x,90 + y);
            CTX.bezierCurveTo(55 + x,90 + y, 60 + x,80 + y, 65 + x,90 + y);
            CTX.bezierCurveTo(65 + x,90 + y, 70 + x,115 + y, 60 + x,125 + y);
            CTX.bezierCurveTo(0 + x,125 + y, 50 + x,115 + y, 55 + x,90 + y);
            CTX.fill();
            CTX.closePath();

            //body
            CTX.fillStyle = '#69F0AE';
            CTX.beginPath();
            CTX.moveTo(25 + x,90 + y);
            CTX.bezierCurveTo(25 + x,90 + y, 45 + x,70 + y, 60 + x,90 + y);
            CTX.bezierCurveTo(60 + x,90 + y, 70 + x,120 + y ,60 + x,150 + y);
            CTX.bezierCurveTo(60 + x,150 + y, 55 + x,155 + y, 50 + x,150 + y);
            CTX.bezierCurveTo(50 + x,150 + y, 45 + x,100 + y, 40 + x,150 + y);
            CTX.bezierCurveTo(40 + x,150 + y, 35 + x,155 + y, 30 + x,150 + y);
            CTX.bezierCurveTo(30 + x,150 + y, 15 + x,120 + y, 25 + x,90 + y);
            CTX.fill();
            CTX.closePath();

            //antenna circles
            CTX.beginPath();
            CTX.arc(10 + x, 10 + y, 8, 0, 2 * Math.PI);
            CTX.fill();
            CTX.closePath();

            CTX.beginPath();
            CTX.arc(40 + x, 10 + y, 8, 0, 2 * Math.PI);
            CTX.fill();
            CTX.closePath();

            //head
            CTX.beginPath();
            CTX.arc(40 + x, 55 + y, 30, 0, 2 * Math.PI);
            CTX.fill();
            CTX.closePath();

            //antennas
            CTX.strokeStyle = "#69F0AE";
            CTX.lineWidth = 5;
            CTX.beginPath();
            CTX.moveTo(10 + x, 10 + y);
            CTX.lineTo(25 + x, 35 + y);
            CTX.stroke(); 
            CTX.closePath();

            CTX.beginPath();
            CTX.moveTo(40 + x, 10 + y);
            CTX.lineTo(50 + x, 30 + y);
            CTX.stroke();
            CTX.closePath();

            //eyes
            CTX.fillStyle = '#212121';
            CTX.beginPath();
            CTX.arc(30 + x, 60 + y, 4, 0, 2 * Math.PI);
            CTX.fill();

            CTX.beginPath();
            CTX.arc(60 + x, 60 + y, 4, 0, 2 * Math.PI);
            CTX.fill();

            //mouth
            CTX.strokeStyle = "#212121";
            CTX.lineWidth = 3;
            CTX.beginPath();
            CTX.moveTo(40 + x,65 + y);
            CTX.bezierCurveTo(40 + x,65 + y, 50 + x,70 + y, 55 + x,65 + y);
            CTX.stroke();
            CTX.closePath();

            //arm-front
            CTX.fillStyle = '#B9F6CA';
            CTX.beginPath();
            CTX.moveTo(25 + x,90 + y);
            CTX.bezierCurveTo(25 + x,90 + y, 30 + x,80 + y, 35 + x,90 + y);
            CTX.bezierCurveTo(35 + x,90 + y, 40 + x,115 + y, 30 + x,125 + y);
            CTX.bezierCurveTo(30 + x,125 + y, 20 + x,115 + y, 25 + x,90 + y);
            CTX.fill();
            CTX.closePath();

        } else {
            //arm-back
            CTX.fillStyle = '#B9F6CA';
            CTX.beginPath();
            CTX.moveTo(15 + x,90 + y);
            CTX.bezierCurveTo(15 + x,90 + y, 10 + x,80 + y, 5 + x,90 + y);
            CTX.bezierCurveTo(5 + x,90 + y, 0 + x,115 + y, 10 + x,125 + y);
            CTX.bezierCurveTo(10 + x,125 + y, 20 + x,115 + y, 15 + x,90 + y);
            CTX.fill();
            CTX.closePath();

            //body
            CTX.fillStyle = '#69F0AE';
            CTX.beginPath();
            CTX.moveTo(45 + x,90 + y);
            CTX.bezierCurveTo(45 + x,90 + y, 25 + x,70 + y, 10 + x,90 + y);
            CTX.bezierCurveTo(10 + x,90 + y, 0 + x,120 + y ,10 + x,150 + y);
            CTX.bezierCurveTo(10 + x,150 + y, 15 + x,155 + y, 20 + x,150 + y);
            CTX.bezierCurveTo(20 + x,150 + y, 25 + x,100 + y, 30 + x,150 + y);
            CTX.bezierCurveTo(30 + x,150 + y, 35 + x,155 + y, 40 + x,150 + y);
            CTX.bezierCurveTo(40 + x,150 + y, 55 + x,120 + y, 45 + x,90 + y);
            CTX.fill();
            CTX.closePath();

            //antenna circles
            CTX.beginPath();
            CTX.arc(30 + x, 10 + y, 8, 0, 2 * Math.PI);
            CTX.fill();
            CTX.closePath();

            CTX.beginPath();
            CTX.arc(60 + x, 10 + y, 8, 0, 2 * Math.PI);
            CTX.fill();
            CTX.closePath();

            //head
            CTX.beginPath();
            CTX.arc(30 + x, 55 + y, 30, 0, 2 * Math.PI);
            CTX.fill();
            CTX.closePath();

            //antennas
            CTX.strokeStyle = "#69F0AE";
            CTX.lineWidth = 5;
            CTX.beginPath();
            CTX.moveTo(30 + x, 10 + y);
            CTX.lineTo(20 + x, 30 + y);
            CTX.stroke(); 
            CTX.closePath();

            CTX.beginPath();
            CTX.moveTo(60 + x, 10 + y);
            CTX.lineTo(45 + x, 35 + y);
            CTX.stroke();
            CTX.closePath();

            //eyes
            CTX.fillStyle = '#212121';
            CTX.beginPath();
            CTX.arc(40 + x, 60 + y, 4, 0, 2 * Math.PI);
            CTX.fill();

            CTX.beginPath();
            CTX.arc(10 + x, 60 + y, 4, 0, 2 * Math.PI);
            CTX.fill();

            //mouth
            CTX.strokeStyle = "#212121";
            CTX.lineWidth = 3;
            CTX.beginPath();
            CTX.moveTo(15 + x,65 + y);
            CTX.bezierCurveTo(15 + x,65 + y, 20 + x,70 + y, 30 + x,65 + y);
            CTX.stroke();
            CTX.closePath();

            //arm-front
            CTX.fillStyle = '#B9F6CA';
            CTX.beginPath();
            CTX.moveTo(45 + x,90 + y);
            CTX.bezierCurveTo(45 + x,90 + y, 40 + x,80 + y, 35 + x,90 + y);
            CTX.bezierCurveTo(35 + x,90 + y, 30 + x,115 + y, 40 + x,125 + y);
            CTX.bezierCurveTo(40 + x,125 + y, 50 + x,115 + y, 45 + x,90 + y);
            CTX.fill();
            CTX.closePath();
        }
    }
    toggleUse(state) {
        if(state) {
            //animate use

            //testing successful "use" that moves the game to the next stage
            if(INFOBOX.signalIndex < INFOBOX.signals.length) {
                INFOBOX.signalIndex++;
            }
            if(GAME.level < 4) {
                GAME.level++;
            }
            
        }else{
            //stop animation
        }
    }
}