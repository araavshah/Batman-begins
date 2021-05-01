class Umbrella{
    constructor(x,y){
        var options = {
        'isStatic': true,
        }
        this.body = Bodies.circle(x, y, 50, options)
        this.radius = 50;
        this.image = loadImage("Walkingframe/walking_1.png"," Walkingframe/walking_2.png", "Walkingframe/walking_3.png", "Walkingframe/walking_4.png", "Walkingframe/walking_5.png", "Walkingframe/walking_6.png", "Walkingframe/walking_7.png", "Walkingframe/walking_8.png")
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+70, 300, 300);
    }
}