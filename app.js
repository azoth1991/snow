/**
 * Created by wwtliu on 14/8/11.
 */
var canvas;
var stage;
var img = new Image();
var snow;

window.onload = function(){
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    snow = new createjs.Text("❉", "20px Arial", "#ffffff");
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick",tick);

}
function tick(e){
    var t = stage.getNumChildren();
    var snowxv=0;
    var snowyv=5;
    snowyv+=0.05;
    for(var i = t-1;i>0;i--){
        var s=stage.getChildAt(i);
        s.y+=snowyv*Math.random();
        if(s.y>768){
            stage.removeChild(s);
        }
    }
    stage.update(e);
    drawsnow();
}
function drawsnow(){
    var num=parseInt(3*Math.random())
    for(var j=0;j<num;j++){
        s = snow.clone();
        s.y=100;
        s.scaleX=s.scaleY=Math.random()*3-1.5;
        s.alpha=Math.random();
        s.x=Math.random()*1366;
        stage.addChild(s);
    }

}


