var c = document.getElementById( "mon_canvas" );
var ctx = c.getContext("2d");

// Maison
ctx.fillStyle = "blue";
ctx.fillRect(80,150,150,50);

// Porte
ctx.fillStyle = "blue";
ctx.fillRect(30,200,280,70);

// Roue -  arc( x, y, radius, startAngle, endAngle, sensAntiHoraire )
ctx.beginPath()
ctx.arc(70,300,30,0,Math.PI*2,true);
ctx.fillStyle = "grey";     // Remplissage
ctx.strokeStyle = "black";  // Bordure
ctx.stroke();   // Application Bordure
ctx.fill();     // Application Remplissage

// Roue -  arc( x, y, radius, startAngle, endAngle, sensAntiHoraire )
ctx.beginPath();
ctx.arc(270,300,30,0,Math.PI*2,true);
ctx.fillStyle = "grey";
ctx.strokeStyle = "black";
ctx.stroke();
ctx.fill();
