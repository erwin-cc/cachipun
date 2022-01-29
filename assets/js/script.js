//Definición de la función Cachipun

var optJugador, optMaquina, victoriasJugador, victoriasMaquina, resultado;
var cachipun = (optJugador) => {
    /*console.log(`El valor escogido por el jugador es ${optJugador}`)*/
    //Generar jugada de la máquina con función Math.random(), que genera valores entre [0,1)
    optMaquina = Math.floor(Math.random() * 3 + 1);
    /*console.log(`El valor escogido por la máquina es ${optMaquina}`)*/

    /*Comparar jugada del usuario con la de la máquina, definir quien gana y asignar una victoria.
    Para ello se tomará cada posible opcion del jugador y se comparará con cada posible opcion de la máquina.
    Esto da un total de 9 comparaciones a realizar (3 por cada opcion del usuario)
    * Por cada juego, se debe mostrar el resultado inmediatamente.*/
    switch (optJugador) {
        case 1:
            /*console.log(`Caso en que el jugador ha escogido 1`)*/
            switch (optMaquina) {
                case 2:
                    $("#scores table tbody").append(`
                    <tr>
                        <td>${ronda}</td>
                        <td><i class="fas fa-times"></i></td>
                        <td></b><i class="fas fa-check"></i></td>
                    </tr>
                    `);
                    /*alert("Perdiste...");*/
                    victoriasMaquina += 1;
                    break;
                case 3:
                    $("#scores table tbody").append(`
                    <tr>
                        <td>${ronda}</td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-times"></i></td>
                    </tr>
                    `);
                    /*alert("¡Ganaste!");*/
                    victoriasJugador += 1;
                    break;
                case 1:
                    $("#scores table tbody").append(`
                    <tr>
                        <td>${ronda}</td>
                        <td><i class="far fa-circle"></i></td>
                        <td><i class="far fa-circle"></i></td>
                    </tr>
                    `);
                    /*alert("Empate");*/
                    break;
            }
            break;
        case 2:
            /*console.log(`Caso en que el jugador ha escogido 2`)*/
            switch (optMaquina) {
                case 3:
                    $("#scores table tbody").append(`
                    <tr>
                        <td>${ronda}</td>
                        <td><i class="fas fa-times"></i></td>
                        <td></b><i class="fas fa-check"></i></td>
                    </tr>
                    `);
                    /*alert("Perdiste...");*/
                    victoriasMaquina += 1;
                    break;
                case 1:
                    $("#scores table tbody").append(`
                    <tr>
                        <td>${ronda}</td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-times"></i></td>
                    </tr>
                    `);
                    /*alert("¡Ganaste!");*/
                    victoriasJugador += 1;
                    break;
                case 2:
                    $("#scores table tbody").append(`
                    <tr>
                        <td>${ronda}</td>
                        <td><i class="far fa-circle"></i></td>
                        <td><i class="far fa-circle"></i></td>
                    </tr>
                    `);
                    /*alert("Empate");*/
                    break;
            }
            break;
        case 3:
            /*console.log(`Caso en que el jugador ha escogido 3`)*/
            switch (optMaquina) {
                case 1:
                    $("#scores table tbody").append(`
                    <tr>
                        <td>${ronda}</td>
                        <td><i class="fas fa-times"></i></td>
                        <td></b><i class="fas fa-check"></i></td>
                    </tr>
                    `);
                    /*alert("Perdiste...");*/
                    victoriasMaquina += 1;
                    break;
                case 2:
                    $("#scores table tbody").append(`
                    <tr>
                        <td>${ronda}</td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-times"></i></td>
                    </tr>
                    `);
                    /*alert("¡Ganaste!");*/
                    victoriasJugador += 1;
                    break;
                case 3:
                    $("#scores table tbody").append(`
                    <tr>
                        <td>${ronda}</td>
                        <td><i class="far fa-circle"></i></td>
                        <td><i class="far fa-circle"></i></td>
                    </tr>
                    `);
                    /*alert("Empate");*/
                    break;
            }
            break;
    }
}
var ronda = 0;
$(function () {
    //Detener animación de selectores al entrar a la caja que los contiene.
    $(".selector").hover(function () {
        $(".options i").toggleClass("animationOff");
    });
    //Iniciar Juego//
    var numRondas;
    $(document).on("click", "#start, #again", function () {
        //Solicitar al usuario las veces que desea que se repita el juego.
        victoriasJugador = 0;
        victoriasMaquina = 0;
        do {
            numRondas = prompt("Ingrese el número de rondas: ")
            numRondas = parseInt(numRondas)
            if (!(numRondas > 0)) {
                alert("Por favor, ingrese un NÚMERO que sea MAYOR que 0.")
            }
        } while (!(numRondas > 0));
        /*console.log(`El numero de rondas es ${numRondas}`)*/
        ronda = 0
        $("#scores table tbody").html("");
        $(".ventana, #indicadorRonda").html("");
        $(this).css("display", "none");
        $("#resultado").css("display", "none");
        $(".selector, #ventanas, #scores").css("display", "block");
    })

    //Ejecución del código//
    var optJugador;
    $(document).on("click", "#piedra, #papel, #tijera", function () {
        ronda++;
        /*console.log(`Ronda ${ronda}`)*/
        optJugador = $(this).data("opcion-jugador")
        switch (optJugador) {
            case 1:
                $('#ventanaJugador .ventana').html(`<i class="fas fa-hand-rock rotar-z-90"></i>`)
                break;
            case 2:
                $('#ventanaJugador .ventana').html(`<i class="fas fa-hand-paper rotar-z-90"></i>`)
                break;
            case 3:
                $('#ventanaJugador .ventana').html(`<i class="fas fa-hand-scissors rotar-y-180"></i>`)
                break;
        }
        cachipun(optJugador)
        switch (optMaquina) {
            case 1:
                $('#ventanaMaquina .ventana').html(`<i class="fas fa-hand-rock rotar-z-n90"></i>`)
                break;
            case 2:
                $('#ventanaMaquina .ventana').html(`<i class="fas fa-hand-paper rotar-z-n90"></i>`)
                break;
            case 3:
                $('#ventanaMaquina .ventana').html(`<i class="fas fa-hand-scissors"></i>`)
                break;
        }
        $("#indicadorRonda").css("display", "block");
        $("#indicadorRonda").html(`Ronda: ${ronda}/${numRondas}`);
        //Término del Juego
        if (ronda >= numRondas) {
            //Consultar resultado final
            if (victoriasJugador > victoriasMaquina) {
                resultado = "¡Felicidades<br>GANASTE!";
            } else if (victoriasJugador < victoriasMaquina) {
                resultado = "Perdiste...";
            } else {
                resultado = "Empate"
            }
            console.log(`${resultado}`)
            $(".selector").css("display", "none");
            $("#resultado p").html(`${resultado}`);
            $("#resultado").css("display", "block");
            $("#again").css("display", "block")
        }
    })

});


//Muestra de resultados finales












