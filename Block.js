class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility=255
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        this.visibility=this.visibility-5
        if(this.body.speed<3){
          console.log("speed not enough");
        }else{
          World.remove(world,this.body);
          this.body = Bodies.rectangle(this.body.x,this.body.y,this.body.width,this.body.height);
          World.add(world,this.body);
          tint(255,this.visibility);
        }
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
}