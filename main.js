x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak"; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content; 
      if(content =="1")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle "; 
        draw_circle = "set1";
      }

      if(content =="2")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing 2 circle "; 
        draw_circle = "set2";

      }

      if(content =="3")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing 3 circle "; 
        draw_circle = "set3";
      }

      if(content =="4")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing 4 circle "; 
        draw_circle = "set4";
      }

      if(content =="5")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing 5 circle "; 
        draw_circle = "set5";
      }

      if(content =="6")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing 6 circle "; 
        draw_circle = "set6";
      }

      if(content =="7")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing 7 circle "; 
        draw_circle = "set7";
      }

      if(content =="8")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing 8 circle "; 
        draw_circle = "set8";
      }

      if(content =="9")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing 9 circle "; 
        draw_circle = "set9";
      }

      if(content =="10")
      {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing 10 circle "; 
        draw_circle = "set10";
      }
}

function setup() {
  canvas = createCanvas(900, 600);
}

function draw() {
  if(draw_circle == "set1")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";
  }

  if(draw_circle == "set2")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";
  }

  if(draw_circle == "set3")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";
    
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";
  }

  if(draw_circle == "set4")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";
  }


  if(draw_circle == "set5")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";


    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";
  }

  if(draw_circle == "set6")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";
  }

  if(draw_circle == "set7")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";
  }

  if(draw_circle == "set8")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";
  }
  if(draw_circle == "set9")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";
    
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";
  }

  if(draw_circle == "set10")
  {
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "Circle is drawn ";
    draw_circle = "";

  }
}









