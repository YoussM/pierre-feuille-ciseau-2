document.getElementById("gong").onclick = function(){jeu()};
function jeu (){


var joueur1 = 0;
var ordinateur = 0;
while (joueur1 < 3 && ordinateur < 3){

var joueur ;
document.getElementById("joueur").innerHTML = joueur;

var ordi = Math.random();
// console.log(ordi);



if (ordi < 0.33){
// console.log ("pierre");

if(joueur == "feuille"){
  // alert("gagne");
  joueur1++;
}
else if( joueur == "pierre"){
  // alert("nul");
}
else if (joueur == "ciseau"){
  // alert("perdu");
  ordinateur++;
}

}

else if (ordi< 0.66 ){
// console.log ("ciseau");

if(joueur == "feuille"){
  // alert("perdu");
  ordinateur++;
}
else if( joueur == "pierre"){
  // alert("gagne");
  joueur1++;
}
else if (joueur == "ciseau"){
  // alert("nul");
}

}



else if (ordi < 0.99 ){
// console.log ("feuille");


 if(joueur == "feuille"){
  // alert("nul");
}
else if( joueur == "pierre"){
  // alert("perdu");
  ordinateur++;
}
else if (joueur == "ciseau"){
  // alert("gagne");
  joueur1++;
}

}
// alert(joueur1 + " - " + ordinateur);
}
if (joueur1 == 3){
// alert("vous avez gagné");
}
else {
// alert("vous avez perdu");
}


}
