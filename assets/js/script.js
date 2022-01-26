//Funcion Cachipún

function cachipun(){
    //1.- Solicitar al usuario las veces que desea que se repita el juego.
    //Exigir que el valor ingresado sea un numero impar para poder obtener un vencedor.
    do {
        var numJugadas=prompt("Ingrese el número de jugadas [debe ser un número impar]: ")
        var numJugadas=parseInt(numJugadas)
        if (numJugadas%2==0) {
            alert("Ha ingresado un número par. Por favor, ingrese un número impar.")
        }
    } while (numJugadas%2==0);
    
    //2.- Ejecución del juego en sí. 
    for (let i = 0; i < numJugadas; i++) {
        //Solicitar al usuario que ingrese su jugada (número del 1 al 3 para piedra, papel, o tijera)
        //Comprobar que el valor ingresado sea 1,2 o 3. De no ser así dar mensaje de alerta y volver a solicitar dato.
        var optJugador;
        do {
            optJugador=prompt("Escoja 1=Piedra      2=Papel     3=Tijera");
            if (optJugador<1 || optJugador>3) {
                alert("Debe escoger una de las opciones indicadas")
            }
        } while (optJugador<1 || optJugador>3);  
        console.log(`El valor escogido por el jugador es ${optJugador}`)
        //Generar jugada de la máquina con función Math.random(), que genera valores entre [0,1)
        var optMaquina=Math.floor(Math.random()*3+1);
        console.log(`El valor escogido por la máquina es ${optMaquina}`)

        /*Comparar jugada del usuario con la de la máquina, definir quien gana y asignar una victoria.
        Para ello se tomará cada posible opcion del jugador y se comparará con cada posible opcion de la máquina.
        Esto da un total de 9 comparaciones a realizar (3 por cada opcion del usuario)*/
        var victoriasJugador=0;
        var victoriasMaquina=0;
        switch (optJugador) {
            case "1":
                console.log(`Caso en que el jugador ha escogido 1`)
                switch (optMaquina) {
                    case 2:
                        alert("Perdiste...");
                        victoriasMaquina+=1;
                        break;
                    case 3:
                        alert("¡Ganaste!");
                        victoriasJugador+=1;
                        break;
                    case 1:
                        alert("Empate");
                        break;
                }
                break;
            case "2":
                console.log(`Caso en que el jugador ha escogido 2`)
                switch (optMaquina) {
                    case 3:
                        alert("Perdiste...");
                        victoriasMaquina+=1;
                        break;
                    case 1:
                        alert("¡Ganaste!");
                        victoriasJugador+=1;
                        break;
                    case 2:
                        alert("Empate");
                        break;
                }
                break;
            case "3":
                console.log(`Caso en que el jugador ha escogido 3`)
                switch (optMaquina) {
                    case 1:
                        alert("Perdiste...");
                        victoriasMaquina+=1;
                        break;
                    case 2:
                        alert("¡Ganaste!");
                        victoriasJugador+=1;
                        break;
                    case 3:
                        alert("Empate");
                        break;
                }
                break;
        }
    }


}

$(function(){
    cachipun()
});











//Por cada juego, se debe mostrar el resultado inmediatamente.