const canvas = document.getElementById('canvas1'); //get the canvas tag from html
const ctx = canvas.getContext('2d'); //create a canvas 2D context


window.addEventListener('resize', function () {
    //Fixing the canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // ctx.fillStyle = 'white'; //Describing the fill color
    // ctx.fillRect(10, 20, 150, 50); //Filling a rectangle with (margin left, margin top, width, height)
});

ctx.fillStyle = 'blue'; //describing a fill
ctx.strokeStyle = 'red'; //describing a stroke
ctx.lineWidth = 3; //width of the stroke
ctx.beginPath(); //start the path
ctx.arc(75, 75, 50, 0, Math.PI * 2); // (coordinate1, coordinate2, radius, start angle, PIx2)
ctx.stroke();
ctx.fill();

