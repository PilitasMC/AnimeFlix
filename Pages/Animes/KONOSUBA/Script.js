//NUEVA VERSION DE MI REPRODUCTOR MALOTE OH SI MI COMPA

let siguiente = document.getElementById("sig"); //Boton debajo del player
let anterior = document.getElementById("ant");  //Btn under player
let anime = document.getElementById("anime");
let title = document.getElementById("name");
let capNum = document.getElementById("capitulo"); //Numero del episodio

let titleName = ["","¡Esta autoproclamada diosa y la reencarnación en otro mundo!","¡Una explosión para esta chūnibyō!",
"¡Un tesoro (panties) en esta mano derecha!","¡Magia explosiva contra este enemigo formidable!","¡El precio de esta espada maldita!",
"¡El final de esta pelea sin sentido!","¡Una segunda muerte en esta estación gélida!","¡Una mano caritativa para este grupo que no podrá sobrevivir al invierno!",
"¡Dar bendiciones a esta maravillosa tienda!","¡Una última llama para esta fortaleza absurda!","¡Dar bendiciones a esta maravillosa gargantilla! OVA"]; //Nombre de los videos (Van manual si lo se compa) cuando aprenda un poco mas, sera automatico

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
        if(next == 11){     //Cambia aqui el numero de episodios que tiene el anime
                next = 11;
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