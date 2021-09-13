class Lab{
    constructor() {
        this.starColors = ['white', '#F4FF81', '#80D8FF'];
        this.universe = [];
        this.createUniverse();

        this.radarMinX = (CANVAS.width/4) + 5;
        this.radarMaxX = (CANVAS.width - CANVAS.width/4) - 5;
        this.radarMinY = 55;
        this.radarMaxYVertical = 245;
        this.radarMaxYHorizontal = 195;
        this.radarVerticalStart = {x: this.radarMinX, y: this.radarMinY};
        this.radarVerticalStop = {x: this.radarMinX, y: this.radarMaxYVertical};
        this.radarHorizontalStart = {x: this.radarMinX, y: this.radarMinY};
        this.radarHorizontalStop = {x: this.radarMaxX, y: this.radarMinY};
        this.radarMoved = false;
    }


    render() {
        //background
        CTX.fillStyle = "#757575";
        CTX.fillRect(0, 0, CANVAS.width, CANVAS.height);
        //navigation system
        CTX.fillStyle = CONFIG.darkest;
        CTX.fillRect(CANVAS.width/4, 50, CANVAS.width/2, 200);
        //workstation left
        CTX.fillStyle = CONFIG.tears;
        CTX.fillRect((CANVAS.width/2) - 25, CANVAS.height-150, 50, 150);
        //walls
        CTX.fillStyle = "#424242";
        CTX.fillRect(0, 0, 10, CANVAS.height - 105);
        CTX.fillRect(CANVAS.width - 10, 0, 10, CANVAS.height - 105);
        //floor
        CTX.fillStyle = "#212121";
        CTX.fillRect(0, CANVAS.height - 105, CANVAS.width, CANVAS.height - 100);

        this.renderNavigationSystem();
        this.animateRadar();
    }

    createUniverse() {
        for (let i = 0; i < 100; i++) {
            let randomColor = Math.floor(Math.random() * this.starColors.length);
            let randomStarWidth = Math.random() * (4 - 1) + 1;
            let randomStarX = Math.random() * (((CANVAS.width - CANVAS.width/4) - 6) - ((CANVAS.width/4) + 6)) + ((CANVAS.width/4) + 6);
            let randomStarY = Math.random() * (244 - 56) + 56;
            let star = {c: this.starColors[randomColor], x: randomStarX, y: randomStarY, r: randomStarWidth}
            this.universe.push(star);
        }
    }

    renderNavigationSystem() {
        //render the navigation system scene based on level
        switch (GAME.level) {
            case 1:
                //Somewhere in space
                for (let i = 0; i < this.universe.length; i++) {
                    CTX.fillStyle = this.universe[i].c;
                    CTX.beginPath();
                    CTX.arc(this.universe[i].x,this.universe[i].y,this.universe[i].r, 0, 2 * Math.PI);
                    CTX.fill();
                    CTX.closePath();
                }
                break;
            case 2:
                //Milky way
                for (let i = 0; i < this.universe.length; i++) {
                    CTX.fillStyle = this.universe[i].c;
                    CTX.beginPath();
                    CTX.arc(this.universe[i].x,this.universe[i].y,this.universe[i].r, 0, 2 * Math.PI);
                    CTX.fill();
                    CTX.closePath();
                }

                let milkyX = CANVAS.width/2;
                let milkyY = (250/2) + 25;

                CTX.fillStyle = 'white';

                let radius = 0;
                let angle = 0;
                CTX.beginPath();
                CTX.moveTo(milkyX,milkyY);
                for (var n = 0; n < 150; n++) {
                    radius += 0.6;
                    angle += (Math.PI * 1) / 45;
                    let x = milkyX + radius * Math.cos(angle);
                    let y = milkyY + radius * Math.sin(angle);
                    CTX.arc(x,y,1, 0, 2 * Math.PI);
                    CTX.fill();
                    CTX.closePath();
                }

                radius = 0;
                angle = 0;
                CTX.beginPath();
                CTX.moveTo(milkyX,milkyY);
                for (var n = 0; n < 150; n++) {
                    radius += 0.7;
                    angle += (Math.PI * 1) / 50;
                    var x = milkyX + radius * Math.cos(angle);
                    var y = milkyY + radius * Math.sin(angle);
                    CTX.arc(x,y,1, 0, 2 * Math.PI);
                    CTX.fill();
                    CTX.closePath();
                }

                radius = 0;
                angle = 0;
                CTX.beginPath();
                CTX.moveTo(milkyX,milkyY);
                for (var n = 0; n < 150; n++) {
                    radius += 0.5;
                    angle += (Math.PI * 1) / 45;
                    var x = milkyX + radius * Math.cos(angle);
                    var y = milkyY + radius * Math.sin(angle);
                    CTX.arc(x,y,1, 0, 2 * Math.PI);
                    CTX.fill();
                    CTX.closePath();
                }

                break;
            case 3:
                //Solar system
                let solarMinX = this.radarMinX - 5;
                let solarMinY = this.radarMinY - 5;
                //Drawing the sun
                CTX.fillStyle = 'orange';
                CTX.beginPath();
                CTX.moveTo(solarMinX,solarMinY);
                CTX.lineTo(solarMinX+80, solarMinY);
                CTX.bezierCurveTo(solarMinX+80,solarMinY, solarMinX+40,solarMinY+50, solarMinX,solarMinY+80);
                CTX.lineTo(solarMinX,solarMinY);
                CTX.fill();
                CTX.closePath();

                //Drawing Mercury
                CTX.fillStyle = '#607D8B';
                CTX.beginPath();
                CTX.arc(solarMinX + 90,solarMinY + 30,25, 0, 2 * Math.PI);
                CTX.fill();
                CTX.closePath();

                //Drawing Venus
                CTX.fillStyle = '#FFD740';
                CTX.beginPath();
                CTX.arc(solarMinX + 70,solarMinY + 140,30, 0, 2 * Math.PI);
                CTX.fill();
                CTX.closePath();

                //Drawing Earth
                CTX.fillStyle = '#64B5F6';
                CTX.beginPath();
                CTX.arc(solarMinX + 220,solarMinY + 110,30, 0, 2 * Math.PI);
                CTX.fill();
                CTX.closePath();

                break;
            case 4:
                //Earth
                CTX.fillStyle = '#64B5F6';
                CTX.beginPath();
                CTX.arc(CANVAS.width/2,(200/2) + 50, 60, 0, 2 * Math.PI);
                CTX.fill();
                CTX.closePath();
                break;
        
            default:
                CTX.fillStyle = CONFIG.darkest;
                CTX.fillRect(CANVAS.width/4, 50, CANVAS.width/2, 200);
                break;
        }

    }

    animateRadar() {
        //animate the radar on the navigation system
        CTX.strokeStyle = "green";
        CTX.lineWidth = 1;
        CTX.beginPath();
        CTX.moveTo(this.radarVerticalStart.x, this.radarVerticalStart.y);
        CTX.lineTo(this.radarVerticalStop.x, this.radarVerticalStop.y);
        CTX.stroke();
        CTX.closePath();

        CTX.beginPath();
        CTX.moveTo(this.radarHorizontalStart.x, this.radarHorizontalStart.y);
        CTX.lineTo(this.radarHorizontalStop.x, this.radarHorizontalStop.y);
        CTX.stroke();
        CTX.closePath();

        if(COUNTER_FLICKER_THREE === 1) {
            this.radarMoved = false;
        }
        if((COUNTER_FLICKER_THREE === 3) && !this.radarMoved) {
            //Draw vertical radar line
            let verticalMin = Math.ceil(this.radarMinX);
            let verticalMax = Math.floor(this.radarMaxX);
            let newRadarVerticalX = Math.floor(Math.random() * (verticalMax - verticalMin + 1) + verticalMin);
            this.radarVerticalStart.x = newRadarVerticalX;
            this.radarVerticalStop.x = newRadarVerticalX;
            
            //Draw horizontal radar line
            let horizontalMin = Math.ceil(this.radarMinY);
            let horizontalMax = Math.floor(this.radarMaxYHorizontal);
            let newRadarHorizontalY = Math.floor(Math.random() * (horizontalMax - horizontalMin + 1) + horizontalMin);
            this.radarHorizontalStart.y = newRadarHorizontalY;
            this.radarHorizontalStop.y = newRadarHorizontalY;

            this.radarMoved = true;
        }
    }
}