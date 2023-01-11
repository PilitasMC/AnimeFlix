//NUEVA VERSION DE MI REPRODUCTOR MALOTE OH SI MI COMPA

let siguiente = document.getElementById("sig"); //Boton debajo del player
let anterior = document.getElementById("ant");  //Btn under player
let anime = document.getElementById("anime");
let title = document.getElementById("name");
let capNum = document.getElementById("capitulo"); //Numero del episodio

let titleName = ["","Los Siete Pecados Capitales","La espada del Caballero Sagrado","El pecado en el Bosque Dormido","El sueño de una pequeña",
"Aunque tengas que morir","La canción del origen","Un reencuentro conmovedor","La cazadora aterradora","Un pulso oscuro","El Festival de la Pelea de Vaizel",
"Sentimientos encontrados","Un cañón espeluznante","El Apóstol de la Destrucción","El lector de libros","Un caballero profano","La provocación de las leyendas",
"El primer sacrificio","Aunque me cueste la vida","El rey Hada espera en vano","El decreto del valor","Se aproxima una amenaza","Lo que puedo hacer por ti",
"La desesperación desciende","Los héroes"]; //Nombre de los videos (Van manual si lo se compa) cuando aprenda un poco mas, sera automatico

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