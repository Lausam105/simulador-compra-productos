let productos = "";
let total = 0;
let inicio = 0;
let final = 0;
const COMIDAS = [];
const comidaArray = [
{nombre: "PIZZAS", precio: 1200},
{nombre: "HAMBURGUEZAS", precio: 800},
{nombre: "PAPAS", precio: 500},
{nombre: "HAMBURGUEZA ESPECIAL", precio: 1000},
{nombre: "LOMO COMÚN", precio: 1300},
{nombre: "LOMO ESPECIAL", precio: 1800}
]


//Función usando map

function mostrarProductos(){
    const productos = comidaArray.map((nom) => nom.nombre);
    alert("Vea nuestra carta de comidas: " + productos.join("\n"));
}

//Función de orden superior contador

function contador(productos){
    if(productos != 4){
         return () => final += 1; //retorna una función flecha
        }
     }

function restarContador(){
    final = final - final;
    COMIDAS.length = 0;
}     



let miContador = contador(productos);

alert("Bienvenido a nuestro sitio de comidas");
mostrarProductos();


//funcion para comprar productos

function eleccionProducto(){

    productos = Number(prompt("Elige un producto: 1-Pizzas $1200; 2-Hamburguesas $800; 3-Papas Fritas $500; 4-Salir; 5-Cancelar carrito"));
    
    //Aplicando ciclo while y usando switch
    while((productos != 4)){
    switch(productos){

        case 1:
            
            alert("Seleccionaste Pizza");
            COMIDAS.push("pizza"); //Aplicando push a un array vacío
            alert("Tienes: " + miContador() + " productos en el carrito");
            break;

        case 2:
            
            alert("Seleccionaste Hamburguesas");
            COMIDAS.push("hamburgueza"); //Aplicando push a un array vacío
            alert("Tienes: " + miContador() + " productos en el carrito");
            break; 
         
        case 3:
            alert("Seleccionaste Papas fritas");
            COMIDAS.push("papas"); //Aplicando push a un array vacío
            alert("Tienes: " + miContador() + " productos en el carrito");
            break;  
        case 4:
            break;
        
        case 5:
            alert("Carrito vacío");
            restarContador();
            alert("Tienes: " + final + " productos en el carrito");
            break;    
        
            
        default:
            alert("Elegiste un producto no válido, prueba de nuevo");
            break;
    }
    sumaProductos();
    
     productos = Number(prompt("Quieres otro producto?: 1-Pizzas $1200; 2-Hamburguesas $800; 3-Papas Fritas $500; 4-Salir; 5-Cancelar carrito"));
     
     
     
}
    alert("¡Gracias por tu compra!, tu total a pagar es: $" + total + " de " + final + " productos: " + COMIDAS.join("\n")); 
    


}

 

//Uso de condicional

function sumaProductos(){
    if(productos == 1){
        total = total + comidaArray[0].precio; //Accediendo a un array de objetos
        alert("Son: $ " + total);
     }else if(productos == 2){
        total = total + comidaArray[1].precio; //Accediendo a un array de objetos
        alert("Son: $ " + total);
     }else if(productos == 3){
        total = total + comidaArray[2].precio; //Accediendo a un array de objetos
        alert("Son: $ " + total);
     }else if(productos == 5){
        total = total - total;
       
     }
}


eleccionProducto();
