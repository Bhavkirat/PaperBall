class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic:false, 
            restitution:0.5

        }

        this.body = Matter.Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
        this.width = width;
        this.height = height;
    }
    display() {
        translate(this.body.position.x, this.body.position.y)
    fill("blue")
ellipse(0,0, this.radius, this.radius)

    }

}