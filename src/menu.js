class Menu{
    constructor() {
        this.render()
    }

    render() {
        let textToWrite, textPositionHorizontal, textPositionHorizontalEnd;
        //Drawing the title
        CTX.fillStyle = CONFIG.pink;
        CTX.strokeStyle = "white";
        CTX.font = "bold 4rem sans-serif";
        textToWrite = "INVITATION";
        textPositionHorizontal = (CANVAS.width / 2) - (CTX.measureText(textToWrite).width / 2);
        textPositionHorizontalEnd = (CANVAS.width / 2) + (CTX.measureText(textToWrite).width / 2);
        CTX.lineWidth = 10;
        CTX.strokeText(textToWrite, textPositionHorizontal, 120);
        CTX.fillText(textToWrite, textPositionHorizontal, 120);

        //Drawing the main character's head as title decoration
        CTX.lineWidth = 15;
        CTX.beginPath();
        CTX.moveTo(80, 50);
        CTX.lineTo(95, 75);
        CTX.stroke(); 
        CTX.closePath();
        CTX.beginPath();
        CTX.moveTo(110, 50);
        CTX.lineTo(120, 70);
        CTX.stroke(); 
        CTX.closePath();
        CTX.fillStyle = CONFIG.green;
        CTX.beginPath();
        CTX.arc(110, 95, 30, 0, 2 * Math.PI);
        CTX.stroke();
        CTX.fill();
        CTX.closePath();
        CTX.beginPath();
        CTX.arc(80, 50, 8, 0, 2 * Math.PI);
        CTX.stroke();
        CTX.fill();
        CTX.closePath();
        CTX.beginPath();
        CTX.arc(110, 50, 8, 0, 2 * Math.PI);
        CTX.stroke();
        CTX.fill();
        CTX.closePath();
        CTX.strokeStyle = CONFIG.green;
        CTX.lineWidth = 5;
        CTX.beginPath();
        CTX.moveTo(80, 50);
        CTX.lineTo(95, 75);
        CTX.stroke(); 
        CTX.closePath();
        CTX.beginPath();
        CTX.moveTo(110, 50);
        CTX.lineTo(120, 70);
        CTX.stroke(); 
        CTX.closePath();
        CTX.fillStyle = CONFIG.darkest;
        CTX.beginPath();
        CTX.arc(100, 100, 4, 0, 2 * Math.PI);
        CTX.fill();
        CTX.beginPath();
        CTX.arc(130, 100, 4, 0, 2 * Math.PI);
        CTX.fill();
        CTX.strokeStyle = CONFIG.darkest;
        CTX.lineWidth = 3;
        CTX.beginPath();
        CTX.moveTo(110,105);
        CTX.bezierCurveTo(110,105, 120,110, 125,105);
        CTX.stroke();
        CTX.closePath();
        //Drawing the controls instructions
        CTX.fillStyle = CONFIG.blue;
        CTX.font = "1.5rem sans-serif";
        textToWrite = '⇦   move left';
        CTX.fillText(textToWrite, (CANVAS.width/2) - (CTX.measureText(textToWrite).width/2), (CANVAS.height/3) + 125);
        //console.log(CTX.measureText(textToWrite).width);
        textToWrite = '⇨   move right';
        CTX.fillText(textToWrite, (CANVAS.width/2) - (CTX.measureText(textToWrite).width/2), (CANVAS.height/3) + 165);
        textToWrite = 'E   use';
        CTX.fillText(textToWrite, (CANVAS.width/2) - (CTX.measureText(textToWrite).width/2), (CANVAS.height/3) + 205);

        CTX.fillStyle = "white";
        CTX.font = "bold 1rem sans-serif";
        textToWrite = "Press ENTER to start";
        textPositionHorizontal = (CANVAS.width / 2) - (CTX.measureText(textToWrite).width / 2);
        CTX.fillText(textToWrite, textPositionHorizontal, CANVAS.height - 50);
    }
}