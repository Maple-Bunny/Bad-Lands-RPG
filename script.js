import {HabilidadeDB, ItensDB, ClassDB, EspeciesDB} from './DataBase.js'
const DB_H = HabilidadeDB;
const DB_I = ItensDB;
const DB_C = ClassDB;
const DB_E = EspeciesDB;

function getFullInfo(item) {
	return [item.Habilidade, item.Custo, item.Descrição, item.Formula, item.Tipo].join(' ');
}  

const HabButton = document.getElementById("Bhabi");
const ItemButton = document.getElementById("BItem");
const ClassButton = document.getElementById("Bclass");
const EspeButton = document.getElementById("Besp");
const VCalcButton = document.getElementById("Bvcalc");
const PCalcButton = document.getElementById("Bpcalc");

HabButton.addEventListener("click", () => {
	console.log("habilidades");
	/*document.getElementById("IPanel").innerHTML = DB_H.map((habilidade) => {
		return `<li>${ getFullInfo(habilidade) }</li>`;
	  }).join('');*/

	  //document.getElementById("table").innerHTML = ""+Render();
	  ClearRender();
	  Render(DB_H,"habilidades");
});

ItemButton.addEventListener("click", () => {
	console.log("Itens");

	  ClearRender();
	  Render(DB_I,"itens");
});

ClassButton.addEventListener("click", () => {
	console.log("Classes");

	  ClearRender();
	  Render(DB_C,"classes");
});

EspeButton.addEventListener("click", () => {
	console.log("especies");

	  ClearRender();
	  Render(DB_E,"especies");
});

VCalcButton.addEventListener("click", () => {
	console.log("calculadora vida");

	  ClearRender();
	  calculadoraRender();
});

PCalcButton.addEventListener("click", () => {
	console.log("calculadora psyon");

	  ClearRender();
	  calculadoraPsyonRender();
});



