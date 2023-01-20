//tomo los autos 
let carRojo = document.querySelector("#autoRojo");
let carAzul = document.querySelector("#autoAzul");
//variables de velocidad
let velRojo = 0;
let velAzul = 0;


document.body.addEventListener("keyup", function (evento) {
    if (evento.code === "Enter" && velRojo < 560) {
        velRojo = velRojo + 15;
        document.getElementById('autoRojo').style.marginLeft = velRojo + 'px';
    }
    else if (evento.code === "Space" && velAzul < 560) {
        velAzul = velAzul + 15;
        document.getElementById('autoAzul').style.marginLeft = velAzul + 'px';
    }
    else {
        if (velAzul > 540) {
            alert("Gano el auto Azul");
        }

        else if (velRojo > 540) {
            alert("Gano el auto Rojo");
        }

        location.reload();
    }

    if (velRojo > velAzul) {
        document.body.style.backgroundColor = "red";
    }
    else document.body.style.backgroundColor = "blue";

})









