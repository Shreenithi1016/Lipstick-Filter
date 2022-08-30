lipstickX=0;
lipstickY=0;
function preload() {
lipstick= loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup() {
canvas= createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function draw() {
image(video,0,0,300,300);
image(lipstick, lipstickX-13, lipstickY+10, 30, 30);
}

function take_snapshot() {
    save("myFilterImage")
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        lipstickX=results[0].pose.nose.x;
        lipstickY=results[0].pose.nose.y;
        console.log("lips x =" + results[0].pose.nose.x);
        console.log("lips y =" + results[0].pose.nose.y);
    }
}