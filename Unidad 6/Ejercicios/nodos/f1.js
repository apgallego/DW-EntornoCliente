//array con los tipos de nodos posibles
var tiposNodos = [
    'ELEMENT',
    'ATTR',
    'CDATASection',
    'TEXT',
    'EntityReference',
    'Entity',
    'ProcessingInstruction',
    'COMMENT',
    'DOCUMENT',
    'DocumentType',
    'DocumentFragment',
    'NOTATION'
];


function iniciar(){
    var p = crearNodo('p', 'nodo p');
    recibirNodos(document.documentElement); //debería ser document.documentElement
}

function recibirNodos(elem){
    var allNodes = [];
    var nodos = elem.childNodes;

    for(let i = 0; i < nodos.length; i++){
        console.log('1');
        if(nodos[i].attributes){
            console.log('2.1')
            let nodo = nodos[i];
            let tipo = tiposNodos[nodo.nodeType + 1];
            // let atributos = nodo.attributes;
            let atributos = nodo.attributes.values;
            console.log(atributos);
            let objNode = {tipo: tipo, atributos: atributos};
            allNodes.push(objNode);
            console.log('2.2')
        } else {
            console.log('2.3')
            let tipo = tiposNodos[nodos[i].nodeType + 1];
            let objNode = {tipo: tipo, atributos: null};
            allNodes.push(objNode);
            console.log('2.4')
        }
        console.log('3')
        // recibirNodos(allNodes[i]);
        console.log(allNodes);
        console.log('4')
    }
}

function crearNodo(nodo, inner){
    var nodo = document.createElement(nodo);
    nodo.innerHTML = inner;
    document.body.appendChild(nodo);
    return nodo;
}

window.onload = iniciar;