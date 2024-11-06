import {HabilidadeDB, ItensDB, ClassDB, EspeciesDB} from '../DataBase.js'
const ss = 30;


async function Async_Search(_bancoTipo, _chave){
    
try {
    //pega o banco de dados certo
    let a;
    let c;

    let listade_de_bancos = {
        "habilidade": HabilidadeDB,
        "item":ItensDB,
        "classe":ClassDB,
        "especie":EspeciesDB
    };

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
/*        if(_banco[index][_chaveArray] && _banco[index][_chaveArray].toLowerCase().includes(valor_minus)) {
            result.push(_banco[index]);
       } */

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



export{ss, Async_Search};