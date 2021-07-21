class Slingshot{
    constructor(BodyA,PointB){
        var options={
    bodyA:BodyA,
    pointB:PointB,
    stiffness:0.1,
    length:10
        }
    this.sling = Constraint.create(options)
    this.pointB=PointB
    World.add(world,this.sling)
    }
    display(){
        if(this.sling.bodyA){
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
    }
    fly(){
        this.sling.bodyA=null
    }
}