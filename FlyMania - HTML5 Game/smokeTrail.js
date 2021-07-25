//JS file for the smoke trail/particles left by the airplane

const particleArray = [];

class Trail{
    constructor(){
        this.x = plane.x;
        this.y = plane.y;
        this.size = Math.random()*6 + 3;
        this.speedY = (Math.random() * 1) -0.5;
        this.color = 'grey'; 
    }

    update(){
        this.x -= gamespeed;
        this.y += this.speedY;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 3);
        ctx.fill();
    }
}

function trailSystem(){
    particleArray.unshift(new Trail);
    
    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].update();
      particleArray[i].draw();
    }

    if (particleArray.length > 180) {
        for (let i = 0; i < 20; i++) {
            particleArray.pop(particleArray[i]);
        }
    }
}