var sound, amplitude, cnv;
var num=150;
var tx=[],ty=[],r=[];
var ss=0;
function preload(){
  sound = loadSound('data/1.mp3');
}
function setup() {
  cnv = createCanvas(displayWidth,displayHeight);
  amplitude = new p5.Amplitude();

  // start / stop the sound when canvas is clicked
  cnv.mouseClicked(function() {
   ss=1;
      sound.play();
   
  });
  for (var i=0;i<num;i++){
    tx[i]=random(displayWidth);
    ty[i]=random(displayHeight);
    r[i]=random(displayWidth/20,displayWidth/10);
  }
}
function draw() {
 /// if(song.isPlaying())
 if(ss==1)
  background(random(0,70));
 else background(0);
  noStroke();
  fill(255);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 10);
  for(var i=0;i<num;i++){
    randomSeed(frameCount);
    fill(255,0,0,70);
    ellipse(tx[i]+random(-size*10,size*10),ty[i]+random(-size*10,size*10),r[i]*size,r[i]*size);
    tx[i]+=random(-size*10,size*10);ty[i]+=random(-size*10,size*10);
  }
  
}
