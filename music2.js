var sound, amplitude, cnv;
var num=150;
var tx=[],ty=[],r=[];
var count=0;
var ss=10;
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
    var rr=sqrt(displayWidth*displayHeight)/20;
    r[i]=random(rr*1.5,2.5*rr);
  }
}
function draw() {
 /// if(song.isPlaying())
 
 
 
 if(ss==1)
  background(random(0,70));
 else background(0);
  noStroke();
      randomSeed(frameCount);

  
  fill(255);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 10);
  for(var i=0;i<num;i++){
    count++;
    fill(255,0,0,70);
    ellipse(tx[i]+random(-size*ss,size*ss),ty[i]+random(-size*ss,size*ss),r[i]*size,r[i]*size);
    tx[i]+=random(-size*ss,size*ss);ty[i]+=random(-size*ss,size*ss);
  }
  //asdfasfsafsafsafsadfsad
}
