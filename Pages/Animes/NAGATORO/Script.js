//NUEVA VERSION DE MI REPRODUCTOR MALOTE OH SI MI COMPA

let siguiente = document.getElementById("sig"); //Boton debajo del player
let anterior = document.getElementById("ant");  //Btn under player
let anime = document.getElementById("anime");
let title = document.getElementById("name");
let capNum = document.getElementById("capitulo"); //Numero del episodio

let titleName = ["","Eres un poco... - ¿No vas a enojarte?","¡Se cumplió tu deseo! - ¡Hola, hola!","Repitámoslo algún día - ¡Aquí, aquí!",
"Estás como un tomate - Podrías ser un poco más…","Pelaje de oveja - ¡Invitas tú!","Eres muy tonto ♥ - ¡Vamos a la playa!",
"¿Vamos al festival? - Parece una cita","Podría ser divertido ♥ - ¡Piedra, papel, tijeras!","¡Es un pervertido! - ¡Alguien tan repugnante jamás tendrá una cita!",
"Seguro que eres poco flexible - ¡Aceptemos el reto!","¿Qué opinas tú? - ¡No eres honesto contigo mismo!♥","¿Le llegó la primavera a la cucamargi? - ¿Oíste? Amor, dice"
]; //Nombre de los videos (Van manual si lo se compa) cuando aprenda un poco mas, sera automatico

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
        if(next == 12){     //Cambia aqui el numero de episodios que tiene el anime
                next = 12;
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