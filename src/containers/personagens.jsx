import gojoCard from '../img/gojoCard.jpg';
import togeCard from '../img/togeCard.webp';
import itadoriCard from '../img/itadoriCard.jpg';
import kenjakuCard from '../img/kenjakuCard.jpg';
import tojiCard from '../img/tojiCard.jpg';
import aoiCard from '../img/aoiCard.jpg';
import makiCard from '../img/makiCard.png';
import sukunaCard from '../img/sukunaCard.jpg';
import meimeiCard from '../img/meimeiCard.jpg';
import yutaCard from '../img/yutaCard.jpg';
import chosoCard from '../img/chosoCard.webp';

import gojoImg from '../img/gojoImg.jpeg';
import togeImg from '../img/togeImg.jpg';
import itadoriImg from '../img/yujiImg.jpeg';
import kenjakuImg from '../img/kenjakuImg.png';
import tojiImg from '../img/tojiImg.jpeg';
import aoiImg from '../img/aoiImg.jpg';
import makiImg from '../img/makiImg.png';
import sukunaImg from '../img/ryomenImg.jpeg';
import meimeiImg from '../img/meimeiImg.png';
import yutaImg from '../img/yutaImg.png';
import chosoImg from '../img/chosoImg.jpeg';

const personagens = [
  {
    nome: 'Satoru',
    sobrenome: 'Gojo',
    card: gojoCard,
    img: gojoImg,
    descricao: 'Ele é um feiticeiro de jujutsu de grau especial e amplamente reconhecido como o mais forte do mundo. Satoru é o orgulho do Clã Gojo, a primeira pessoa a herdar o Ilimitado e os Seis Olhos em quatrocentos anos. É também o sensei das turmas do 1 e 2 ano de Tokyo e possui uma habilidade onde cada vez que o adversário se aproxima dele, fica mais lento.',
    habilidade: 'Ilimitado',
    habilidade2: 'Azul e Vermelho',
    habilidade4: 'Roxo',
    expansão: 'Muryōkūsho'
  },
  {
    nome: 'Toge',
    sobrenome: 'Inumaki',
    card: togeCard,
    img: togeImg,
    descricao: 'Ele está no segundo ano da Escola Secundária Jujutsu da Prefeitura de Tóquio, faz equipe com Maki Panda e Yuta, Toge possui a habilidade da fala amaldiçoada, por isso quando não está em uma luta, suas palavras se limitam a ingredientes da cozinha japonesa.',
    habilidade: 'Fala amaldiçoada',
    expansão: '-'
  },
  {
    nome: 'Yuji',
    sobrenome: 'Itadori',
    card: itadoriCard,
    img: itadoriImg,
    descricao: 'É o protagonista da série. Filho de Jin Itadori e Kaori Itadori. Após comer um dos dedos selados de Sukuna, Yuji se torna o hospedeiro do Rei das Maldições, mais tarde descobrer ter uma relação direta com ele, além de ser um dos 9 fetos amaldiçoados criado por Kenjaku.',
    habilidade: 'Punho divergente',
    habilidade2: 'Flash negro',
    habilidade3: 'Controle de sangue',
    expansão: '-',
  },
  {
    nome: 'Kenjaku',
    img: kenjakuImg,
    card: kenjakuCard,
    descricao: 'É um dos principais antagonistas de Jujutsu Kaisen. Ele é uma maldição de Grau Especial que possui o corpo de feiticeiros ransplantando seu próprio cérebro para o corpo de seu alvo, roubando suas habilidades, já tendo possuido personagens como Kaori Itadori, mãe de Yuji, atualmente está possuindo o feiticeiro Suguru Geto.',
    habilidade: 'Manipulação de Espíritos Amaldiçoados',
    habilidade2: 'Uzumaki',
    expansão: '-'
  },
  {
    nome: 'Toji',
    sobrenome: 'Fushiguro',
    card: tojiCard,
    img: tojiImg,
    descricao: 'Ex-membro da família Zenin e o infame assassino mercenário, Toji não possuia energia amaldiçoada, mas tinha um pacto com um espirito que guardava as suas armas com energia. Ele também era pai de Megumi Fushiguro e apesar não conseguir usar energia amaldiçoada era extremamente forte fisicamente e inteligente, tendo quase matado Satoru Gojo.',
    habilidade: '-',
    expansão: '-'
  },
  {
    nome: 'Aoi',
    sobrenome: 'Todo',
    card: aoiCard,
    img: aoiImg,
    descricao: 'Está no terceiro ano da Faculdade Técnica Metropolitana de Kyoto. É um feiticeiro de grau 1, sozinho derrotou 6 Espíritos Amaldiçoados durante o ataque Nite Line de Kenjaku em Kyoto. Usando energia amaldiçoada apenas para derrotar o grau especial, o que o deixou bastante famoso na comunidade, Aoi consiera Yuji seu melhor amigo pela preferência de mulher entre os 2 serem parecidas.',
    habilidade: 'Boogie Woogie',
    expansão: '-'
  },
  {
    nome: 'Maki',
    sobrenome: 'Zenin',
    card: makiCard,
    img: makiImg,
    descricao: 'Atualmente no segundo ano da Escola de Jujutsu de Tóquio, Originalmente da Família Zenin, Maki saiu sozinha devido a ser rejeitada por sua falta de Energia Amaldiçoada. Ela estuda para se tornar uma feiticeira forte, apesar de sua própria família trabalhar contra ela.',
    habilidade: '-',
    expansão: '-'
  },
  {
    nome: 'Ryomen',
    sobrenome: 'Sukuna',
    card: sukunaCard,
    img: sukunaImg,
    descricao: 'O Rei das Maldições, possui 2 caras e 4 braços, a maldição mais poderosa do mundo jujutsu e o principal antagonista do anime, ainda na barriga de sua mãe Sukuna dominou o corpo de seu irmão gêmeo para receber todo o poder, seu irmão, mais tarde reencarnou em Jin Itadori, pai do Yuji',
    habilidade: 'Desmantelar',
    habilidade2: 'Flecha de fogo',
    expansão: 'Fukuma Mizushi'
  },
  {
    nome: 'Mei Mei',
    card: meimeiCard,
    img: meimeiImg,
    descricao: 'Ela é uma feiticeira jujutsu de grau 1 que trabalha de forma independente e apenas em troca de dinheiro. Ela também é a irmã mais velha de Ui Ui e foi senpai de Satoru Gojo e Suguru Geto durante seu tempo na Escola Jujutsu.',
    habilidade: 'Controle de corvos',
    expansão: '-'
  },
  {
    nome: 'Yuta',
    sobrenome: 'Okkotsu',
    card: yutaCard,
    img: yutaImg,
    descricao: 'Personagem central da história do filme "Jujutsu Kaisen 0", controla a maldição "Rika" considerada a Rainha das maldições, Yuta possui também a habilidade de copiar técnicas de outros feiticeiros, tendo usado por exemplo a fala amaldiçoada de Toge, Yuta foi um dosmaiores voluntarios na luta contra Sukuna, tendo até mesmo usado o corpo de Gojo depois de morto.',
    habilidade: 'Maldição Rika',
    habilidade2: 'Cópiar técnicas',
    expansão: 'Authentic Mutual Love',
  },
  {
    nome: 'Choso',
    sobrenome: '',
    card: chosoCard,
    img: chosoImg,
    descricao: 'Personagem central da história do filme "Jujutsu Kaisen 0", controla a maldição "Rika" considerada a Rainha das maldições, Yuta possui também a habilidade de copiar técnicas de outros feiticeiros, tendo usado por exemplo a fala amaldiçoada de Toge, Yuta foi um dosmaiores voluntarios na luta contra Sukuna, tendo até mesmo usado o corpo de Gojo depois de morto.',
    habilidade: 'Controle de sangue',
    habilidade2: 'Explosão de sangue',
  },
  
];

export default personagens;
