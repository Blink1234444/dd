noseX=0;
noseY=0;
difference = 0;
rightwristx = 0;
leftwristx = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas= crateCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotePoses);
}
function gotPoses(results) 
{
if(results.lengt > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;



    leftwristx = results[0].pose.leftwrist.x;
    rightwristx = results[0].pose.rightwrist.x;
    difference = floor(leftwristx - rightwristx)
    

}

}
function draw() {
    background('#7FFFD4');


    document.getElementById("square_side").innerHTML = "El alto y ancho del cuadro será: " + difference +"px";
    fill('#9932CC');
    stroke('#008B8B');
    square(noseX,noseY,difference);

}