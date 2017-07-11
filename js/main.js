// image visible , invisible et btn//
    function jeu () {

          var image = document.getElementsByClassName("banniere");
          for(var i = 0; i<image.length; i++){
            image[i].classList.remove("hidden");

              }


}
    document.getElementById("gong").onclick = function(){jeu();}

  //code jeu//

  var joueur1 = 0;
  var ordinateur = 0;


  function player(joueur){
    var ordi = Math.random();
    //alert(joueur + "2");
    document.getElementById(joueur + "2").classList.remove("hidden");



    if (ordi < 0.33){

    if(joueur == "feuille"){
      joueur1++;
    }
    else if( joueur == "pierre"){
    }
    else if (joueur == "ciseau"){
      ordinateur++;
    }

     }

     else if (ordi< 0.66 ){

     if(joueur == "feuille"){
       ordinateur++;
     }
     else if( joueur == "pierre"){
       joueur1++;
     }
     else if (joueur == "ciseau"){
     }

      }

      else if (ordi < 0.99 ){

       if(joueur == "feuille"){
      }
      else if( joueur == "pierre"){
        ordinateur++;
      }
      else if (joueur == "ciseau"){
        joueur1++;
      }

      }
      if (joueur1 == 3){

      }
      else {

      }


}
