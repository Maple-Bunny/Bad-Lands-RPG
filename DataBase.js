const HabilidadeDB = [
	{
		habilidade: "Pele de Pedra",
		custo: "1",
		description: "Faz com que sua Pele ou Armadura fique dura como uma pedra por 2 turnos +1 Armadura + Resistência.",
		form: "+1 Armadura + Resistência",
		tipo: "Buff",
		blank: ""
	},
	{
		habilidade: "Boost",
		custo: "3",
		description: "Melhora por 2 turnos um Status base de outra pessoa em 1 + Inteligencia.",
		form: "+1 + Inteligencia",
		tipo: "Buff",
		blank: ""
	},
	{
		habilidade: "Armadura de Espinhos",
		custo: "2",
		description: "Faz com que sua Armadura reflita o dano recebido em +1 + Resistência.",
		form: "+1 + Resistência",
		tipo: "Def",
		blank: ""
	},
	{
		habilidade: "Escamas Escarlate",
		custo: "2",
		description: "Faz com que sua Pele ou Armadura fique resistente a dano de fogo por 2 turnos.",
		form: "",
		tipo: "Def",
		blank: ""
	},
	{
		habilidade: "Canhão Umbral",
		custo: "5",
		description: "Faz com que seu canhão (Requer canhão) dispare energia Psyon condensada causando 1d10 + Inteligencia ou 1d8 + Resistência",
		form: "Dano 1d10 + Inteligencia ou 1d8 + Resistência. Acerto 1d20 + Destreza",
		tipo: "Atk",
		blank: ""
	},
	{
		habilidade: "Escanear",
		custo: "1",
		description: "Faz o Escaneamento de algum objeto ou entidade para obter alguma característica (Requer Escâner).",
		form: "Teste 1d20 + Inteligencia",
		tipo: "Sup",
		blank: ""
	},
	{
		habilidade: "Reparos menores",
		custo: "1",
		description: "Faz pequenos reparos em armas, armaduras e itens eletromecânicos sem a necessidade de materiais e ferramentas restaurando valor da formula.",
		form: "2d4 + Inteligencia ou 1d6 + Destreza",
		tipo: "Sup",
		blank: ""
	},
	{
		habilidade: "Preparar Torreta",
		custo: "2",
		description: "Prepara uma torreta Automática que possui 15 tiros e um alcance de 15 metros.",
		form: "Dano 1d6 + 2             Vida 18",
		tipo: "Sup",
		blank: ""
	},
	{
		habilidade: "Escudo Sinético",
		custo: "3",
		description: "Cria um escudo em formato de bolha que desacelera projeteis reduzindo o dano em.",
		form: "Redução 1d6 + Inteligencia",
		tipo: "Def",
		blank: ""
	},
	{
		habilidade: "Drone de reconhecimento",
		custo: "1",
		description: "Lança um drone de reconhecimento que localiza e marca pontos de interesse (distancia máxima de 30 metros)",
		form: "Esquiva 15",
		tipo: "Util",
		blank: ""
	},
	{
		habilidade: "Micro Drones",
		custo: "3",
		description: "Lança drones miniaturizados que ficam a sua volta e atacam automaticamente o que você atacar. (Distancia máxima 10 metros),(quantidade de drones 1 + Inteligencia / 2 [Máximo 5])",
		form: "Dano 1d4 + Destreza  Esquiva 15",
		tipo: "Atk",
		blank: ""
	},
	{
		habilidade: "Queda Lenta",
		custo: "1",
		description: "Faz com que alguma coisa caia devagar sem sofre danos de queda por 1 turno.",
		form: "",
		tipo: "Buff",
		blank: ""
	},
	{
		habilidade: "Curar Feridas",
		custo: "2",
		description: "Cura Feridas leves e graves sem a necessidade de medicamentos.",
		form: "Cura 2d6 + Destreza",
		tipo: "Sup",
		blank: ""
	},
	{
		habilidade: "Hackear",
		custo: "4",
		description: "Hackea um mecanismo eletromecânico",
		form: "Teste 1d20 + Inteligencia",
		tipo: "Util",
		blank: ""
	},
	{
		habilidade: "Reparos Maiores",
		custo: "5",
		description: "Recupera Totalmente Armaduras, armas e itens mecânicos ou metade do valor máximo",
		form: "Teste 1d20 + Destreza",
		tipo: "Sup",
		blank: ""
	},
	{
		habilidade: "Camuflar",
		custo: "1",
		description: "A camuflagem te faz ter vantagem em Furtividade.(A camuflagem se desfaz após uma ação de ataque ou uma interação que faça barulho).",
		form: "",
		tipo: "Util",
		blank: ""
	},
	{
		habilidade: "Cortador de plasma",
		custo: "1",
		description: "Corta metais e polímeros com espessura menor que 50 cm.",
		form: "",
		tipo: "Util",
		blank: ""
	},
	{
		habilidade: "Visão Térmica",
		custo: "1",
		description: "Lhe proporciona uma visão térmica que permite distinguir a temperatura de diversas coisas.",
		form: "",
		tipo: "Util",
		blank: ""
	},
	{
		habilidade: "Soco Foguete",
		custo: "3",
		description: "Sua Manopla é propulsionada por propulsão a jato fazendo com que seu soco cause mais dano mas tem uma chance de danificar sua manopla no impacto. (Requer Armadura).",
		form: "Dano 2d8 + Força. Chance de Danificar 50%. Acerto 1d20 + Força",
		tipo: "Atk",
		blank: ""
	},
	{
		habilidade: "Mega Broca",
		custo: "1",
		description: "Perfura rochas e solo de maneira fácil mas pode super aquecer. (Requer Armadura).",
		form: "Chance de Superaquecer 50%",
		tipo: "Util",
		blank: ""
	},
	{
		habilidade: "Atrair",
		custo: "2",
		description: "Atrai a atenção de algum ser vivo lhe dando vantagem em interações sociais por estar mais atraente Dura 3 turnos.",
		form: "",
		tipo: "Sup",
		blank: ""
	},
	{
		habilidade: "Chamar Atenção",
		custo: "1",
		description: "Provoca seu alvo fazendo ele ter foco em você por 5 turnos",
		form: "Teste 1d20 + Inteligencia ou 1d20 + Força.",
		tipo: "Sup",
		blank: ""
	},
	{
		habilidade: "Eletrificar Lâmina",
		custo: "2",
		description: "Torna sua lamina eletricamente carregada causando dano elétrico adicional",
		form: "Dano Adicional 1d6 + Destreza",
		tipo: "Buff",
		blank: ""
	},
	{
		habilidade: "Overclock",
		custo: "5",
		description: "Melhora sua Esquiva e Destreza em 1 ou metade do seu Nível arredondado para baixo.",
		form: "+ Esquiva e Destreza =(Nível / 2 || 1)",
		tipo: "Buff",
		blank: ""
	},
	{
		habilidade: "Radar",
		custo: "1",
		description: "Detecta coisas em movimento em um alcance de máximo de 30 metros.",
		form: "",
		tipo: "Util",
		blank: ""
	},
	{
		habilidade: "Sedução",
		custo: "3",
		description: "Seduz uma criatura viva lhe dando vantagem em testes sociais ou fazendo com que a criatura lhe siga  e faça coisas por você.",
		form: "Teste 1d20 + Inteligencia ou 1d20 + Destreza",
		tipo: "DeBuff",
		blank: ""
	},
	{
		habilidade: "Canhão Ômega",
		custo: "9",
		description: "Seu canhão dispara um laser de energia Psyon que causa dano mas após o disparo precisa resfriar por 2 turnos.",
		form: "Dano 3d8 + Inteligencia ou 4d6 + Resistência Acerto 1d20 + Força",
		tipo: "Atk",
		blank: ""
	},
	{
		habilidade: "Aranha Robô",
		custo: "2",
		description: "Chama uma aranha robô que segue suas instruções e lhe ajuda em ações de reparo e medicina.",
		form: "Possui 10 de Vida e Dura 10 turnos",
		tipo: "Util",
		blank: ""
	},
	{
		habilidade: "Fabricar",
		custo: "2",
		description: "Você fabrica um item que sabe fazer, contendo a chance de ele ser de alta qualidade.",
		form: "Teste 1d20 + Destreza ou 1d20 + Inteligencia",
		tipo: "Util",
		blank: ""
	},
	{
		habilidade: "Melhorar",
		custo: "4",
		description: "Melhora um item eletromecânico ou um equipamento Em um Status de sua escolha (incomum Dif 12), (Raro Dif 16), (Extremo Dif 19) e (Divino Dif 25).",
		form: "Teste 1d20 + Destreza ou Inteligencia.(+1),(+2),(+4),(+6).",
		tipo: "Sup",
		blank: ""
	},
	{
		habilidade: "Forma Delta",
		custo: "10",
		description: "Sua Armadura assume forma Delta por 1d4 turnos fazendo com que todas suas rolagem sejam dobradas.",
		form: "",
		tipo: "Util",
		blank: ""
	},
	{
		habilidade: "Esporos Calmantes",
		custo: "1",
		description: "Solta esporos em um raio de 10 metros fazendo com que quem for atingido fique sem executar movimento ou ataque por 1 turno.",
		form: "Teste 1d20 + Inteligencia",
		tipo: "Sup",
		blank: ""
	},
	{
		habilidade: "Fúria",
		custo: "1",
		description: "Em estado de fúria sua força e Ataque aumentam em +2 mas sua inteligencia e Destreza diminuem em +3.",
		form: "",
		tipo: "Atk",
		blank: ""
	},
	{
		habilidade: "Toque Gelado",
		custo: "2",
		description: "Seu toque congela o que entrar em contado causando dano de gelo.",
		form: "Acerto 1d20 + Inteligencia. Dano 2d6 + Inteligencia",
		tipo: "Atk",
		blank: ""
	},
	{
		habilidade: "Pressa",
		custo: "1",
		description: "Aumenta sua esquiva em +2 e seu movimento em +5 metros. Durante 2 turnos.",
		form: "",
		tipo: "Util",
		blank: ""
	},
	{
		habilidade: "Ignição",
		custo: "2",
		description: "Queima o que você tocar causando dano de fogo.",
		form: "Acerto 1d20 + Inteligencia. Dano 2d6 + Inteligencia",
		tipo: "Atk",
		blank: ""
	},
	{
		habilidade: "Força de Hércules",
		custo: "6",
		description: "Dobra sua força por 1 turno e da vantagem em testes de força.",
		form: "",
		tipo: "Buff",
		blank: ""
	},
	{
		habilidade: "Esporos Paralisantes",
		custo: "2",
		description: "Em um raio de 10 metros solta esporos que podem paralisar coisas orgânicas e maquinas por 1d4 turnos.",
		form: "Teste 1d20 + Inteligencia",
		tipo: "DeBuff",
		blank: ""
	},
	{
		habilidade: "Gás Venenoso",
		custo: "3",
		description: "Um gás toxico e corrosivo que é solto em um raio de 10 metros que causa dano.",
		form: "Veneno 1d4 turnos. Dano 1d6 + Inteligencia",
		tipo: "Atk",
		blank: ""
	},
	{
		habilidade: "Gás Sonífero",
		custo: "2",
		description: "Um gás azul que é solto em um raio de 10 metros que faz o que entrar em contato dormir não podendo fazer ações por 1d4 turnos.",
		form: "Teste 1d20 + Resistência",
		tipo: "DeBuff",
		blank: ""
	}
];

