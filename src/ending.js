class Ending{
    constructor(ending) {
        this.ending = ending;
        this.render()
    }

    render() {
        let textToWrite,textPositionHorizontal;
        SCREEN = 'ending';
        clearCanvas();
        //Drawing the background
        CTX.fillStyle = CONFIG.dark;
        CTX.fillRect(0, 0, CANVAS.width, CANVAS.height);
        //Main text setup
        CTX.fillStyle = CONFIG.pink;
        CTX.font = "bold 2rem sans-serif";
        if(this.ending) {
            //Success screen text
            textToWrite = "Mission Successfully Completed";
            textPositionHorizontal = (CANVAS.width / 2) - (CTX.measureText(textToWrite).width / 2);
            CTX.fillText(textToWrite, textPositionHorizontal, 94);
            //Initialize drawing area
            let x = 80;
            let y = 100;

            CTX.save();
            CTX.scale(2, 2);
            //Success screen alien and human
            //Human
            //arm-back
            CTX.fillStyle = CONFIG.skin;
            CTX.beginPath();
            CTX.moveTo(85 + x,90 + y);
            CTX.bezierCurveTo(85 + x,90 + y, 90 + x,80 + y, 95 + x,90 + y);
            CTX.bezierCurveTo(95 + x,90 + y, 110 + x,105 + y, 105 + x,120 + y);
            CTX.bezierCurveTo(105 + x,120 + y, 90 + x,105 + y, 85 + x,90 + y);
            CTX.fill();
            CTX.closePath();
            //shirt on arm back
            CTX.fillStyle = CONFIG.blue;
            CTX.beginPath();
            CTX.moveTo(85 + x,90 + y);
            CTX.bezierCurveTo(85 + x,90 + y, 90 + x,80 + y, 95 + x,90 + y);
            CTX.lineTo(85 + x,100 + y);
            CTX.bezierCurveTo(85 + x,100 + y, 80 + x,95 + y, 85 + x,90 + y);
            CTX.fill();
            CTX.closePath();

            //hair base
            CTX.fillStyle = CONFIG.darkest;
            CTX.beginPath();
            CTX.arc(70 + x, 55 + y, 30, 0, 2 * Math.PI);
            CTX.fill();
            CTX.closePath();
            //hair back
            CTX.fillRect(40 + x,55 + y, 60, 30);

            //body
            CTX.fillStyle = CONFIG.blue;
            CTX.beginPath();
            CTX.moveTo(55 + x,90 + y);
            CTX.bezierCurveTo(55 + x,90 + y, 75 + x,70 + y, 90 + x,90 + y);
            CTX.bezierCurveTo(90 + x,90 + y, 100 + x,120 + y ,90 + x,130 + y);
            CTX.lineTo(55 + x,130 + y);
            CTX.bezierCurveTo(55 + x,130 + y, 45 + x,120 + y, 55 + x,90 + y);
            CTX.fill();
            CTX.closePath();

            //head
            CTX.fillStyle = CONFIG.skin;
            CTX.beginPath();
            CTX.arc(70 + x, 55 + y, 30, 0, Math.PI);
            CTX.fill();
            CTX.closePath();

            //hair front
            CTX.fillStyle = CONFIG.darkest;
            CTX.beginPath();
            CTX.moveTo(40 + x,55 + y);
            CTX.lineTo(50 + x, 55 + y);
            CTX.lineTo(50 + x,70 + y);
            CTX.bezierCurveTo(50 + x,70 + y, 45 + x,55 + y, 40 + x,55 + y);
            CTX.fill();
            CTX.closePath();

            //eyes
            CTX.beginPath();
            CTX.arc(60 + x, 60 + y, 4, 0, 2 * Math.PI);
            CTX.fill();

            CTX.beginPath();
            CTX.arc(90 + x, 60 + y, 4, 0, 2 * Math.PI);
            CTX.fill();

            //mouth
            CTX.strokeStyle = CONFIG.darkest;
            CTX.lineWidth = 3;
            CTX.beginPath();
            CTX.moveTo(70 + x,65 + y);
            CTX.bezierCurveTo(70 + x,65 + y, 80 + x,70 + y, 85 + x,65 + y);
            CTX.stroke();
            CTX.closePath();

            //arm-front
            CTX.fillStyle = CONFIG.skin;
            CTX.beginPath();
            CTX.moveTo(55 + x,90 + y);
            CTX.bezierCurveTo(55 + x,90 + y, 60 + x,80 + y, 65 + x,90 + y);
            CTX.bezierCurveTo(65 + x,90 + y, 70 + x,115 + y, 60 + x,125 + y);
            CTX.bezierCurveTo(60 + x,125 + y, 50 + x,115 + y, 55 + x,90 + y);
            CTX.fill();
            CTX.closePath();

            //shirt on arm front
            CTX.fillStyle = CONFIG.blue;
            CTX.beginPath();
            CTX.moveTo(55 + x,90 + y);
            CTX.bezierCurveTo(55 + x,90 + y, 60 + x,80 + y, 65 + x,90 + y);
            CTX.bezierCurveTo(65 + x,90 + y, 70 + x,95 + y, 60 + x,100 + y);
            CTX.lineTo(55 + x,100 + y);
            CTX.bezierCurveTo(55 + x,100 + y, 50 + x,95 + y, 55 + x,90 + y);
            CTX.fill();
            CTX.closePath();

            //Alien
            //arm-back
            CTX.fillStyle = CONFIG.green_light;
            CTX.beginPath();
            CTX.moveTo(125 + x,90 + y);
            CTX.bezierCurveTo(125 + x,90 + y, 120 + x,80 + y, 115 + x,90 + y);
            CTX.bezierCurveTo(115 + x,90 + y, 100 + x,105 + y, 105 + x,120 + y);
            CTX.bezierCurveTo(105 + x,120 + y, 125 + x,105 + y, 125 + x,90 + y);
            CTX.fill();
            CTX.closePath();

            //body
            CTX.fillStyle = CONFIG.green;
            CTX.beginPath();
            CTX.moveTo(155 + x,90 + y);
            CTX.bezierCurveTo(155 + x,90 + y, 135 + x,70 + y, 120 + x,90 + y);
            CTX.bezierCurveTo(120 + x,90 + y, 110 + x,110 + y ,120 + x,130 + y);
            CTX.lineTo(155 + x,130 + y);
            CTX.bezierCurveTo(155 + x,130 + y, 165 + x,110 + y, 155 + x,90 + y);
            CTX.fill();
            CTX.closePath();

            //antenna circles
            CTX.beginPath();
            CTX.arc(140 + x, 10 + y, 8, 0, 2 * Math.PI);
            CTX.fill();
            CTX.closePath();

            CTX.beginPath();
            CTX.arc(170 + x, 10 + y, 8, 0, 2 * Math.PI);
            CTX.fill();
            CTX.closePath();

            //head
            CTX.beginPath();
            CTX.arc(140 + x, 55 + y, 30, 0, 2 * Math.PI);
            CTX.fill();
            CTX.closePath();

            //antennas
            CTX.strokeStyle = CONFIG.green;
            CTX.lineWidth = 5;
            CTX.beginPath();
            CTX.moveTo(140 + x, 10 + y);
            CTX.lineTo(130 + x, 30 + y);
            CTX.stroke(); 
            CTX.closePath();

            CTX.beginPath();
            CTX.moveTo(170 + x, 10 + y);
            CTX.lineTo(155 + x, 35 + y);
            CTX.stroke();
            CTX.closePath();

            //eyes
            CTX.fillStyle = CONFIG.darkest;
            CTX.beginPath();
            CTX.arc(150 + x, 60 + y, 4, 0, 2 * Math.PI);
            CTX.fill();

            CTX.beginPath();
            CTX.arc(120 + x, 60 + y, 4, 0, 2 * Math.PI);
            CTX.fill();

            //mouth
            CTX.strokeStyle = CONFIG.darkest;
            CTX.lineWidth = 3;
            CTX.beginPath();
            CTX.moveTo(125 + x,65 + y);
            CTX.bezierCurveTo(125 + x,65 + y, 130 + x,70 + y, 140 + x,65 + y);
            CTX.stroke();
            CTX.closePath();  

            //arm-front
            CTX.fillStyle = CONFIG.green_light;
            CTX.beginPath();
            CTX.moveTo(155 + x,90 + y);
            CTX.bezierCurveTo(155 + x,90 + y, 150 + x,80 + y, 145 + x,90 + y);
            CTX.bezierCurveTo(145 + x,90 + y, 140 + x,115 + y, 150 + x,125 + y);
            CTX.bezierCurveTo(150 + x,125 + y, 160 + x,115 + y, 155 + x,90 + y);
            CTX.fill();
            CTX.closePath();

            CTX.restore();
        }else{
            //Fail screen text
            textToWrite = "Mission failed";
            textPositionHorizontal = (CANVAS.width / 2) - (CTX.measureText(textToWrite).width / 2);
            CTX.fillText(textToWrite, textPositionHorizontal, 94);

            //Initialise drawing area
            let x = ((CANVAS.width/2) - (39 * 2)) / 2;
            let y = 70;
            CTX.save();
            CTX.scale(2, 2);

            //Fail screen alien
            CTX.strokeStyle = CONFIG.green;
            CTX.fillStyle = CONFIG.green;
            //antenna circles
            CTX.beginPath();
            CTX.arc(10 + x, 80 + y, 8, 0, 2 * Math.PI);
            CTX.fill();
            CTX.closePath();

            CTX.beginPath();
            CTX.arc(70 + x, 80 + y, 8, 0, 2 * Math.PI);
            CTX.fill();
            CTX.closePath();

            //head
            CTX.beginPath();
            CTX.arc(40 + x, 55 + y, 30, 0, 2 * Math.PI);
            CTX.fill();
            CTX.closePath();

            //antennas
            CTX.lineWidth = 5;
            CTX.beginPath();
            CTX.moveTo(10 + x, 80 + y);
            CTX.lineTo(25 + x, 35 + y);
            CTX.stroke(); 
            CTX.closePath();

            CTX.beginPath();
            CTX.moveTo(70 + x, 80 + y);
            CTX.lineTo(50 + x, 30 + y);
            CTX.stroke();
            CTX.closePath();

            //eyes
            CTX.fillStyle = CONFIG.darkest;
            CTX.beginPath();
            CTX.arc(25 + x, 60 + y, 4, 0, 2 * Math.PI);
            CTX.fill();
            CTX.closePath();

            CTX.beginPath();
            CTX.arc(55 + x, 60 + y, 4, 0, 2 * Math.PI);
            CTX.fill();
            CTX.closePath();

            CTX.strokeStyle = CONFIG.tears;
            CTX.beginPath();
            CTX.moveTo(25 + x, 65 + y);
            CTX.lineTo(25 + x, 70 + y);
            CTX.stroke();
            CTX.closePath();

            CTX.beginPath();
            CTX.moveTo(55 + x, 65 + y);
            CTX.lineTo(55 + x, 70 + y);
            CTX.stroke();
            CTX.closePath();

            //mouth
            CTX.strokeStyle = CONFIG.darkest;
            CTX.lineWidth = 3;
            CTX.beginPath();
            CTX.moveTo(32.5 + x,70 + y);
            CTX.bezierCurveTo(32.5 + x,70 + y, 40 + x,50 + y, 47.5 + x,70 + y);
            CTX.stroke();
            CTX.closePath();

            //body
            CTX.fillStyle = CONFIG.green;
            CTX.beginPath();
            CTX.moveTo(20 + x,80 + y);
            CTX.bezierCurveTo(20 + x,80 + y, 40 + x,70 + y, 60 + x,80 + y);
            CTX.bezierCurveTo(60 + x,80 + y, 70 + x,100 + y, 60 + x,110 + y);
            CTX.lineTo(20+x,110+y);
            CTX.bezierCurveTo(20 + x,110 + y, 10 + x,100 + y, 20+ x,80 + y);
            CTX.fill();

            //hands
            CTX.fillStyle = CONFIG.green_light;
            CTX.beginPath();
            CTX.moveTo(22 + x,80 + y);
            CTX.bezierCurveTo(22 + x,80 + y, 25 + x,70 + y, 30 + x,80 + y);
            CTX.bezierCurveTo(30 + x,80 + y, 35 + x,90 + y, 30 + x,100 + y);
            CTX.bezierCurveTo(30 + x,100 + y, 25 + x,110 + y, 22 + x,100 + y);
            CTX.bezierCurveTo(22 + x,100 + y, 19 + x,90 + y, 22 + x,80 + y);
            CTX.fill();
            CTX.closePath();
            CTX.beginPath();
            CTX.moveTo(52 + x,80 + y);
            CTX.bezierCurveTo(52 + x,80 + y, 55 + x,70 + y, 60 + x,80 + y);
            CTX.bezierCurveTo(60 + x,80 + y, 65 + x,90 + y, 60 + x,100 + y);
            CTX.bezierCurveTo(60 + x,100 + y, 55 + x,110 + y, 52 + x,100 + y);
            CTX.bezierCurveTo(52 + x,100 + y, 49 + x,90 + y, 52 + x,80 + y);
            CTX.fill();
            CTX.closePath();
            
            CTX.restore();
        }
        CTX.font = "bold 1rem sans-serif";
        textToWrite = "THANK YOU FOR PLAYING";
        textPositionHorizontal = (CANVAS.width / 2) - (CTX.measureText(textToWrite).width / 2);
        CTX.fillText(textToWrite, textPositionHorizontal, CANVAS.height - 100);
        CTX.fillStyle = 'white';
        textToWrite = "Press ENTER to return to the menu";
        textPositionHorizontal = (CANVAS.width / 2) - (CTX.measureText(textToWrite).width / 2);
        CTX.fillText(textToWrite, textPositionHorizontal, CANVAS.height - 50);
    }
}