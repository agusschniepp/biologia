//Variables
let final = document.getElementById('final');
let boton_start = document.getElementById('start')
let boton_responder = document.getElementById('boton')
let start = document.getElementById('screen-start')
let exam = document.getElementById('screen-exam')
let jugador = document.getElementById('jugador')
let span_jugador = document.getElementById('player')
let screen = document.getElementById('screen-exam')
let tarjeta
let contador = 0;
let aciertos = 0;
let erros = 0;

//Boton iniciar juego
boton_start.addEventListener('click',iniciar)
//
final.style.display = 'none';
exam.style.display = 'none';
boton_start.style.background = '#888';
boton_start.style.pointerEvents = 'none';
//Funcion iniciar juego
function iniciar () {
    start.style.display = "none";
    exam.style.display = 'flex';
    jugador = jugador.value; 
    span_jugador.innerHTML= jugador;
    print_answer()
    examen()
}
//funcion checkear input
document.addEventListener('input', check)
function check () {
    if (jugador.value == '' ) {
        boton_start.style.background = '#888';
        boton_start.style.pointerEvents = 'none';
        
    } else {
        boton_start.style.background = 'rgb(162, 237, 206)';
        boton_start.style.pointerEvents = 'all';
    }

    if (i1.checked == false & i2.checked == false & i3.checked == false & i4.checked == false) {
        boton_responder.style.pointerEvents = 'none';
        boton_responder.style.background = '#888';
    } else {
        boton_responder.style.background = 'rgb(162, 237, 206)';
        boton_responder.style.pointerEvents = 'all';
    }
}

//Funcion Examen
function examen () {
    check ()
    siguiente()
}
// Input respuestas
let i1 = document.getElementById('respuesta-1')
let i2 = document.getElementById('respuesta-2')
let i3 = document.getElementById('respuesta-3')
let i4 = document.getElementById('respuesta-4')
// Respuestas
let r1 = document.getElementById('pregunta-1')
let r2 = document.getElementById('pregunta-2')
let r3 = document.getElementById('pregunta-3')
let r4 = document.getElementById('pregunta-4')
let sorteo = [i1,i2,i3,i4]
let colorsito = [r1,r2,r3,r4]
// funcion limpiar inputs
function clean_inputs () {
    i1.checked = false 
    i2.checked = false
    i3.checked = false
    i4.checked = false
    check ()
}

//Funcion mostrar pregunta
function print_answer () {
    document.getElementById('contador').innerHTML = `${contador}/60`;
    document.getElementById('pregunta').innerHTML = ejercicios[contador].pregunta
    r1.innerHTML = ejercicios[contador].respuestas[0]
    r2.innerHTML = ejercicios[contador].respuestas[1]
    r3.innerHTML = ejercicios[contador].respuestas[2]
    r4.innerHTML = ejercicios[contador].respuestas[3]
}

function check_answer () {
    if (sorteo[ejercicios[contador].correcta].checked == true) {
        aciertos += 1;
        colorsito[ejercicios[contador].correcta].innerHTML += '  ✅'
        colorsito[ejercicios[contador].correcta].style.background = 'rgba(0, 255, 47, 0.2)';
        colorsito[ejercicios[contador].correcta].style.borderRadius = '10px' ;
        boton_responder.innerHTML = 'Siguiente';
        boton_responder.style.background = '#888';
        boton_responder.style.pointerEvents = 'none'
        setTimeout(function() {
            boton_responder.style.background = 'rgb(162, 237, 206)';
            boton_responder.style.pointerEvents = 'all';
        }, 3000);
    } else {
        colorsito[ejercicios[contador].correcta].innerHTML += '  ✅'
        colorsito[ejercicios[contador].correcta].style.background = 'rgba(0, 255, 47, 0.2)';
        colorsito[ejercicios[contador].correcta].style.borderRadius = '10px' ;
        boton_responder.innerHTML = 'Siguiente';
        boton_responder.style.background = '#888';
        boton_responder.style.pointerEvents = 'none'
        setTimeout(function() {
            boton_responder.style.background = 'rgb(162, 237, 206)';
            boton_responder.style.pointerEvents = 'all';
        }, 3000);
       sorteo.forEach((input, index)=>{
        if (input.checked != sorteo[ejercicios[contador].correcta].checked) {
            colorsito[index].innerHTML += '  ❌';
            colorsito[index].style.background = 'rgba(255, 0, 47, 0.2)';
            colorsito[index].style.borderRadius = '10px' ;
        }
       })
       erros += 1;
    }
}

function siguiente() {
    boton_responder.addEventListener('click',()=>{
        if (boton_responder.innerHTML == 'Siguiente') {
            if (contador == 2) {
                start.style.display = "none";
                exam.style.display = "none";
                final.style.display = 'flex'
                background('back-2')
                document.getElementById('correctas').innerHTML = aciertos;
                document.getElementById('incorrectas').innerHTML = erros;
            } else {
            console.log(contador)
            document.getElementById('progress').value += 1,67
            colorsito.forEach((pregunta)=>{
                pregunta.style.background = 'none';
            })
            boton_responder.innerHTML = 'Responder';
            contador++
            print_answer()
            clean_inputs()
        }
        } else if (boton_responder.innerHTML == 'Responder') {
                check_answer ()  
        }
    }) 
}