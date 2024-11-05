import {HabilidadeDB, ItensDB, ClassDB, EspeciesDB} from '../DataBase.js'
const ss = 30;


async function Async_Search(_bancoTipo, _chave){
    
try {
    //pega o banco de dados certo
    let a;

    let listade_de_bancos = {
        "habilidades": HabilidadeDB,
        "itens":ItensDB,
        "classes":ClassDB,
        "especies":EspeciesDB
    };

    if (listade_de_bancos.hasOwnProperty(_bancoTipo)) {
        a = listade_de_bancos[_bancoTipo];
    } else {
        console.error("Tipo de banco é nulo ou indefinido!");
    }

    console.log(a);

    let b = await search_f(a, _chave);
    return (_bancoTipo, b);

} catch (error) {
    console.log(error);
}
}

async function search_f(_tipo, _chave) {
    let indices = [];
    for (let index = 0; index < _tipo.length; index++) {
        if(_tipo[index] === 'string' && _tipo[index].includes(_chave)){
            indices.push(index);
        }
        
    }
    console.log(indices);
    return indices;
}



export{ss, Async_Search};