const ItensDB = [
	{
		item: "Inicial",
		tipo: "Inicial",
		custo: "Inicial",
		atributos: "Inicial",
		description: "Inicial",
		blank: ""
	},
	{
		item: "Item",
		tipo: "Tipo",
		custo: "Preço",
		atributos: "Atributos",
		description: "Descrição",
		blank: ""
	},
	{
		item: "Armadura Pesada de Cadete",
		tipo: "Armadura",
		custo: "$50",
		atributos: "[+1 Armadura]",
		description: "Armadura Pesada basica feita para novos recrutas.",
		blank: ""
	},
	{
		item: "Armadura Media de Cadete",
		tipo: "Armadura",
		custo: "$50",
		atributos: "[+1 Armadura]",
		description: "Armadura basica feita para novos recrutas.",
		blank: ""
	},
	{
		item: "Armadura Leve de Cadete",
		tipo: "Armadura",
		custo: "$50",
		atributos: "[+1 Armadura]",
		description: "Armadura Leve basica feita para novos recrutas.",
		blank: ""
	},
	{
		item: "Escopeta AT-07",
		tipo: "Arma",
		custo: "$40",
		atributos: "[Dano 3d4], [Distância 10 Metros]",
		description: "Uma escopeta barata e de facil uso.",
		blank: ""
	},
	{
		item: "Pistola B-03",
		tipo: "Arma",
		custo: "$40",
		atributos: "[Dano 1d4 + 1], [Distancia 20 Metros]",
		description: "Uma pistola simples e barata.",
		blank: ""
	},
	{
		item: "Rifle de caça A-02",
		tipo: "Arma",
		custo: "$60",
		atributos: "[Dano 1d10], [Distância 10-30 Metros]",
		description: "Antigo rifle de caça criado a 7 decadas atrás.",
		blank: ""
	},
	{
		item: "Faca de Sobrevivência",
		tipo: "Faca",
		custo: "$15",
		atributos: "[Dano 1d4]",
		description: "Faca dada a novos recrutas.",
		blank: ""
	},
	{
		item: "Espada Curta de Bronze",
		tipo: "Espada",
		custo: "$25",
		atributos: "[Dano 1d6]",
		description: "Espada Leve feita de bronze.",
		blank: ""
	},
	{
		item: "Espada Longa de bronze",
		tipo: "Espada",
		custo: "$25",
		atributos: "[Dano 1d10]",
		description: "Espada Comum feita de bronze.",
		blank: ""
	},
	{
		item: "Canhão de ombro TX-MK1",
		tipo: "Canhão",
		custo: "$65",
		atributos: "[Dano 1d8], [Distância 15 Metros], [Recarga 2 turnos]",
		description: "Canhão de ombro barato mas pouco potente.",
		blank: ""
	},
	{
		item: "Analgésicos",
		tipo: "Recuperação",
		custo: "$5",
		atributos: "[Recupera 2d4 de Vida se ingerido]",
		description: "Comprimidos usados para aliviar a dor.",
		blank: ""
	},
	{
		item: "Granadas de Flash",
		tipo: "Arremessável",
		custo: "$25",
		atributos: "[10 Metros de raio], [tempo de cegueira 1d4 turnos]",
		description: "Cega temporariamente quem está próximo 10 Metros de raio, tempo de cegueira 1d4 turnos.",
		blank: ""
	},
	{
		item: "Scanner",
		tipo: "Equipamento",
		custo: "$70",
		atributos: "[+1 Para rolagens que visão descobrir algo!]",
		description: "Usado para escanear objetos e entidades.",
		blank: ""
	},
	{
		item: "-------------------------------------------",
		tipo: "-------------------",
		custo: "-----------------------",
		atributos: "--------------------------------------------------------------",
		description: "-----------------------------------------------------------------",
		blank: ""
	},
	{
		item: "Materiais",
		tipo: "Materiais",
		custo: "Materiais",
		atributos: "Materiais",
		description: "Materiais",
		blank: ""
	},
	{
		item: "Itens  Comuns",
		tipo: "Tipo",
		custo: "Preço",
		atributos: "Atributos",
		description: "Descrição",
		blank: ""
	},
	{
		item: "Bandagens",
		tipo: "Recuperação",
		custo: "$1",
		atributos: "[Recupera 1d4 de Vida]",
		description: "Bandagens usadas para tapar ferimentos.",
		blank: ""
	}
]

