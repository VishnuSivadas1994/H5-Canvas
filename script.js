const canvas = document.getElementById('canvas1'); //get the canvas tag from html
const ctx = canvas.getContext('2d'); //create a canvas 2D context
const particleArray = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let hue = 0;

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
    for (let i = 0; i < 10; i++) {
        particleArray.push(new Particle());
    }
    //drawCircle();

});
//mouse movement event listener
canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 5; i++) {
        particleArray.push(new Particle());
    }
    //drawCircle();

});



class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue + ', 100%, 50%)';
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }
    draw() {
        //Creating a circle
        ctx.fillStyle = this.color; //describing a fill
        //ctx.strokeStyle = 'red'; //describing a stroke
        ctx.lineWidth = 3; //width of the stroke
        ctx.beginPath(); //start the path
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); // (coordinate1, coordinate2, radius, start angle, PIx2)
        //ctx.stroke();
        ctx.fill();
    }

}



function handleParticles() {
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
        for (let j = i; j < particleArray.length; j++) {
            //pythagorean theorem
            const dx = particleArray[i].x - particleArray[j].x;
            const dy = particleArray[i].y - particleArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = particleArray[i].color;
                ctx.lineWidth = 0.2;
                ctx.moveTo(particleArray[i].x, particleArray[i].y);
                ctx.lineTo(particleArray[j].x, particleArray[j].y);
                ctx.stroke();
                
            }
        }
        if (particleArray[i].size <= 0.3) {
            particleArray.splice(i, 1);
            i--;
        }
    }
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);//clearing the specified area(coord1, coord2, width, height)
    //ctx.fillStyle = 'rgba(0,0,0,0.02)';
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    hue += 5;
    requestAnimationFrame(animate);
}
animate();



