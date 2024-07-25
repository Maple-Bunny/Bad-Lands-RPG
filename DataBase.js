const HabilidadeDB = [
  {
    Habilidade: "Habilidade",
    Custo: "Custo",
    Descrição: "Descrição",
    Formula: "Formula",
    Tipo: "Tipo"
  },
  {
    Habilidade: "Pele de Pedra",
    Custo: "1",
    Descrição: "Faz com que sua Pele ou Armadura fique dura como uma pedra por 2 turnos +1 Armadura + Resistência.",
    Formula: "+1 Armadura + Resistência",
    Tipo: "Buff"
  },
  {
    Habilidade: "Boost",
    Custo: "3",
    Descrição: "Melhora por 2 turnos um Status base de outra pessoa em 1 + Inteligencia.",
    Formula: "+1 + Inteligencia",
    Tipo: "Buff"
  },
  {
    Habilidade: "Armadura de Espinhos",
    Custo: "2",
    Descrição: "Faz com que sua Armadura reflita o dano recebido em +1 + Resistência.",
    Formula: "+1 + Resistência",
    Tipo: "Def"
  },
  {
    Habilidade: "Escamas Escarlate",
    Custo: "2",
    Descrição: "Faz com que sua Pele ou Armadura fique resistente a dano de fogo por 2 turnos.",
    Formula: "",
    Tipo: "Def"
  },
  {
    Habilidade: "Canhão Umbral",
    Custo: "5",
    Descrição: "Faz com que seu canhão (Requer canhão) dispare energia Psyon condensada causando 1d10 + Inteligencia ou 1d8 + Resistência  ",
    Formula: "Dano 1d10 + Inteligencia ou 1d8 + Resistência. Acerto 1d20 + Destreza",
    Tipo: "Atk"
  },
  {
    Habilidade: "Escanear",
    Custo: "1",
    Descrição: "Faz o Escaneamento de algum objeto ou entidade para obter alguma característica (Requer Escâner).",
    Formula: "Teste 1d20 + Inteligencia",
    Tipo: "Sup"
  },
  {
    Habilidade: "Reparos menores",
    Custo: "1",
    Descrição: "Faz pequenos reparos em armas, armaduras e itens eletromecânicos sem a necessidade de materiais e ferramentas restaurando valor da formula.",
    Formula: "2d4 + Inteligencia ou 1d6 + Destreza",
    Tipo: "Sup"
  },
  {
    Habilidade: "Preparar Torreta",
    Custo: "2",
    Descrição: "Prepara uma torreta Automática que possui 15 tiros e um alcance de 15 metros.",
    Formula: "Dano 1d6 + 2             Vida 18",
    Tipo: "Sup"
  },
  {
    Habilidade: "Escudo Sinético",
    Custo: "3",
    Descrição: "Cria um escudo em formato de bolha que desacelera projeteis reduzindo o dano em.",
    Formula: "Redução 1d6 + Inteligencia",
    Tipo: "Def"
  },
  {
    Habilidade: "Drone de reconhecimento",
    Custo: "1",
    Descrição: "Lança um drone de reconhecimento que localiza e marca pontos de interesse (distancia máxima de 30 metros)",
    Formula: "Esquiva 15",
    Tipo: "Util"
  },
  {
    Habilidade: "Micro Drones",
    Custo: "3",
    Descrição: "Lança drones miniaturizados que ficam a sua volta e atacam automaticamente o que você atacar. (Distancia máxima 10 metros),(quantidade de drones 1 + Inteligencia / 2 [Máximo 5])",
    Formula: "Dano 1d4 + Destreza  Esquiva 15",
    Tipo: "Atk"
  },
  {
    Habilidade: "Queda Lenta",
    Custo: "1",
    Descrição: "Faz com que alguma coisa caia devagar sem sofre danos de queda por 1 turno.",
    Formula: "",
    Tipo: "Buff"
  },
  {
    Habilidade: "Curar Feridas",
    Custo: "2",
    Descrição: "Cura Feridas leves e graves sem a necessidade de medicamentos.",
    Formula: "Cura 2d6 + Destreza",
    Tipo: "Sup"
  },
  {
    Habilidade: "Hackear",
    Custo: "4",
    Descrição: "Hackea um mecanismo eletromecânico",
    Formula: "Teste 1d20 + Inteligencia",
    Tipo: "Util"
  },
  {
    Habilidade: "Reparos Maiores",
    Custo: "5",
    Descrição: "Recupera Totalmente Armaduras, armas e itens mecânicos ou metade do valor máximo",
    Formula: "Teste 1d20 + Destreza",
    Tipo: "Sup"
  },
  {
    Habilidade: "Camuflar",
    Custo: "1",
    Descrição: "A camuflagem te faz ter vantagem em Furtividade.(A camuflagem se desfaz após uma ação de ataque ou uma interação que faça barulho).",
    Formula: "",
    Tipo: "Util"
  },
  {
    Habilidade: "Cortador de plasma",
    Custo: "1",
    Descrição: "Corta metais e polímeros com espessura menor que 50 cm.",
    Formula: "",
    Tipo: "Util"
  },
  {
    Habilidade: "Visão Térmica",
    Custo: "1",
    Descrição: "Lhe proporciona uma visão térmica que permite distinguir a temperatura de diversas coisas.",
    Formula: "",
    Tipo: "Util"
  },
  {
    Habilidade: "Soco Foguete",
    Custo: "3",
    Descrição: "Sua Manopla é propulsionada por propulsão a jato fazendo com que seu soco cause mais dano mas tem uma chance de danificar sua manopla no impacto. (Requer Armadura).",
    Formula: "Dano 2d8 + Força. Chance de Danificar 50%. Acerto 1d20 + Força",
    Tipo: "Atk"
  },
  {
    Habilidade: "Mega Broca",
    Custo: "1",
    Descrição: "Perfura rochas e solo de maneira fácil mas pode super aquecer. (Requer Armadura).",
    Formula: "Chance de Superaquecer 50%",
    Tipo: "Util"
  },
  {
    Habilidade: "Atrair",
    Custo: "2",
    Descrição: "Atrai a atenção de algum ser vivo lhe dando vantagem em interações sociais por estar mais atraente Dura 3 turnos.",
    Formula: "",
    Tipo: "Sup"
  },
  {
    Habilidade: "Chamar Atenção",
    Custo: "1",
    Descrição: "Provoca seu alvo fazendo ele ter foco em você por 5 turnos",
    Formula: "Teste 1d20 + Inteligencia ou 1d20 + Força.",
    Tipo: "Sup"
  },
  {
    Habilidade: "Eletrificar Lâmina",
    Custo: "2",
    Descrição: "Torna sua lamina eletricamente carregada causando dano elétrico adicional",
    Formula: "Dano Adicional 1d6 + Destreza",
    Tipo: "Buff"
  },
  {
    Habilidade: "Overclock",
    Custo: "5",
    Descrição: "Melhora sua Esquiva e Destreza em 1 ou metade do seu Nível arredondado para baixo.",
    Formula: "+ Esquiva e Destreza =(Nível / 2 || 1)",
    Tipo: "Buff"
  },
  {
    Habilidade: "Radar",
    Custo: "1",
    Descrição: "Detecta coisas em movimento em um alcance de máximo de 30 metros.",
    Formula: "",
    Tipo: "Util"
  },
  {
    Habilidade: "Sedução",
    Custo: "3",
    Descrição: "Seduz uma criatura viva lhe dando vantagem em testes sociais ou fazendo com que a criatura lhe siga  e faça coisas por você.",
    Formula: "Teste 1d20 + Inteligencia ou 1d20 + Destreza",
    Tipo: "DeBuff"
  },
  {
    Habilidade: "Canhão Ômega",
    Custo: "9",
    Descrição: "Seu canhão dispara um laser de energia Psyon que causa dano mas após o disparo precisa resfriar por 2 turnos.",
    Formula: "Dano 3d8 + Inteligencia ou 4d6 + Resistência Acerto 1d20 + Força",
    Tipo: "Atk"
  },
  {
    Habilidade: "Aranha Robô",
    Custo: "2",
    Descrição: "Chama uma aranha robô que segue suas instruções e lhe ajuda em ações de reparo e medicina. ",
    Formula: "Possui 10 de Vida e Dura 10 turnos",
    Tipo: "Util"
  },
  {
    Habilidade: "Fabricar",
    Custo: "2",
    Descrição: "Você fabrica um item que sabe fazer, contendo a chance de ele ser de alta qualidade.",
    Formula: "Teste 1d20 + Destreza ou 1d20 + Inteligencia",
    Tipo: "Util"
  },
  {
    Habilidade: "Melhorar",
    Custo: "4",
    Descrição: "Melhora um item eletromecânico ou um equipamento Em um Status de sua escolha (incomum Dif 12), (Raro Dif 16), (Extremo Dif 19) e (Divino Dif 25).",
    Formula: "Teste 1d20 + Destreza ou Inteligencia.(+1),(+2),(+4),(+6).",
    Tipo: "Sup"
  },
  {
    Habilidade: "Forma Delta",
    Custo: "10",
    Descrição: "Sua Armadura assume forma Delta por 1d4 turnos fazendo com que todas suas rolagem sejam dobradas. ",
    Formula: "",
    Tipo: "Util"
  },
  {
    Habilidade: "Esporos Calmantes",
    Custo: "1",
    Descrição: "Solta esporos em um raio de 10 metros fazendo com que quem for atingido fique sem executar movimento ou ataque por 1 turno.",
    Formula: "Teste 1d20 + Inteligencia",
    Tipo: "Sup"
  },
  {
    Habilidade: "Fúria",
    Custo: "1",
    Descrição: "Em estado de fúria sua força e Ataque aumentam em +2 mas sua inteligencia e Destreza diminuem em +3.",
    Formula: "",
    Tipo: "Atk"
  },
  {
    Habilidade: "Toque Gelado",
    Custo: "2",
    Descrição: "Seu toque congela o que entrar em contado causando dano de gelo.",
    Formula: "Acerto 1d20 + Inteligencia. Dano 2d6 + Inteligencia ",
    Tipo: "Atk"
  },
  {
    Habilidade: "Pressa",
    Custo: "1",
    Descrição: "Aumenta sua esquiva em +2 e seu movimento em +5 metros. Durante 2 turnos.",
    Formula: "",
    Tipo: "Util"
  },
  {
    Habilidade: "Ignição",
    Custo: "2",
    Descrição: "Queima o que você tocar causando dano de fogo.",
    Formula: "Acerto 1d20 + Inteligencia. Dano 2d6 + Inteligencia ",
    Tipo: "Atk"
  },
  {
    Habilidade: "Força de Hércules",
    Custo: "6",
    Descrição: "Dobra sua força por 1 turno e da vantagem em testes de força.",
    Formula: "",
    Tipo: "Buff"
  },
  {
    Habilidade: "Esporos Paralisantes",
    Custo: "2",
    Descrição: "Em um raio de 10 metros solta esporos que podem paralisar coisas orgânicas e maquinas por 1d4 turnos.",
    Formula: "Teste 1d20 + Inteligencia",
    Tipo: "DeBuff"
  },
  {
    Habilidade: "Gás Venenoso",
    Custo: "3",
    Descrição: "Um gás toxico e corrosivo que é solto em um raio de 10 metros que causa dano.",
    Formula: "Veneno 1d4 turnos. Dano 1d6 + Inteligencia",
    Tipo: "Atk"
  },
  {
    Habilidade: "Gás Sonífero",
    Custo: "2",
    Descrição: "Um gás azul que é solto em um raio de 10 metros que faz o que entrar em contato dormir não podendo fazer ações por 1d4 turnos.",
    Formula: "Teste 1d20 + Resistência",
    Tipo: "pdf "
  }
];

export{HabilidadeDB};
