var rows=3;
var columns=3;
var movetile;//the tile that has to be moven
var tartile;// the tile that to swap with movetile
var turns=0;
//var imgorder=["1","2","3","4","5","6","7","8","9"];
var imgorder=["3","2","9","4","6","1","7","8","5"];



//insert images in board
window.onload=function(){
    for(let i=0;i<rows;i++){
        for(let j=0;j<columns;j++){

            let tile=document.createElement("img");
            tile.id=i.toString()+"-"+j.toString();
            tile.src=imgorder.shift()+".jpg";
            
            tile.addEventListener("dragstart",dragstart);//click an image
            tile.addEventListener("dragover",dragover);//moving over 
            tile.addEventListener("dragenter",dragenter);//destination image
            tile.addEventListener("dragleave",dragleave);//leaving the image
            tile.addEventListener("drop",dragdrop);//over another image
            tile.addEventListener("dragend",dragend);//after drag 
            document.getElementById("board").append(tile);
        }
    }
}
function dragstart(){
     movetile=this;
}
function dragover(e){
    e.preventDefault();
}
function dragenter(e){
    e.preventDefault();
}
function dragleave(){

}
function dragdrop(){
    tartile=this;
}
function dragend(){
    if(!tartile.src.includes("9.jpg")){
        return;
    }
    let movecoords=movetile.id.split("-");
    let r=parseInt(movecoords[0]);
    let c=parseInt(movecoords[1]); 
    let tarcoords=tartile.id.split("-");
    let r1=parseInt(tarcoords[0]);
    let c1=parseInt(tarcoords[1]);
    let moveleft=r == r1 && c1==c-1;
    let moveright =r == r1 && c1==c+1;
    let moveup=c ==c1 && r1==r-1;
    let movedown=c ==c1 && r1==r+1;
    let isAdjacent= moveleft||movedown||moveright||moveup;
    if(isAdjacent){

    let moveimg =movetile.src; 
    let tarimg=tartile.src;
     movetile.src=tarimg;
     tartile.src=moveimg;
     turns+=1;
     document.getElementById("turns").innerText=turns;
    }

g
}