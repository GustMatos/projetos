class Ground {
    constructor(x, y, w, h){
        let Options ={
            isStatic: true
        }
        this.x = this.x
        this.y = this.y
        this.w = this.w
        this.h = this.h
        this.body = Bodies.rectangle(x, y, w, h, Options)
        World.add(world, this.body)
    }

    display(){
        var groundPos = this.body.position
        push()
        translate(groundPos.x, groundPos.y)
        rectMode(CENTER)
        strokeWeight(4)
        fill(255, 255, 0)
        rect(0, 0, this.w, this.h)
        pop()
    }
}