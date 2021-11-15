/*
lenguaje: .nodeType, .attributes, .childNodes

*/
var txt = ''; // montamos aqui el html
var nivel = 0; // nivel de identacion
var z = 0; // contador de nodos 
var g = '. . . . . '; // espaciadores para identar

function inicio() {
	console.log('inicio');
	var ele = document.documentElement; // nodo raiz
	analiza(ele);
	txt += '<br/>total de nodos: ' + z;
	txt += '<br/>nota: la funcion de js escribe dentro del div id=d1';
	document.getElementById('d1').innerHTML = txt;
}
function analiza(a) {
	z += 1;
	nivel += 1;
	printNode(a); // formatea e imprime el nodo
	var r = a.childNodes; // obtener los nodos hijos
	for (x of r) {
		txt += g.repeat(nivel); // crea la identacion 
		analiza(x);
	}
	nivel -= 1;
}
function printNode(a) {
	// tipos de nodos
	var tipos = ['0', 'ELE', 'ATT', 'TXT', 'CDA', 'EREF', 'ENT', 'PRO', 'COM', 'DOC', 'DCT', 'DOF', 'NOT'];
	var output = '';
	if (a.nodeType == 1) { // nodeType: tipo de nodo ver tipos[]
		var at = a.attributes; // lista de atributos de un nodo 
		var lon = at.length;
		for (var i = lon - 1; i >= 0; i--) {
			output += putDiv(at[i].name + "=" + at[i].value + ';', 'attr'); // nombre y valor de un atributo
		}
	}
	if (a.nodeType == 3) {
		if (a.data.length <= 2) {
			output += putDiv('vacio len=' + a.data.length, 'vacio');
		} else {
			output += putDiv(a.data, 'txt');
		}
	}
	txt += putDiv(a.nodeName + ' (' + tipos[a.nodeType] + ')', 'ele') + output + '<br/>'; // nodeName	

}
function putDiv(inner, clase) {
	return '<div class="' + clase + '">' + inner + '</div>';
}