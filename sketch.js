var raindrops = [] ;

function setup() {
  createCanvas (600,300);
for(var i = 0; i < 500; 1++){
 raindrops[i] = new Drop();
}
}

function draw(){
  background(222,222,242);
  for(var i = 0; i<500; i++) {
    raindros[i].fall();
    raindrops[i].display();
  }
}