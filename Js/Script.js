
//Boton para cambiar al modo dark

$(document).ready(function(){
    let encendido = true;
    darkSwitch()

    $(".dark-button").click(function(){
        $("body").toggleClass("bodyDark");
        //$("h1,h2,h3,h4,p").addClass("darker");
        $(".container").toggleClass("container-dark");
        $(".info").toggleClass("info-dark");
        $(".informacion").toggleClass("followUs");
        $(".social").toggleClass("social-dark");
        darkSwitch();
    })
    function darkSwitch(){

        switch(encendido){
            case true:
                $(".moon").css("display", "none", "position","absolute");
                $(".dark").css("display", "block", "position","absolute");
                encendido = false;
                break;
            case false:
                $(".dark").css("display", "none", "position","absolute");
                $(".moon").css("display", "block", "position","absolute")
                encendido = true;
                break;
            default:
                alert("HUBO UN PROBLEMA");
                break;
        }
    }
})
/*
.moon{
    position: absolute;
    display: none;
}
*/