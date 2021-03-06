class Paper {
    constructor(x, y, diameter){
    
     var options = {
        isStatic : false,
        'restitution' : 0.8,
        'friction' : 4,
        'density' : 1.2,
    } 
   
   this.body = Bodies.circle(x,y,diameter,options);
   this.width = width;
   this.height = height;
   this.diameter = diameter;

   World.add(world, this.body);
   }
  display(){
   var pos =this.body.position;   
   fill("white");
   ellipseMode(RADIUS);
   ellipse(pos.x,pos.y,this.diameter);  
  } 
}

/*class Paper {
    constructor(x,y,r) {
var options = {
    'isStatic' : false,
    'restitution' : 0.3,
    'friction' : 0.5,
    'density' : 1.2,
}
this.body = Bodies.circle(x,y,radius,options);
World.add(world,this.paper);
    }
    display(){
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y);
    rectMode(CENTER)
    fill(255)
    ellipse(0,0,this.r, this.r);
    pop()
    }
}*/