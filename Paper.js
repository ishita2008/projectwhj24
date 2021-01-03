class Paper{
    constructor(x,y,width,height){
    var options={

        isStatic:false,
        restitution:0.7,
        friction:0.3,
        density:2.5

    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    World.add(world, this.body);
}

    
    display(){
        var pos=this.body.position
       

        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.width,this.height)
        
    }
   
}

