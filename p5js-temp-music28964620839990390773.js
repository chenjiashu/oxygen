var sound, amplitude, cnv;
var num=300;
var tx=[], ty=[], r=[];
var count=0;
var ssmax=15, ss;
var mouseK=0;
function preload() {
  sound = loadSound('data/1.mp3');
}
function setup() {
  cnv = createCanvas(displayWidth, displayHeight);
  amplitude = new p5.Amplitude();

  // start / stop the sound when canvas is clicked
  cnv.mouseClicked(function() {
    mouseK=1;
    sound.play();
    frameRate(16);
  }
  );
  for (var i=0; i<num; i++) {
    tx[i]=random(displayWidth);
    ty[i]=random(displayHeight);
    var rr=sqrt(displayWidth*displayHeight)/20;
    r[i]=random(rr*0.3, 3.5*rr);
  }
}
function draw() {
  /// if(song.isPlaying())



  if (mouseK==1)
    background(random(0, 70));
  else background(0);
  noStroke();


  fill(255);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 7);
  var ss=map(level, 0, 1, ssmax/4, ssmax);
  for (var i=0; i<num; i++) {
    randomSeed(frameCount);

    fill(255, 0, 0, 80);
    ellipse(tx[i]+random(-size*ss, size*ss), ty[i]+random(-size*ss, size*ss), r[i]*size, r[i]*size);
    tx[i]+=random(-size*ss, size*ss);
    ty[i]+=random(-size*ss, size*ss);
  }
  //asdfasfsafsafsafsadfsad
}
