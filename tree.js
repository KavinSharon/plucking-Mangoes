class Tree {
    constructor(x, y) {
      var options = {
          isStatic:true
          
      }
      var options2 ={
          isStatic:false
      }
      this.width = 500;
      this.height = 100;
      this.thickness = 500;

      this.bottomBody = Bodies.rectangle(x, y, this.width,this.thickness, options);
      this.rightBody = Bodies.rectangle(x+100, y-50, this.thickness,this.height, options2);
      this.leftBody = Bodies.rectangle(x-100, y-50, this.thickness,this.height, options2);
      
      this.image = loadImage("tree.png");
      World.add(world, this.bottomBody);
      World.add(world, this.rightBody);
      World.add(world, this.leftBody);
    }
    display(){
      var pos1 =this.bottomBody.position;
      var pos2 =this.rightBody.position;
      var pos3 =this.leftBody.position;
      push();
      translate(pos1.x,pos1.y);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.thickness);
      pop();

    //   push();
    //   translate(pos2.x,pos2.y);
    //   imageMode(CENTER);
    //   image(this.image,0,0,this.width,this.height);
    //   pop();

    //   push();
    //   translate(pos3.x,pos3.y);
    //   imageMode(CENTER);
    //   image(this.image,0,0,this.width,this.height);
    //   pop();
      
    }
  };
  