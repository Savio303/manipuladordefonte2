differance = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,150);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log('Posenet Is Initialized!')
}

function gotPoses(results) {
    if(results.lenght>0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        differance = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
        }
}

function draw() {
    background("#6C91C2");

    document.getElementById("font_size").innerHTML = "Tamanho da fonte será = " + difference +"px";
    textSize(difference);
    fill('#FFE787');
    text('Pedro', 50, 400);
}