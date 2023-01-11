//NUEVA VERSION DE MI REPRODUCTOR MALOTE OH SI MI COMPA

let siguiente = document.getElementById("sig"); //Boton debajo del player
let anterior = document.getElementById("ant");  //Btn under player
let anime = document.getElementById("anime");
let title = document.getElementById("name");
let capNum = document.getElementById("capitulo"); //Numero del episodio

let titleName = ["","Mundo de piedra","Rey del mundo de piedra","Armas de la ciencia","Fuego de la señal de humo","Stone World The Beginning",
"Dos naciones del mundo de piedra","Donde han ido dos millones de años","Stone Road","Que haya luz de la ciencia","Una alianza endeble",
"Mundo despejado","Amigos de atrás hacia atrás","Guerrero enmascarado","Maestro de la llama","La culminación de dos millones de años",
"Un cuento para las edades","Cien noches y mil cielos","Guerras de piedra",	"A la modernidad","La era de la energía","Spartan Crafts Club",
"El tesoro","Ola de la ciencia","Voces sobre la distancia infinita"]; //Nombre de los videos (Van manual si lo se compa) cuando aprenda un poco mas, sera automatico

//INCREMENTAMOS ESTAS PARA LOS CAMBIOS DE VIDEOS & LO MISMO APLICA PARA EL NUMERO DEL CAPITULO
let next = 1;
titulo();

    //FUNCION PARA CAMBIAR DE VIDEOS
    siguiente.onclick = function(){
        mayor();
        anime.setAttribute("src",`${next}.mp4`);
    }
    anterior.onclick = function(){
        menor();
        anime.setAttribute("src",`${next}.mp4`);
    }
    //FUNCION PARA SIGUIENTE
    function mayor(){
        if(next == 24){     //Cambia aqui el numero de episodios que tiene el anime
                next = 24;
        }
        else{
            next++;
            titulo();
            capNum.innerHTML = next
        }
    }
    //FUNCION PARA ANTERIOR
    function menor(){
        if(next == 1){
            next = 1;
        }
        else{
            next--;
            titulo();
            capNum.innerHTML = next
        }
    }
//FUNCION DE TITULO
function titulo(){
    title.innerHTML = titleName[next];
}