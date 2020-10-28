class Dustbin {
    constructor(x, y, width, height){

   var options ={
       isStatic: true
   }       
   
   this.body = Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height = height;
    
   World.add(world, this.body);
   }
  display(){
   var pos =this.body.position;   
   fill("yellow");
   rect(pos.x, pos.y, this.width, this.height);  
  } 
}














/*class Dustbin {
    constructor(x,y,width,height){
        var options = {
            'isStatic' : true
        }
        this.bodies = Bodies.rect(x,y,width,height,options);
        this.height = height;
        this.width = width;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;   
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);  
       } 
}*/