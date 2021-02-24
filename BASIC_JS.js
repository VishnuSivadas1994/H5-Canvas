const canvas = document.getElementById('canvas1'); //get the canvas tag from html
const ctx = canvas.getContext('2d'); //create a canvas 2D context
const particleArray = [];

window.addEventListener('resize', function () {
    //Fixing the canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // ctx.fillStyle = 'white'; //Describing the fill color
    // ctx.fillRect(10, 20, 150, 50); //Filling a rectangle with (margin left, margin top, width, height)
});


const mouse = {
    x: undefined,
    y: undefined
}
//mouse click event listener
canvas.addEventListener('click', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    //drawCircle();

});
//mouse movement event listener
canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    //drawCircle();

});



class Particle {
    constructor() {
        // this.x = mouse.x;
        // this.y = mouse.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {
        //Creating a circle
        ctx.fillStyle = 'blue'; //describing a fill
        //ctx.strokeStyle = 'red'; //describing a stroke
        ctx.lineWidth = 3; //width of the stroke
        ctx.beginPath(); //start the path
        ctx.arc(this.x, this.y, 5, 0, Math.PI * 2); // (coordinate1, coordinate2, radius, start angle, PIx2)
        //ctx.stroke();
        ctx.fill();
    }

}

function init(){
    for(let i = 0; i < 100; i++){
        particleArray.push(new Particle());

    }
}
init();

function handleParticles(){
    for(let i = 0; i < particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();
    }
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);//clearing the specified area(coord1, coord2, width, height)
    handleParticles();
    requestAnimationFrame(animate);
}
animate();