const ClassDB = [
	{
		classe: "Defensor",
		icon: "defender.png",
		status: "[+2 de Resistência] [+1 em Armadura]\n",
		description: "O Defensor protege a equipe e tem vários recursos para se proteger e resistir a um grande número de danos.\r\nDefensores usam uma armadura mais espessa, por isso possuem uma mobilidade menor, possui canhões de ombro e grande resistência a impactos.",
		itens_iniciais: "Armadura Pesada de Cadete (+1 Armadura, valor $50).\r\n\r\n[ Escopeta AT-07 (Dano 3d4, Distância 10 Metros, valor $40).\r\nOu\r\nEspada Longa de bronze (Dano 1d10, valor $25) ]\r\n\r\nCanhão de ombro TX-MK1 (Dano 1d8, Distância 15 Metros, Recarga 2 turnos, valor $65).\r\n\r\nMochila com 4 Espaços.\r\nX2 Analgésicos (cura 2d4 se ingerido).\r\n$10 de dinheiro.",
		habilidades_por_nivel: "\r\n\r\nNível 1:\r\nPele de Pedra.\r\nNível 2:\r\nIgnição.\r\n1 Ponto Delta.\r\nNível 3:\r\nToque Gelado\r\nNível 4:\r\nEletrificar Lâmina.\r\nMega Broca.\r\n1 Ponto Delta.\r\nNível 5:\r\nEscudo Sinético.\r\nNível 6:\r\nSoco Foguete.\r\n1 Ponto Delta.\r\nNível 7:\r\nCanhão Umbral.\r\nNível 8:\r\nForça de Hércules.\r\n1 Ponto Delta.\r\nNível 9:\r\nCanhão Ômega.\r\nNível 10:\r\nForma Delta.\r\n1 Ponto Delta.\r\n",
		blank: ""
	},
	{
		classe: "Engenheiro",
		icon: "enginer.png",
		status: "[+1 de Destreza] [+2 em Inteligência]",
		description: "O Engenheiro fabrica e melhora itens, armas, e acessórios, além de poder fazer reparos em drones, torretas automáticas, armas, armaduras e itens. Também pode oferecer suporte médico básico e intermediário.",
		itens_iniciais: "Armadura Media de Cadete (+1 Armadura, valor $50).\r\n\r\n[ Pistola B-03 (Dano 1d4 + 1, Distancia 20 Metros, valor $40).\r\nOu\r\nEspada Curta de Bronze (Dano 1d6, valor $25) ]\r\n\r\nCanhão de ombro TX-MK1 (Dano 1d8, Distância 15 Metros, Recarga 2 turnos, valor $65).\r\n\r\nMochila com 4 Espaços.\r\nX2 Analgésicos (cura 2d4 se ingerido).\r\n$10 de dinheiro.",
		habilidades_por_nivel: "Nível 1:\r\nBoost.\r\nNível 2:\r\nReparos menores.\r\n1 Ponto Delta.\r\nNível 3:\r\nPreparar Torreta.\r\nAranha Robô.\r\nNível 4:\r\nFabricar.\r\nCurar Feridas.\r\nHackear.\r\n1 Ponto Delta.\r\nNível 5:\r\nMelhorar\r\nNível 6:\r\nCortador de plasma.\r\n1 Ponto Delta.\r\nNível 7:\r\nCanhão Umbral.\r\nNível 8:\r\nReparos Maiores\r\n1 Ponto Delta.\r\nNível 9:\r\nCanhão Ômega.\r\nNível 10:\r\nForma Delta.\r\n1 Ponto Delta.\r\n",
		blank: ""
	},
	{
		classe: "Ranger",
		icon: "ranger.png",
		status: "[+1 de Esquiva] [+2 em Destreza]\n",
		description: "O  Ranger é aquele que explora e faz reconhecimento coletando informações para a equipe contendo bastante mobilidade, mas em contrapartida usa menos blindagem o que deixa o mesmo menos resistente.",
		itens_iniciais: "Armadura Leve de Cadete (+1 Armadura, valor $50).\r\n\r\n[ Rifle de caça A-02 (Dano 1d10, Distância 10-30 Metros, valor $60).\r\nE\r\nFaca de Sobrevivência (Dano 1d4, valor $15) ].\r\n\r\nMochila com 4 Espaços.\r\nX3 Analgésicos (cura 2d4 se ingerido).\r\nX2 Granadas de Flash (Cega temporariamente quem está próximo 10 Metros de raio, tempo de cegueira 1d4 turnos).\r\nX1 Scanner.\r\n$10 de dinheiro.",
		habilidades_por_nivel: "Nível 1:\r\nDrone de reconhecimento.\r\nNível 2:\r\nEscanear.\r\n1 Ponto Delta.\r\nNível 3:\r\nQueda Lenta.\r\nCamuflar.\r\nNível 4:\r\nOverclock\r\n1 Ponto Delta.\r\nNível 5:\r\nVisão Térmica.\r\nNível 6:\r\nRadar.\r\n1 Ponto Delta.\r\nNível 7:\r\nGás Venenoso.\r\nNível 8:\r\nFúria.\r\n1 Ponto Delta.\r\nNível 9:\r\nEletrificar Lâmina.\r\nNível 10:\r\nForma Delta.\r\n1 Ponto Delta.\r\n",
		blank: ""
	}
]

