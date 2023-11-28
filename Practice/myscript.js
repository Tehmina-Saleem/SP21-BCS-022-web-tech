window.onload=function(){
    var btn = document.getElementById("btnadd");

    btn.onclick= handdleadd;
};
function handdleadd(){
var newtodo= document.getElementById("newtodo").value;
var todos= document.getElementById("todos");
var newtodotext= document.createTextNode(newtodo);
var newli= document.createElement("li");
newli.appendChild(newtodotext);
todos.appendChild(newli);
}
function handdledelete(e){
    var tag= e.target;
    
}

