const PIZZAS = 1200;
const HAMBURGUESAS = 800;
const PAPAS = 500;
let productos = "";
let total = 0;

//funcion para comprar productos

function eleccionProducto(){

    productos = Number(prompt("Elige un producto: 1-Pizzas $1200; 2-Hamburguesas $800; 3-Papas Fritas $500; 4-Salir; 5-Cancelar carrito"));
    
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
     productos = Number(prompt("Quieres otro producto?: 1-Pizzas $1200; 2-Hamburguesas $800; 3-Papas Fritas $500; 4-Salir; 5-Cancelar carrito"));
     
     
     
}
    alert("¡Gracias por tu compra!, tu total a pagar es: $" + total);   
   

}



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



eleccionProducto();