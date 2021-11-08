function iniciar(){
    var p = crearNodo('p', 'nodo p');
    recibirNodos(document.documentElement);
}

function recibirNodos(elem){
    var allNodes = [];
    var nodos = elem.childNodes;

    for(let i = 0; i < nodos.length; i++){
        if(nodos[i].attributes){
            nodos[i] = {tipo: nodos[i].nodeType, atributos: nodos[i].attributes};
            allNodes.push(nodos[i]);
        } else {
            nodos[i] = {tipo: nodos[i].nodeType, atributos: nodos[i].attributes};
            allNodes.push(nodos[i]);
        }
        console.log(allNodes);
        recibirNodos(nodos[i].nodeType);
    }
}

function crearNodo(nodo, inner){
    var nodo = document.createElement(nodo);
    nodo.innerHTML = inner;
    document.body.appendChild(nodo);
    return nodo;
}

window.onload = iniciar;