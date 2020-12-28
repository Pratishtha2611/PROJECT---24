class paper {
constructer(x,y,r){
var paper_options = {
    isStatic : false,
    restitution :0.3,
    friction : 0.5,
    density : 1.2
}
//this.x = x;
//this.y = y;
this.body = Bodies.circle(200,700,20,options);
}
display(){
    var paperpos = this.body.postion;
    Push()
    Translate(paperpos.x,paperpos.y);
    rectMode(CENTER);
    strokeWeight(3);
    Fill(255,0,255)
    ellipseMode(RADIUS);
    ellipse(paper.position.x,paper.position.y, 20, 20);
    Pop();
}
}