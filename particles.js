class particle{
 
    constructer( ){
    var options = {
        isStatic: true
    }
    this.body = bodies.rectangle(x, y,options);
   
    world.add(world,this.body);
    }
   display(){
       var pos = this.body.position;
       rectMode(CENTER);
       fill("white")
        rect(pos.x,pos.y);
        this.body = bodies.circle(x,y,this.r,Option);
        this.color=color(random(0,255),random(0,255),random(0,255))
         world.add(world,this.body);
       }
       
   };