const canvas = document.getElementById('canvas1'); //get the canvas tag from html
const ctx = canvas.getContext('2d'); //create a canvas 2D context


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


function drawCircle() {
    //Creating a circle
    ctx.fillStyle = 'blue'; //describing a fill
    //ctx.strokeStyle = 'red'; //describing a stroke
    ctx.lineWidth = 3; //width of the stroke
    ctx.beginPath(); //start the path
    ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2); // (coordinate1, coordinate2, radius, start angle, PIx2)
    //ctx.stroke();
    ctx.fill();
}

function animate(){
    //ctx.clearRect(0, 0 ,canvas.width, canvas.height);//clearing the specified area(coord1, coord2, width, height)
    drawCircle();
    requestAnimationFrame(animate);
}
animate();



