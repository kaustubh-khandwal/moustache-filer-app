nose_x = 0;
nose_y = 0;
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet = ml5.poseNet(video,modelloaded);
    posenet.on("pose",getposes)
}

function preload() {
    moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function getposes(result) {
    if (result.length > 0) {
        console.log(result)
        console.log("nose x ="+result[0].pose.nose.x)
        nose_x = result[0].pose.nose.x - 25;
        nose_y = result[0].pose.nose.y - 5;
    }
}

function modelloaded() {
    console.log("posenet is intialized");
}

function draw() {
    image(video,0,0,300,300);
    image(moustache,nose_x,nose_y,50,50)
   
}

function TakeSnapshot() {
save("myselfieimage.png");
}