//Faz o Render da tabela de informações
function Render(_dados,_bancoTipo){
	let resultado = "";
	let table = document.getElementById("table");
	table.className = ("Table");

	try {

		//tipos de bancos de dados
		//habilidades, classes, itens, especies;
		if(_bancoTipo=="habilidades"){
			for(let element of _dados){
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
		}
		if(_bancoTipo=="itens"){
			for(let element of _dados){
				let tr = document.createElement('tr');
				tr.className = "TableRow";
			
				let td1 = document.createElement('td');
				td1.textContent = element.Item;
				td1.className = "TableLine";
				tr.appendChild(td1);
			
				let td2 = document.createElement('td');
				td2.textContent = element.Tipo;
				td2.className = "TableLine";
				tr.appendChild(td2);
			
				let td3 = document.createElement('td');
				td3.textContent = element.Preço;
				td3.className = "TableLine";
				tr.appendChild(td3);
		
				let td4 = document.createElement('td');
				td4.textContent = element.Atributos;
				td4.className = "TableLine";
				tr.appendChild(td4);
		
				let td5 = document.createElement('td');
				td5.textContent = element.Descrição;
				td5.className = "TableLine";
				tr.appendChild(td5);
			
				table.appendChild(tr);
			};
		}
		if(_bancoTipo=="classes"){
			for(let element of _dados){
				let tr = document.createElement('trx');
				tr.className = "CLX";

				let T1 = document.createElement('p');
				T1.innerText = "Classe";
				T1.className = "CLX-T";
				tr.appendChild(T1);
			
				let td1 = document.createElement('td');
				td1.textContent = element.Classe;
				td1.className = "CLXLine";
				tr.appendChild(td1);

				let ci1P = document.createElement('p');
				tr.appendChild(ci1P);

				let T2 = document.createElement('p');
				T2.innerText = "Status";
				T2.className = "CLX-T";
				tr.appendChild(T2);
			
				let td2 = document.createElement('td');
				td2.textContent = element.Status;
				td2.className = "CLXLine";
				tr.appendChild(td2);

				let ci2P = document.createElement('p');
				tr.appendChild(ci2P);

				let T3 = document.createElement('p');
				T3.innerText = "Descrição";
				T3.className = "CLX-T";
				tr.appendChild(T3);
			
				let td3 = document.createElement('td');
				td3.textContent = element.Descrição;
				td3.className = "CLXLine";
				tr.appendChild(td3);

				let ci3P = document.createElement('p');
				tr.appendChild(ci3P);

				let T4 = document.createElement('p');
				T4.innerText = "Itens Iniciais";
				T4.className = "CLX-T";
				tr.appendChild(T4);
		
				let td4 = document.createElement('pre');
				td4.textContent = element.Itens_Iniciais;
				td4.className = "CLXLine-T";
				tr.appendChild(td4);

							

				let ci4P = document.createElement('p');
				tr.appendChild(ci4P);

				let T5 = document.createElement('p');
				T5.innerText = "Habilidades por nivel";
				T5.className = "CLX-T";
				tr.appendChild(T5);
				
				//break on dot
				//let pr = document.createElement('pre');
				let td5 = document.createElement('pre');
				td5.textContent = element.Habilidades_por_Nivel;
				td5.className = "CLXLine-T";
				tr.appendChild(td5);
				//tr.appendChild(pr);

				let T_End = document.createElement('p');
				T_End.innerText = "||========================================================================||";
				T_End.className = "CLX-End";
				tr.appendChild(T_End);


			
				table.appendChild(tr);
			};

			const elements = document.getElementsByClassName("CLXLine-T");
				
			Array.from(elements).forEach(function(element) {
			  //for (let element of elements) {
				let text = element.textContent;
				text = text.replace(/\. /g, ".\n");
				element.textContent = text;
			});
		}
		if(_bancoTipo=="especies"){
			for(let element of _dados){
				let tr = document.createElement('tr');
				tr.className = "TableRow";
			
				let td1 = document.createElement('td');
				td1.textContent = element.Espécie;
				td1.className = "TableLine";
				tr.appendChild(td1);
			
				let td2 = document.createElement('td');
				td2.textContent = element.Status;
				td2.className = "TableLine";
				tr.appendChild(td2);
			
				let td3 = document.createElement('td');
				td3.textContent = element.Descrição;
				td3.className = "TableLine";
				tr.appendChild(td3);
		
				let td4 = document.createElement('td');
				td4.textContent = element.Massa;
				td4.className = "TableLine";
				tr.appendChild(td4);
		
				let td5 = document.createElement('td');
				td5.textContent = element.Altura;
				td5.className = "TableLine";
				tr.appendChild(td5);
			
				table.appendChild(tr);
			};
		}

	} catch (error) {
		console.log(error);
	}

	

	return resultado;
}
//Limpa o Render anterior
function ClearRender(){
	let div = document.getElementById("table");
	while(div.firstChild){
		div.removeChild(div.firstChild);
	}
}

//Faz o Render da calculadora de vida
function calculadoraRender(){
	let table = document.getElementById("table");
	table.className = ("TableCP");

	let calcUI = document.createElement('calcUI');
	calcUI.className = "CalcUI";

	let ci1Text = document.createElement('ci1Text');
	ci1Text.innerText = "Nivel";
	ci1Text.className = "CalcIn";
	calcUI.appendChild(ci1Text);
	let ci1 = document.createElement('INPUT');
	ci1.setAttribute("type", "number");
	ci1.className = "CalcIn";
	ci1.id = "CalcIn1";
	calcUI.appendChild(ci1);
	let ci1P = document.createElement('p');
	calcUI.appendChild(ci1P);

	let ci2Text = document.createElement('ci1Text');
	ci2Text.innerText = "Vida da Classe";
	ci2Text.className = "CalcIn";
	
	calcUI.appendChild(ci2Text);
	let ci2 = document.createElement('INPUT');
	ci2.setAttribute("type", "number");
	ci2.className = "CalcIn";
	ci2.id = "CalcIn2";

	calcUI.appendChild(ci2);
	let ci2P = document.createElement('p');
	calcUI.appendChild(ci2P);

	let ci3Text = document.createElement('ci1Text');
	ci3Text.innerText = "Resistencia";
	ci3Text.className = "CalcIn";
	
	calcUI.appendChild(ci3Text);
	let ci3 = document.createElement('INPUT');
	ci3.setAttribute("type", "number");
	ci3.className = "CalcIn";
	ci3.id = "CalcIn3";

	calcUI.appendChild(ci3);
	let ci3P = document.createElement('p');
	calcUI.appendChild(ci3P);

	let calculateB = document.createElement("button");
	calculateB.className = "CalcB";
	calculateB.innerText = "Calcular";
	calculateB.id = "CalcB";
	calcUI.appendChild(calculateB);

	let cOP = document.createElement('p');
	calcUI.appendChild(cOP);

	let cOText = document.createElement('ci1Text');
	cOText.innerText = "Resultado";
	cOText.className = "CalcIn";
	calcUI.appendChild(cOText);
	
	
	let cO2P = document.createElement('p');
	cO2P.className = "ResultTex";
	cO2P.id = "CalcOut1";
	cO2P.innerText = "";
	calcUI.appendChild(cO2P);



	table.appendChild(calcUI);

	const CalcRButton = document.getElementById("CalcB");

	CalcRButton.addEventListener("click", () => {
		console.log("resultado");
		let x,y,z;
		x = document.getElementById("CalcIn1").value;
		y = document.getElementById("CalcIn2").value;
		z = document.getElementById("CalcIn3").value;

		let r;
		r = document.getElementById("CalcOut1");
		r.innerText = CalcularVida(x,y,z);
	
	});


}

//Faz o Render da calculadora de Psyon
function calculadoraPsyonRender(){
	let table = document.getElementById("table");
	table.className = ("TableCP");

	let calcUI = document.createElement('calcUI');
	calcUI.className = "CalcUI";

	let ci1Text = document.createElement('ci1Text');
	ci1Text.innerText = "Nivel";
	ci1Text.className = "CalcIn";
	calcUI.appendChild(ci1Text);
	let ci1 = document.createElement('INPUT');
	ci1.setAttribute("type", "number");
	ci1.className = "CalcIn";
	ci1.id = "CalcIn1";
	calcUI.appendChild(ci1);
	let ci1P = document.createElement('p');
	calcUI.appendChild(ci1P);

	let ci2Text = document.createElement('ci1Text');
	ci2Text.innerText = "Psyon da Classe";
	ci2Text.className = "CalcIn";
	
	calcUI.appendChild(ci2Text);
	let ci2 = document.createElement('INPUT');
	ci2.setAttribute("type", "number");
	ci2.className = "CalcIn";
	ci2.id = "CalcIn2";

	calcUI.appendChild(ci2);
	let ci2P = document.createElement('p');
	calcUI.appendChild(ci2P);

	let ci3Text = document.createElement('ci1Text');
	ci3Text.innerText = "Inteligencia";
	ci3Text.className = "CalcIn";
	
	calcUI.appendChild(ci3Text);
	let ci3 = document.createElement('INPUT');
	ci3.setAttribute("type", "number");
	ci3.className = "CalcIn";
	ci3.id = "CalcIn3";

	calcUI.appendChild(ci3);
	let ci3P = document.createElement('p');
	calcUI.appendChild(ci3P);

	

	let calculateB = document.createElement("button");
	calculateB.className = "CalcB";
	calculateB.innerText = "Calcular";
	calculateB.id = "CalcB";
	calcUI.appendChild(calculateB);

	let cOP = document.createElement('p');
	calcUI.appendChild(cOP);
	let cOText = document.createElement('ci1Text');
	cOText.innerText = "Resultado";
	cOText.className = "CalcIn";
	calcUI.appendChild(cOText);
	
	


	let cO2P = document.createElement('p');
	cO2P.className = "ResultTex";
	cO2P.id = "CalcOut1";
	cO2P.innerText = "";
	calcUI.appendChild(cO2P);


	


	table.appendChild(calcUI);

	const CalcRButton = document.getElementById("CalcB");

	CalcRButton.addEventListener("click", () => {
		console.log("resultado");
		let x,y,z;
		x = document.getElementById("CalcIn1").value;
		y = document.getElementById("CalcIn2").value;
		z = document.getElementById("CalcIn3").value;

		let r;
		r = document.getElementById("CalcOut1");
		r.innerText = CalcularPsyon(x,y,z);
	
	});


}

//Calcula a vida maxima com base na formula
function CalcularVida(_nivel, _vidaClasse, _resistencia){
	let resultado;

	console.log(Number(_vidaClasse)+Number(_resistencia));
	resultado = Math.floor((Number(_vidaClasse) + Number(_resistencia))*Number(_nivel));

	return resultado;
}

//Calcula o psyon maximo com base na formula
function CalcularPsyon(_nivel, _psyonClasse, _inteligencia){
	let resultado;

	resultado = Math.floor(((Number(_psyonClasse)+Number(_inteligencia))*Number(_nivel))/2);

	return resultado;
}