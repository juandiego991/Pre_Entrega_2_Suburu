// CALCULADORA DE PRESTAMOS - PAGOS EN CUOTAS (hasta 10 cuotas)

// el interes mensual de este prestamo es 15%
// El prestamo puede repagarse hasta en 10 cuotas




//Objeto Prestamo:
class prestamo {
    constructor(usuario, monto_solicitado, cantidad_cuotas, intereses){
        this.usuario = usuario;
        this.monto_solicitado = monto_solicitado;
        this.cantidad_cuotas = cantidad_cuotas;
        this.intereses = intereses;
    }
}


// la interfaz debe saber cuantos prestamos queremos simular:
let cantidad_prestamos = prompt("ingrese la cantidad de prestamos a simular");


//Arreglo donde almacenaremos los datos de los prestamos que simulamos:
let lista_prestamos = [];


//iteraciones para simular los prestamos, se hacen con ciclos
for (let i = 0; i < cantidad_prestamos; i = i + 1) {    //cantidad_prestamos es el tope de prestamos que quiero simular y almacenar en el arreglo lista_prestamos:

    let usuario = prompt("ingrese el nombre del usuario que toma el prestamo");
    let monto_solicitado = prompt("ingrese monto del prestamo");
    let cantidad_cuotas = prompt ("ingrese plazo en meses de duracion del repago del prestamo");
    cantidad_cuotas = parseInt(cantidad_cuotas);
    let intereses = interes(monto_solicitado, cantidad_cuotas); //interes viene de la funcion que calcula los intereses del prestamo
    
    let valor_cuota = monto_solicitado / cantidad_cuotas + interes(monto_solicitado, cantidad_cuotas) ;

    console.log("El prestamo de ", usuario, "es de ", monto_solicitado, " y se paga en ", cantidad_cuotas, " cuotas de ",  valor_cuota);

        // funcion que calcula el interes de cada cuota
        function interes (monto_solicitado, cantidad_cuotas){
            
            if (cantidad_cuotas <= 10 && cantidad_cuotas >= 1 && monto_solicitado > 0 ) {
                
            let intereses = (monto_solicitado * 0.15); 
            return intereses;
            }

            else {
                console.log("error en algun valor ingresado");
                }
            }

    let nuevo_prestamo = new prestamo (usuario, monto_solicitado, cantidad_cuotas, intereses);
   
    lista_prestamos.push(nuevo_prestamo);

}

console.log(lista_prestamos);




//Buscar un prestamo de la base de prestamos registrados en el arreglo lista_prestamos
function buscar_prestamo (obj_prestamo){
    return obj_prestamo.usuario == prompt("ingrese el nombre del usuario para el que desea ver el prestamo");
}

let resultado_busqueda = lista_prestamos.find(buscar_prestamo);
console.log("El usuario seleccionado ha tomado un prestamo de: ", resultado_busqueda);



