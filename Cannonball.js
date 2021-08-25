class CannonBall{
    constructor(x,y){
        var options = {
            restitution: 0.05,
            friction:0.1,
            density:0.07,
            isStatic: true
// creating the options for the cannon ball
        }
        this.r = 25
        this.body = Bodies.circle(x,y,this.r,options)
        
        this.image = loadImage("./assets/cannonball.png")

        World.add(world,this.body)
//adding it to the World
        
    }
    // creating the velocity of the ball and making it shoot wherever the cannon is pointing
    shoot(){
        var velocity= p5.Vector.fromAngle(cannon.angle)
        velocity.mult(20)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})

    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop()
//creating the cannonball image and x,y
    }
}