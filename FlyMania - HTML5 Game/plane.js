// JS File for the airplane object

const planeObj = new Image();
planeObj.src = 'Assets/airplane.png'


class Plane{
    constructor(){
        this.x = 100;
        this.y = 200;
        this.vy = 0;
        this.objWidth = 2100;
        this.objHeight = 700;
        this.width = this.objWidth/15;
        this.height = this.objHeight/15;
        this.weight = 1;
    }

    update(){
        let curve = Math.sin(angle) * 25;

        if (this.y > canvas.height - (this.height*3) + curve) {
            this.y = canvas.height - (this.height*3) + curve;
            this.vy = 0;
        }else{
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy;
        }

        if (this.y < 0 + this.height) {
            this.y = 0 + this.height;
            this.vy = 0;
        }

        if (spacePressed && this.y > this.height * 3) {
            this.uplift();
        }
    }

    draw(){
        ctx.drawImage(planeObj, 0, 0, this.objWidth, this.objHeight, this.x - 40, this.y - 15, this.width * 1.5, this.height * 1.5)
    }

    uplift(){
        this.vy -= 3;
    }
}
const plane = new Plane();
plane.src = 'Assets/airplane.png';