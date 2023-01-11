//NUEVA VERSION DE MI REPRODUCTOR MALOTE OH SI MI COMPA

let siguiente = document.getElementById("sig"); //Boton debajo del player
let anterior = document.getElementById("ant");  //Btn under player
let anime = document.getElementById("anime");
let title = document.getElementById("name");
let capNum = document.getElementById("capitulo"); //Numero del episodio

let titleName = ["","¡El Premio Mundial de la Paz! ¿Quién se quedará con los 100 millones de Zenis?",
"¡Vacaciones en un resort! ¿Vegeta irá a un viaje familiar?","¿En dónde está la otra mitad del sueño? ¡Buscando al Súper Saiyajin Fase Dios!",
"¡Vamos por las Esferas del Dragón! ¡La pandilla de Pilaf hace de las suyas!","¡La pelea decisiva en el planeta Kaio sama! ¡Gokú contra el Dios de la Destrucción, Bills!",
"¡No enfurezcan al Dios de la Destrucción! ¡Una divertida fiesta de cumpleaños!","¿Cómo te atreves a tocar a mi Bulma? ¡El repentino ataque de ira de Vegeta!",
"¡Gokú regresa! ¿La última oportunidad otorgada por el Señor Bills?","¡Lamento la espera, Señor Bills! ¡El Super Saiyajin Fase Dios ha aparecido!",
"¡Desata tu poder Gokú! ¡El poder del Super Saiyajin Fase Dios!","¡Continuemos Señor Bills! ¡Una pelea entre Dioses!",
"¡El Universo se derrumba! ¡Colisión entre el Dios de la Destrucción y el Super Saiyajin Fase Dios!","¡Vamos Gokú! ¡Sobrepasa el Super Saiyajin Fase Dios!",
"¡Este es todo el poder que me queda! ¡El desenlace de la batalla entre Dioses!","¡Satán el Héroe, crea un milagro! ¡Un desafío fuera de este mundo!",
"¡Vegeta se vuelve un discípulo! ¡A convencer a Whis!","¡Pan ha nacido! ¿Gokú se va a entrenar?","¡Ya llegué! ¡Que comience el entrenamiento en el planeta de Bills!",
"¡La angustia regresa! ¡El emperador del mal, la resurrección de Freezer!","¡La advertencia de Jacko! ¡Freezer y sus 1000 soldados se acercan!","¡Que comience la venganza! ¡El ejército maligno de Freezer ataca a Gohan!",
"¡Cambio! ¡Un inesperado regreso y su nombre es Ginyu!","¡La Tierra!, ¡Gohan! ¡Corren peligro! ¡Date prisa y regresa Gokú!","¡El enfrentamiento entre Freezer y Gokú! ¡Este es el resultado de mi entrenamiento!",
"¡Una batalla a muerte! ¡La venganza de Golden Freezer!","¡La última oportunidad en un momento difícil! ¡Es hora de contraatacar, Gokú!","¿La Tierra va a estallar? ¡El Kame Hame Ha definitivo!",
"¡El Dios de la Destrucción del Universo 6! ¡Y su nombre es Champa!","¡El Torneo de Artes Marciales da inicio! El capitán del equipo es más fuerte que Gokú",
"¡Los últimos detalles para el Torneo de Artes Marciales! ¿Quiénes serán los otros dos miembros?","¡Vayamos con el Gran Zuno! ¡Preguntémosle en dónde están las Súper Esferas del Dragón!",
"¡Comienza el torneo! ¡Vayamos todos al planeta donde no hay nada!","¡Prepárense, Universo 6! ¡Este es el Súper Saiyajin Gokú!","¡Piccoro enfrenta a Frost! ¡Concentra todo tu poder en el Makankou Sappo!",
"¡Transforma tu ira en fuerza! ¡Vegeta utiliza su máximo poder en la pelea!","¡Una batalla imposible de ganar! ¡El estallido de furia de Vegeta!","¡No olvides tu orgullo como Saiyajin! ¡Vegeta contra el Saiyajin del Universo 6!",
"¡El mejor guerrero del Universo 6! ¡El asesino Hit aparece!","¡El salto en el tiempo mejorado y la nueva técnica de Gokú!","¡El Torneo se termina! ¿El ganador será Bills o Champa?",
"¡Sal de ahí, Dios de los dragones, no seas malo y cumple mi deseo!¡Chonmague!","¡Un festejo lleno de confusión! ¿Al fin van a pelear? ¡Monaka contra Gokú!","¿El ki de Gokú está fuera de control? ¡La terrible tarea de cuidar a Pan!",
"¡El sello del planeta Pot-Au-Feu! ¡El secreto del agua sobrenatural es descubierto!","¿Vegeta está desapareciendo? ¡La copia de Vegeta se vuelve una amenaza!","¡Gokú contra la copia de Vegeta! ¿Quién de los dos ganará?",
"¡Llamada de auxilio del futuro! ¡Un nuevo enemigo aparece!","¡Una vez más surge la esperanza! ¡Trunks despierta en el presente!","¡Un mensaje del futuro! ¡Gokú Black ataca!",
"¡Gokú contra Black! ¡El camino al futuro es obstruido!","¡Sentimientos que superan el tiempo! ¡Trunks y Mai!","¡La reunión entre el maestro y su discípulo! ¡Gohan y Trunks del Futuro!",
"¡La identidad de Black ha sido descubierta! ¡Vayamos al mundo de los Supremos Kaio-Sama del Universo 10!","¡Aquel que hereda el linaje saiyajin! ¡La decisión de Trunks!",
"¡Quiero ver a Son Gokú, ¿sí?! ¡La orden de Zenosama!","¡La revancha contra Gokú Black! ¡El Súper Saiyajin Rosé aparece!","¡El Dios con un cuerpo inmortal! ¡Zamas desciende!",
"¡Zamas y Black! ¡El misterio de los dos aumenta!","¡Hay que proteger al Supremo Kaio-Sama, Gowas! ¡Acabemos con Zamas!","¡De nuevo al futuro! ¡La verdadera identidad de Gokú Black es descubierta!",
"¡La ambición de Zamas! ¡El terrorífico Plan Cero Humanos es descubierto!"
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
        if(next == 61){     //Cambia aqui el numero de episodios que tiene el anime
                next = 61;
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