// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

function angle( x1, y1, x2, y2 ) {
    return Math.atan2( y2 - y1, x2 - x1 ); // range (-PI, PI]
    // theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    // if (theta < 0) theta = 360 + theta; // range [0, 360) 
}

function mod( n,  m ) {
    return ( ( n % m ) + m ) % m;
}

function distance( x1, y1, x2, y2 ){
    return Math.sqrt( ( x1 - x2 )**2 + ( y1 - y2 )**2 );
}


function drawCircle( x, y, r, f, s, a1, a2 ){
    // (x,y) = coordinates of the circle's center point
    //   r   = radius of the circle 
    //   f   = fill color
    //   s   = stroke (line) color 
    //   a1   = start angle
    //   a2   = end angle 
    if ( x === undefined ){ x = 0; }
    if ( y === undefined ){ y = 0; }
    if ( r === undefined ){ r = 50; }
    if ( f === undefined ){ f = 'white'; }
    if ( s === undefined ){ s = 'black'; }
    if ( a1 === undefined ){ a1 = 0; }
    if ( a2 === undefined ){ a2 = 2*Math.PI; }
    
    ctx.fillStyle = f;
    ctx.strokeStyle = s;
    ctx.beginPath();
    ctx.arc(x, y, r, a1, a2);
    ctx.stroke();
    ctx.fill();
}

function drawEllipse( x, y, rX, rY, rotation, startAngle, endAngle, counterClockwise, s, f ){
    // ( x, y, radiusX, radiusY, rotation, startAngle, endAngle [, counterclockwise] );
    // rotation : the rotation of the ellipse in radians.
    // s : stroke color
    // f : fill color
    
    if ( rotation === undefined ){ rotation = 2*Math.PI; }
    if ( startAngle === undefined ){ startAngle = 0; }
    if ( endAngle === undefined ){ endAngle = 2*Math.PI; }
    if ( counterClockwise === undefined ){ counterClockwise = true; }
    if ( s === undefined ){ s = 'black'; }
    if ( f === undefined ){ f = 'red'; }
    
    ctx.beginPath();
    ctx.ellipse(x, y, rX, rY, rotation, startAngle, endAngle, counterClockwise);
    ctx.fillStyle = f;
    ctx.fill();
    ctx.strokeStyle = s;
    ctx.stroke();
}

function drawLine( x1, y1, x2, y2, color ){
    if (color === undefined){
        color = 'black'
    }
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawRectangle( x1, y1, x2, y2, f, s){
    // (x1,y1) = upper left corner in canvas coordinates
    // (x2,y2) = bottom right corner in canvas coordinates
    // color = color to fill the rectangle
    if (f === undefined){ f = 'white'; }
    if (s === undefined){ s = 'black'; }
    ctx.fillStyle = f;
    ctx.strokeStyle = s;	
    //ctx.strokeRect( x1, y1, x2 - x1, y2 - y1 );
    ctx.fillRect( x1, y1, x2 - x1, y2 - y1 );
}

function drawPolygon( P, f, s, lineWidth ){

    // P is an array of points in 2d i.e. each element of P is a 2-tuple [x,y] 
    // f = fill color 
    // s = stroke (line) color

    // Default behaviour if draw_polygon function variables are not defined	
    if ( !P ){ P = [ [ 0, 0 ], [ 100, 0 ], [ 100, 100 ],[0, 100] ]; }
    if ( !f ){ f = 'white'; } 
    if ( !s ){ s = 'black'; }
    if ( !lineWidth ){ lineWidth = 1.0; }


    // Set fill color
    ctx.fillStyle = f;
    ctx.strokeStyle = s;
    ctx.lineWidth = lineWidth;

    // Draw the polygon
    ctx.beginPath();
    ctx.moveTo(P[0][0],P[0][1]);
    for (n = 1; n < P.length; n++){
        ctx.lineTo(P[n][0],P[n][1]);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}