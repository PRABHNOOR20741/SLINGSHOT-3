class Ammo
{
  constructor(x, y, width, height) 
  {
      var options = 
      {
          'restitution':0.1,
          'friction':1.0,
          'density':1.0
      }

      this.body = Bodies.rectangle(400,400, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    display()
    {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0,0,this.width,this.height)
      pop();
    }
}