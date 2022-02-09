<?php
    setcookie('test_cookie', 'test', time() + 360000, '/');
?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .main-container{
                margin: auto;
                width: 600px;
                height: 350px;
                display: block;
                border: 1px solid black;
                padding: 5px;
            }
            .carrito{
                margin: auto;
                text-align: center;
                width: 100px;
                height: 40px;
                position: relative;
                top: 20px;
                background-color: rgba(255, 150, 0, 0.7);
                border: 1px solid black;
            }
            .carrito:hover{
                background-color: rgba(255, 0, 0, 0.6);
                cursor: pointer;
            }
            .vaciar{
                margin: auto;
                text-align: center;
                width: 50px;
                height: 20px;
                position: relative;
                top: 30px;
                background-color: #999;
                border: 1px solid black;
            }
            .vaciar:hover{
                background-color: #444;
                cursor: pointer;
            }
            .container{
                margin: auto;
                display: flex;
                border: 1px solid black;
                width: 200px;
            }
            .prod{
                margin: auto;
                width: 100%;
                border: 1px solid black;
                text-align: center;
                background-color: rgba(0, 150, 255, 0.3);
            }
            .boton{
                border: 1px solid black;
                width: 20px;
                background-color: rgba(0, 255, 0, 0.5);
            }
            .boton:hover{
                background-color: yellow;
                cursor: pointer;
            }
        </style>
        <script>
            var mainContainer;
            var carrito;
            var botonVaciar;
            const numProductos = 10;
            var contadorProductos = 0;
            var productosHTML = [];
            var productosAñadidos = [];

            function iniciar(){
                mainContainer = crearNodo('div', document.body, 'mainContainer', 'main-container', '');
                for(let i = 0; i < numProductos; i++){
                    let container = crearNodo('div', mainContainer, 'container' + (i + 1), 'container', '');
                    let producto = crearNodo('div', container, 'prod' + (i + 1), 'prod', 'Producto ' + (i + 1));
                    let botonAñadir = crearNodo('div', container, 'boton' + (i + 1), 'boton', '[+]')
                    botonAñadir.addEventListener('click', anadirACarrito);
                    productosHTML.push(producto);
                }
                
                carrito = crearNodo('div', mainContainer, 'carrito', 'carrito', '<b>CARRITO</b>\nCant: ' + contadorProductos);
                botonVaciar = crearNodo('div', mainContainer, 'vaciar', 'vaciar', 'Vaciar');
                let p = crearNodo('p', document.body, 'contenidoCarito', 'cont-carrito', '');
                carrito.addEventListener('click', function (){productosAñadidos.length > 0 ? p.innerHTML = productosAñadidos.join(', ') : p.innerHTML = 'No hay productos';})
                botonVaciar.addEventListener('click', function(){
                    productosAñadidos = [];
                    p.innerHTML = 'No hay productos';
                })
            }

            

            function anadirACarrito(){
                let newItem = this.previousSibling.cloneNode();
                // console.log(newItem);
                productosAñadidos.push(newItem.id);
                contadorProductos++;
                carrito.innerHTML = '<b>CARRITO</b>\nCant: ' + contadorProductos;
            }

            function crearNodo(tipo, padre, id, clase, inner){
                var nodo = document.createElement(tipo);
                if(id != '') nodo.id = id;
                if(clase != '') nodo.className = clase;
                if(inner != '') nodo.innerHTML = inner;
                padre.appendChild(nodo);
                return nodo;
            }

            window.onload = iniciar;
        </script>
    </head>
    <body>
        
    </body>
</html>