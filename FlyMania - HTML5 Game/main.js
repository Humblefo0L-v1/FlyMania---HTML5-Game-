//Main JS File handling all the functions and operations in the game

//Canvas Setup
var canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d')
canvas.width = 1600;
canvas.height = 600;

//Initialising variables
let spacePressed = false;
let hue = 0;
let angle = 0;
let frame = 0;
let score = 0;
let gamespeed = 3;

//Animate Function
function animate(){

    //Update score on each frame
    score++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    trailSystem();
    obstacleSystem();
    
    //Initialising Airplane
    plane.update();
    plane.draw();

    //Score Indicator
    ctx.fillStyle = 'white';
    ctx.font = '24px Poppins';
    ctx.fillText('Score:  ' + score, 1400, 40);

    //collision handling
    collisionDetectionSystem();
    if (collisionDetectionSystem()) {
        return;
    }

    //Frames
    requestAnimationFrame(animate);
    angle += 0.1;
    frame++;
}
animate();

//Controllers
window.addEventListener('keydown', function(e){
    if (e.code === 'Space') {
        spacePressed = true;
    }
});
window.addEventListener('keyup', function(e){
    if (e.code === 'Space') {
        spacePressed = false;
    }
});

//Collison Detection Algorithm
const exp = new Image();
exp.src = 'Assets/exp1.png';

function collisionDetectionSystem(){
    for (let i = 0; i < obstaclesArray.length; i++) {
        if (plane.x < obstaclesArray[i].x + obstaclesArray[i].width && 
            plane.x + plane.width > obstaclesArray[i].x &&
            ((plane.y < 0 + obstaclesArray[i].top && plane.y + plane.height > 0) ||
            (plane.y > canvas.height - obstaclesArray[i].bottom &&
            plane.y + plane.height < canvas.height))) {
            ctx.drawImage(exp, plane.x - 120, plane.y - 150, 360, 360);
            ctx.font = "64px Grobold";
            ctx.fillStyle = 'yellow';
            ctx.fillText('Game Over!', 600, canvas.height/2 - 20);
            ctx.fillText('Your Score is ' + score, 600, canvas.height/2 + 40);
            return true;
        }
        
    }
}