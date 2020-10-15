class boxes
{
    constructor(x, y, width, height)
    {
        var options={
            restitution:1.0
        }
        this.BoxObject = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.BoxObject);
        this.width = width;
        this.height = height;
       
      
      }

      display()
      {
          rectMode(CENTER);
          rect(this.BoxObject.position.x, this.BoxObject.position.y, this.width, this.height);
      }
}