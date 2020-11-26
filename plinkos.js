class plinkos{
 
    constructer( x,y,w,h ){
    var options = {
        isStatic: true
    }
    this.body = Bodies.circle(x,y,w,h,options);
   
    world.add(world,this.body);
    }
   display(){
       var pos = this.body.position;
       rectMode(CENTER);
       fill("white")
          
    
       }
       
   };