const EspeciesDB = [
	{
		especie: "Lâmias",
		status: "[+1 de Inteligência.]\n[+2 de sorte.]\n[12 de Esquiva.]\n",
		description: "Uma Lâmia possui um torso humanoide e cauda de serpente, orelhas pontudas e geralmente são ótimas nadadoras.\nPodem ter de 80 a 160 kg, acima disso são considerados obesos e recebem desvantagem em tudo que envolve esforço físico e abaixo disso ficam doentes com facilidade.",
		mass: "80kg - 160kg",
		altura: "150cm - 500cm",
		blank: ""
	},
	{
		especie: "Elfos",
		status: "[+1 de Inteligência.]\n[+2 de Destreza.]\n[15 de Esquiva.]",
		description: "Elfos possuem diversas variações e tamanhos mas geralmente tem mais de 170 cm de altura, magros e ágeis.\nPodem ter de 55 a 80 kg, acima disso são considerados obesos e recebem desvantagem em tudo que envolve esforço físico e abaixo disso ficam doentes com facilidade.",
		mass: "55kg - 80kg",
		altura: "Media de 170cm",
		blank: ""
	},
	{
		especie: "Assarianos",
		status: "[+2 de Inteligência.]\n[+1 de Força.]\n[14 de Esquiva.]\n",
		description: "Assarianos possuem pele azulada e cabelo de tentáculos geralmente são fêmeas ou intersexo e têm entre 135 a 180 cm de altura, são bem fortes além de possuírem um ótimo controle de Psyon.\nPodem ter de 38 a 80 kg, acima disso são considerados obesos e recebem desvantagem em tudo que envolve esforço físico e abaixo disso ficam doentes com facilidade.",
		mass: "38kg - 80kg",
		altura: "135cm - 180cm",
		blank: ""
	},
	{
		especie: "Beliais",
		status: "[+2 de Resistência]\n[+1 de Força.]\n[13 de Esquiva.]",
		description: "\nBeliais possuem pele coberta por pêlos são fortes e resistentes na maioria das vezes possuem entre 110 a 200 cm de altura, são bem variados em cores e tamanhos.\nPodem ter de 24 a 120 kg, acima disso são considerados obesos e recebem desvantagem em tudo que envolve esforço físico e abaixo disso ficam doentes com facilidade.",
		mass: "24kg - 120kg",
		altura: "110cm - 200cm",
		blank: ""
	}
]

export{HabilidadeDB, ItensDB, ClassDB, EspeciesDB};
