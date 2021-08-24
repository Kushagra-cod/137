objects=[];
status="";

function preload(){
    video=createVideo('video.mp4');
}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:Detecting Objects";
}

function modelLoaded(){
    console.log("model loaded!")
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function draw(){
if(status != ""){
    objectDetector.detect(video,gotResult);
    for(i=0; i<objects.lenght; i++){
        document.getElementById("status").innerHTML="status:object Detected";
        document.getElementById("number_of_objects").innerHTML="Number Of Objects Detected Are:"+objects.lenght;

        fill("#FF0000");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}
}