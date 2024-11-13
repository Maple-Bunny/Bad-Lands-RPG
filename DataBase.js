const _patch = './data/test.json';
const _patchDB = [
	{
		habilidade: './data/habilidade.json',
		item: './data/item.json',
		especie: './data/especie.json',
		classe: './data/classe.json'
	}

]

async function ImportJson(_caminho) {
	try {
		const rep = await fetch(_caminho);
		const _data = await rep.json();

		console.log(_data);
		return _data.data;
	} catch (error) {
		console.error('Erro ao importar JSON:', error);
	}
	
}

async function callData(_caminho) {
	const dados = await ImportJson(_caminho);

	if (dados) { 
		// Faça algo com os dados 
		console.log('Dados importados:', dados);
		return dados;
	} 
	else 
	{ console.error('Falha ao obter os dados JSON.');

	}
}


export{callData, _patchDB};
