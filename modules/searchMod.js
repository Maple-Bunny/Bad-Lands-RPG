import {callData, _patchDB} from '../DataBase.js'

async function Async_Search(_bancoTipo, _chave){
    
try {
    //pega o banco de dados certo
    let a;
    let c;

    let listade_de_bancos = {
        "habilidade": [],
        "item": [],
        "classe": [],
        "especie": []
    };

    listade_de_bancos.habilidade=await callData(_patchDB[0].habilidade);
    listade_de_bancos.item=await callData(_patchDB[0].item);
    listade_de_bancos.classe=await callData(_patchDB[0].classe);
    listade_de_bancos.especie=await callData(_patchDB[0].especie);
    console.log(listade_de_bancos);

    if (listade_de_bancos.hasOwnProperty(_bancoTipo)) {
        a = listade_de_bancos[_bancoTipo];
        c = _bancoTipo;
    } else {
        console.error("Tipo de banco é nulo ou indefinido!");
    }

    console.log(a);

    let b = await search_f(a, c, _chave);
    return (b);

} catch (error) {
    console.log(error);
}
}

async function search_f(_banco, _chaveArray, _valor) {
    let result = [];
    let valor_minus = removerAcentos(_valor.toLowerCase()); // Converter o valor pesquisado para minúsculas e remover acentos
    
    for (let index = 0; index < _banco.length; index++) {
        if(_banco[index][_chaveArray]){
            let texto_normalizado = removerAcentos(_banco[index][_chaveArray].toLowerCase());
            if(texto_normalizado.includes(valor_minus)){
                result.push(_banco[index]);
            }
        }
    }
    console.log(result);
    return result;
}

function removerAcentos(_text) {
    return _text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}



export{Async_Search};