//NUEVA VERSION DE MI REPRODUCTOR MALOTE OH SI MI COMPA

let siguiente = document.getElementById("sig"); //Boton debajo del player
let anterior = document.getElementById("ant");  //Btn under player
let anime = document.getElementById("anime");
let title = document.getElementById("name");
let capNum = document.getElementById("capitulo"); //Numero del episodio

let titleName = ["","Crueldad","El instructor, Sakonji Urokodaki","Sabito y Makomo","Selección fina","Tu acero","Espadachín con demonio",
"Muzan Kibutsuji","Cautivador olor a sangre","Demonios de temari y flechas","Siempre juntos","La casa de los tambores",
"El jabalí muestra sus colmillos mientras Zenitsu duerme","Algo más importante que la vida","La casa del blasón de glicinias",
"El monte Natagumo","Que otro vaya al frente","Domina una única cosa","Lazos simulados","Dios del fuego","Una familia unida a la fuerza",
"Violando las normas","El patrón","Reunión de los Pilares","Entrenamiento restaurador","Kanao Tsuyuri, Tsuguko","Una nueva misión"]; //Nombre de los videos (Van manual si lo se compa) cuando aprenda un poco mas, sera automatico

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