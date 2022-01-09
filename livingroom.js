function navigate()
{
    window.location = "index.html";
}


function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}

 img = "";
 status1 = "";

 function preload()
{
    img = loadImage("livingroom.jpg");
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Living Room", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}

function modelLoaded()
{
    console.log("Model is Loaded!");
    status1 = true;
     objectDetector.detect(img , gotResults);
}

function gotResults(error, results)
{
   if(error)
   {
       console.log(error);
   }

   else
   {
       console.log(results);
   }
}

