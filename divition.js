class divition{
 
 constructer( x, y, w, h){
 var options = {
     isStatic: true
 }
 this.body = bodies.rectangle(x, y, w, h,options);
 this.w = w;
 this.h = h;
 world.add(world,this.body);
 }
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("white")
     rect(pos.x,pos.y,this.w,this.h);
     
     for(var k=0;k<=innerWidth;k = k + 80){
         divition.push(new divition(k,hight-divition/2,10,divitionhight));
     }
    }

};