const PIZZAS = 1200;
const HAMBURGUESAS = 800;
const PAPAS = 500;
let productos = "";
let total = 0;
let inicio = 0;
let final = 0;

//funcion para comprar productos

function eleccionProducto(){

    productos = Number(prompt("Elige un producto: 1-Pizzas $1200; 2-Hamburguesas $800; 3-Papas Fritas $500; 4-Salir; 5-Cancelar carrito"));
    
    //Aplicando ciclo while y usando switch
    while(productos != 4){
    switch(productos){

        case 1:
            
            alert("Seleccionaste Pizza");
            
            break;

        case 2:
            
            alert("Seleccionaste Hamburguesas");
            
            break; 
         
        case 3:
            alert("Seleccionaste Papas fritas");
          
            break;  
        case 4:
            break;
        
        case 5:
            alert("Carrito vacío");
            break;    
        
            
        default:
            alert("Elegiste un producto no válido, prueba de nuevo");
            break;
    }
    sumaProductos();
    contador();
     productos = Number(prompt("Quieres otro producto?: 1-Pizzas $1200; 2-Hamburguesas $800; 3-Papas Fritas $500; 4-Salir; 5-Cancelar carrito"));
     
     
     
}
    alert("¡Gracias por tu compra!, tu total a pagar es: $" + total + " de " + inicio + " productos");   
   

}

//Uso de condicional

function sumaProductos(){
    if(productos == 1){
        total = total + 1200;
        alert("Son: $ " + total);
     }else if(productos == 2){
        total = total + 800;
        alert("Son: $ " + total);
     }else if(productos == 3){
        total = total + 500;
        alert("Son: $ " + total);
     }else if(productos == 5){
        total = total - total;
       
     }
}

//Aplicando ciclo for para un contador de productos

function contador(){
    for(let i = 0; i<= final; i++ ){
     if(productos == 1){
        inicio += 1;
        alert("Tienes: " + inicio + " producto en el carrito");
     }else if(productos == 2){
        inicio += 1;
        alert("Tienes: " + inicio + " productos en el carrito");
     }else if(productos == 3){
        inicio += 1;
        alert("Tienes: " + inicio + " productos en el carrito");
     }else if(productos == 5){
        inicio -= inicio;
        
     }
}
}



eleccionProducto();