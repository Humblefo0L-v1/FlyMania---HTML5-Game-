//JS File for generating the in-game obstacles

const obstaclesArray = [];

class Obstacle{
    constructor(){
        this.top = (Math.random() * canvas.height/3) + 90;
        this.bottom = (Math.random() * canvas.height/3) + 40;
        this.x = canvas.width;
        this.width = 160 + (60 * Math.random());
        this.color = 'black';
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    }

    update(){
        this.x -= gamespeed;
        this.draw();
    }
}

function obstacleSystem(){
    if (frame%180 === 0) {
        obstaclesArray.unshift(new Obstacle);
    }
    for (let i = 0; i < obstaclesArray.length; i++) {
        obstaclesArray[i].update();
    }
    if (obstaclesArray.length > 18) {
        obstaclesArray.pop(obstaclesArray[0]);
    }
}