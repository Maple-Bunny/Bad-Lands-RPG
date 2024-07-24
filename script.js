import {HabilidadeDB} from './DataBase.js'
const DB_H = HabilidadeDB;

function getFullInfo(item) {
	return [item.Habilidade, item.Custo, item.Descrição, item.Formula, item.Tipo].join(' ');
}  

const HabButton = document.getElementById("Bhabi");

HabButton.addEventListener("click", () => {
	console.log(DB_H);
	/*document.getElementById("IPanel").innerHTML = DB_H.map((habilidade) => {
		return `<li>${ getFullInfo(habilidade) }</li>`;
	  }).join('');*/

	  //document.getElementById("table").innerHTML = ""+Render();
	  ClearRender();
	  Render();
});

function Render(){
	let resultado = "";
	let table = document.getElementById("table");

	for(let element of DB_H){
		let tr = document.createElement('tr');
		tr.className = "TableRow";
	
		let td1 = document.createElement('td');
		td1.textContent = element.Habilidade;
		td1.className = "TableLine";
		tr.appendChild(td1);
	
		let td2 = document.createElement('td');
		td2.textContent = element.Custo;
		td2.className = "TableLine";
		tr.appendChild(td2);
	
		let td3 = document.createElement('td');
		td3.textContent = element.Descrição;
		td3.className = "TableLine";
		tr.appendChild(td3);

		let td4 = document.createElement('td');
		td4.textContent = element.Formula;
		td4.className = "TableLine";
		tr.appendChild(td4);

		let td5 = document.createElement('td');
		td5.textContent = element.Tipo;
		td5.className = "TableLine";
		tr.appendChild(td5);
	
		table.appendChild(tr);
	};

	return resultado;
}

function ClearRender(){
	let div = document.getElementById("table");
	while(div.firstChild){
		div.removeChild(div.firstChild);
	}
}
