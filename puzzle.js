/* se declara un array de formar global */
let piezas = [0, 1, 2, 3, 4, 5, 6, 7, 8]
/* variable para distinguir si es el primero ckickn o el segundo */
let num_click = 0;
let click_uno = 0;
/* funcion que cuandi se llama hace click en las cosillas */
function seleccionar(casillas) {
    num_click++
    if (num_click == 1) {
        /* guardar registro del click en una posicion */
        click_uno = casillas

    }
    if (num_click == 2) {
        /* declaramos una variable local */
        let click_dos = casillas;
        /* se intercmabia los valores de las casillas del puzzle */
        let intercmabia = piezas[click_uno]
        piezas[click_uno] = piezas[click_dos]
        piezas[click_dos] = intercmabia /* ubicacion del primero con tenido en el sugundo */
        /* reiniciar el num_click para podre realizar otro movimiento  */
        num_click = 0
        /* refrescamos el puzzle */
        moverpluzzle()


    }
    /* creacion de un borde de color morado */
    desmarcar()
    document.getElementById("img_" + casillas).style.border = "solid 3px  rebeccapurple"
}
/* elimina el borde de todas las casillas */
function desmarcar() {
    /* null para quitar el borde o tambien se podria ingresar vacio */
    for (let i = 0; i <= 8; i++) {
        document.getElementById("img_" + i).style.border = null
    }
}
/* desordenar el arrys */

function desordenar() {
    piezas = piezas.sort(function () { return Math.random() - 0.5 })
    console.log(piezas)
}


function moverpluzzle() {
    for (let i = 0; i <= 8; i++) {
        /* obtener el numero de la casilla */
        let imagen = piezas[i]
        /* pinto en la casila i, la imagen  */
        document.getElementById(`img_${i}`).src = `./puzzle/batmapluzze/${imagen + 1}b.jpg`
        /* NOTA:como el array comienza desde 0 y las imaganes estaban desde 1 no tomaba la imagen faltante,para eso ala variable imagen se le agrega un mas 1 para que comiense desde el numero 1 */
    }
}
/* funcion creada para comprobar si el puzzle esta bien posicionada */
function comprobarpuzzle() {
    let comprobar = true
    console.log(piezas)
    for (let i = 0; i <= 8; i++) {
        if (piezas[i] != i) {
            comprobar = false
        }

    }
    if (comprobar == true) {
        alert("puzzle completo")
    } else {
        alert("puzzle incompleto")
    }
}
let boton = document.getElementById("boton");
/* pasar la funcion con un evento a comprobar */


window.onload = function () {
    /*  el queryselectorall toma todos los elementos */
    let arryElemnt = document.querySelectorAll(".imagen");
    /* arrow funcion */
    arryElemnt.forEach((imagenes, index) => {

        /* setAttribute para enviar un atributo y darle un valor, el primero el atributo(onclick) y el seguno es el valor que va a tomar el el atributo */
        imagenes.setAttribute("onclick", `seleccionar(${index})`)
    })

    /* llamos ala función desordenar */
    desordenar()
    /* llamo ala función que va a refrescar el pluzzle */
    moverpluzzle()
}

boton.addEventListener(`click`, comprobarpuzzle)



