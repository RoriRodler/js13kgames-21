class Infobox{
    constructor() {
        this.signals = ['', 'terrible', 'bad', 'weak', 'good', 'perfect'];
        this.signalIndex = 1;
        this.render();
    }

    render() {
        CTX.fillStyle = CONFIG.darkest;
        CTX.strokeStyle = CONFIG.green_signal;
        CTX.fillRect(0, CANVAS.height - 100, CANVAS.width, 100);

        let y = CANVAS.height - 55;
        let ampChange = true;
        CTX.lineWidth = 1;
        CTX.setLineDash([10, 10]);

        switch (this.signals[this.signalIndex]) {
            case 'terrible':
                if(COUNTER_FLICKER_TWO) {
                    CTX.beginPath();
                    CTX.moveTo(0, CANVAS.height - 50);
                    CTX.lineTo(CANVAS.width, CANVAS.height - 50);
                    CTX.stroke();
                    CTX.closePath();
                    CTX.setLineDash([]);
                }
                break;
            case 'bad':
                CTX.beginPath();
                CTX.moveTo(0, CANVAS.height - 55);
                if(COUNTER_FLICKER_TWO) {
                    for (let index = 0; index <= CANVAS.width; index += (CANVAS.width / 10)) {
                        if(ampChange) {
                            CTX.bezierCurveTo(index,y, index + 37.5,y - 10, index + 75,y);
                            ampChange = false;
                        } else {
                            CTX.bezierCurveTo(index,y, index + 37.5,y + 10, index + 75,y);
                            ampChange = true;
                        }
                    }
                    CTX.stroke();
                    CTX.closePath();
                } else {
                    for (let index = 0; index <= CANVAS.width; index += (CANVAS.width / 10)) {
                        if(ampChange) {
                            CTX.bezierCurveTo(index,y, index + 37.5,y + 10, index + 75,y);
                            ampChange = false;
                        } else {
                            CTX.bezierCurveTo(index,y, index + 37.5,y - 10, index + 75,y);
                            ampChange = true;
                        }
                    }
                    CTX.stroke();
                    CTX.closePath();
                }
                break;
            case 'weak':
                CTX.beginPath();
                CTX.moveTo(0, CANVAS.height - 55);
                if(COUNTER_FLICKER_TWO) {
                    for (let index = 0; index <= CANVAS.width; index += (CANVAS.width / 10)) {
                        if(ampChange) {
                            CTX.bezierCurveTo(index,y, index + 37.5,y - 20, index + 75,y);
                            ampChange = false;
                        } else {
                            CTX.bezierCurveTo(index,y, index + 37.5,y + 20, index + 75,y);
                            ampChange = true;
                        }
                    }
                    CTX.stroke();
                    CTX.closePath();
                } else {
                    for (let index = 0; index <= CANVAS.width; index += (CANVAS.width / 10)) {
                        if(ampChange) {
                            CTX.bezierCurveTo(index,y, index + 37.5,y + 20, index + 75,y);
                            ampChange = false;
                        } else {
                            CTX.bezierCurveTo(index,y, index + 37.5,y - 20, index + 75,y);
                            ampChange = true;
                        }
                    }
                    CTX.stroke();
                    CTX.closePath();
                }
                break;
            case 'good':
                CTX.beginPath();
                CTX.moveTo(0, CANVAS.height - 55);
                if(COUNTER_FLICKER_TWO) {
                    for (let index = 0; index <= CANVAS.width; index += (CANVAS.width / 10)) {
                        if(ampChange) {
                            CTX.bezierCurveTo(index,y, index + 37.5,y - 30, index + 75,y);
                            ampChange = false;
                        } else {
                            CTX.bezierCurveTo(index,y, index + 37.5,y + 30, index + 75,y);
                            ampChange = true;
                        }
                    }
                    CTX.stroke();
                    CTX.closePath();
                } else {
                    for (let index = 0; index <= CANVAS.width; index += (CANVAS.width / 10)) {
                        if(ampChange) {
                            CTX.bezierCurveTo(index,y, index + 37.5,y + 30, index + 75,y);
                            ampChange = false;
                        } else {
                            CTX.bezierCurveTo(index,y, index + 37.5,y - 30, index + 75,y);
                            ampChange = true;
                        }
                    }
                    CTX.stroke();
                    CTX.closePath();
                }
                break;
            case 'perfect':
                CTX.beginPath();
                CTX.moveTo(0, CANVAS.height - 55);
                if(COUNTER_FLICKER_TWO) {
                    for (let index = 0; index <= CANVAS.width; index += (CANVAS.width / 10)) {
                        if(ampChange) {
                            CTX.bezierCurveTo(index,y, index + 37.5,y - 40, index + 75,y);
                            ampChange = false;
                        } else {
                            CTX.bezierCurveTo(index,y, index + 37.5,y + 40, index + 75,y);
                            ampChange = true;
                        }
                    }
                    CTX.stroke();
                    CTX.closePath();
                } else {
                    for (let index = 0; index <= CANVAS.width; index += (CANVAS.width / 10)) {
                        if(ampChange) {
                            CTX.bezierCurveTo(index,y, index + 37.5,y + 40, index + 75,y);
                            ampChange = false;
                        } else {
                            CTX.bezierCurveTo(index,y, index + 37.5,y - 40, index + 75,y);
                            ampChange = true;
                        }
                    }
                    CTX.stroke();
                    CTX.closePath();
                }
                break;
            default:
                break;
        }
        CTX.setLineDash([0, 0]);
    }
}