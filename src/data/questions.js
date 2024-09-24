const data = [

  // 4 membros da familia
  {
    question: "Como é chamada a irmã da sua mãe?",
    options: ["Aunt", "Sister", "Niece", "Cousin"],
    answer: "Aunt",
  },
  {
    question:
      "Quem é o pai do seu pai?",
    options: ["Uncle", "Grandfather", "Brother-in-law", "Son"],
    answer: "Grandfather",
  },
  {
    question: "Qual o nome dado ao marido da sua filha?",
    options: ["Father-in-law", "Nephew", "Son-in-law", "Cousin"],
    answer: "Son-in-law",
  },
  {
    question: "Quem é o irmão do seu marido ou esposa?",
    options: ["Brother-in-law", "Father-in-law", "Son", "Cousin"],
    answer: "Brother-in-law",
  },

  // 4 cores
  {
    question: "Qual é a cor do céu em um dia claro?",
    options: ["Red", "Green", "Blue", "Yellow"],
    answer: "Blue",
  },
  {
    question: "Qual a cor do sol ao meio-dia?",
    options: ["Orange", "Purple", "Yellow", "Brown"],
    answer: "Yellow",
  },
  {
    question: "Qual é o nome da cor resultante da mistura de vermelho com azul?",
    options: ["Beige", "Purple", "Teal", "Turquoise"],
    answer: "Purple",
  },
  {
    question: "Qual é o nome da cor prata em inglês?",
    options: ["Black", "Violet", "Silver", "White"],
    answer: "Silver",
  },

  // 2 locais da casa
  {
    question: "Onde preparamos as refeições na casa?",
    options: ["Kitchen", "Bedroom", "Bathroom", "Garage"],
    answer: "Kitchen",
  },
  {
    question: "Qual é o cômodo usado para dormir?",
    options: ["Living room", "Bedroom", "Attic", "Hallway"],
    answer: "Bedroom",
  },

  // 2 estacoes do ano
  {
    question: "Qual é a estação mais quente do ano?",
    options: ["Autumn", "Winter", "Spring", "Summer"],
    answer: "Summer",
  },
  {
    question: "Em qual estação as folhas das árvores caem?",
    options: ["Summer", "Autumn", "Winter", "Spring"],
    answer: "Autumn",
  },

  // 4 objeto nao pertence ao ambiente
  {
    question: "Qual desses objetos não pertence à cozinha?",
    options: ["Stove", "Refrigerator", "Bed", "Sink"],
    answer: "Bed",
  },
  {
    question: "Qual desses objetos não pertence ao banheiro?",
    options: ["Mirror", "Shower", "Couch", "Toilet"],
    answer: "Couch",
  },
  {
    question: "Qual desses objetos não pertence ao quarto?",
    options: ["Wardrobe", "Desk", "Blender", "Pillow"],
    answer: "bedroom",
  },
  {
    question: "Qual desses objetos não pertence à sala de estar?",
    options: ["Sofa", "Coffee table", "Oven", "Television"],
    answer: "Oven",
  },

  // 4 wh questions
  {
    question: "Qual pergunta em inglês é usada para perguntar 'Onde'?",
    options: ["What", "Who", "When", "Where"],
    answer: "Where",
  },
  {
    question: "Qual 'wh question' em inglês é usada para perguntar 'O que'?",
    options: ["Why", "What", "How", "Where"],
    answer: "What",
  },
  {
    question: "Qual pergunta em inglês usamos para perguntar 'Por que'",
    options: ["What", "Who", "Why", "Where"],
    answer: "Why",
  },
  {
    question: "Qual 'wh question' é usada para perguntar 'Quando'?",
    options: ["Who", "When", "Why", "How"],
    answer: "When",
  },

  // 4 adjetivos descrever pessoas
  {
    question: "Qual adjetivo em inglês significa 'alto' para descrever uma pessoa?",
    options: ["Short", "Tall", "Small", "Weak"],
    answer: "Tall",
  },
  {
    question: "Qual adjetivo em inglês significa 'inteligente'?",
    options: ["Shy", "Lazy", "Smart", "Angry"],
    answer: "Smart",
  },
  {
    question: "Qual adjetivo em inglês é usado para descrever uma pessoa 'feliz'?",
    options: ["Sad", "Angry", "Happy", "Nervous"],
    answer: "Happy",
  },
  {
    question: "Qual adjetivo em inglês significa 'forte'?",
    options: ["Weak", "Strong", "Calm", "Quiet"],
    answer: "Strong",
  },
  
  // Horas em inglês
  {
    question: "Como se diz 'meio-dia' em inglês?",
    options: ["Midnight", "Morning", "Noon", "Afternoon"],
    answer: "Noon",
  },
  {
    question: "Qual é a forma correta de dizer 'três e meia' em inglês?",
    options: ["Three quarter", "Three thirty", "Thirty-three", "Three o’clock"],
    answer: "Three thirty",
  },
  {
    question: "Como se diz 'cinco para as nove' em inglês?",
    options: ["Nine five", "Five past nine", "Five to nine", "Five after nine"],
    answer: "Five to nine",
  },
  {
    question: "Como se diz '8:15' em inglês?",
    options: ["Eight fifteen", "Eight quarter", "Quarter eight", "Eight fifty"],
    answer: "Eight fifteen",
  },
  
  // Soletrando palavras em inglês
  {
    question: "Como se soletra a palavra 'amigo' em inglês?",
    options: ["F-R-I-E-N-D", "F-R-E-I-N-D", "F-R-I-N-D", "F-R-E-N-D"],
    answer: "F-R-I-E-N-D",
  },
  {
    question: "Como se soletra a palavra 'perfeito' em inglês?",
    options: ["P-E-R-F-E-C-T", "P-E-R-F-E-C-T-E", "P-E-R-F-E-C-T-I", "P-E-R-F-A-C-T"],
    answer: "P-E-R-F-E-C-T",
  },
  {
    question: "Como se soletra a palavra 'animado' em inglês?",
    options: ["E-N-T-H-U-S-I-A-S-T-I-C", "E-N-T-H-U-S-I-A-S-T-I-C-K", "E-N-T-H-E-S-I-A-S-T-I-C", "E-N-T-U-S-I-A-S-T-I-C"],
    answer: "E-N-T-H-U-S-I-A-S-T-I-C",
  },
  {
    question: "Como se soletra a palavra 'necessário' em inglês?",
    options: ["N-E-C-C-E-S-S-A-R-Y", "N-E-C-E-S-S-A-R-Y", "N-E-C-E-S-S-A-R-I", "N-E-C-E-S-S-A-R-E"],
    answer: "N-E-C-E-S-S-A-R-Y",
  },
  
  // Números em inglês
  {
    question: "Como se diz o número 'vinte e cinco' em inglês?",
    options: ["Fifteen", "Fifty-five", "Twenty-five", "Thirty-five"],
    answer: "Twenty-five",
  },
  {
    question: "Qual é a forma correta de dizer o número 'cem' em inglês?",
    options: ["One thousand", "Ten", "One hundred", "One million"],
    answer: "One hundred",
  },
  {
    question: "Como se diz o número 'quarenta e dois' em inglês?",
    options: ["Fourteen two", "Forty-two", "Four two", "Four twenty"],
    answer: "Forty-two",
  },
  {
    question: "Como se diz o número 'sessenta e oito' em inglês?",
    options: ["Sixty-eight", "Seventy-eight", "Six-eight", "Sixty-seven"],
    answer: "Sixty-eight",
  },
  
  // Artigos a ou an
  {
    question: "Qual é o artigo correto para a palavra 'apple' (maçã)?",
    options: ["a apple", "an apple", "a an apple", "no article"],
    answer: "an apple",
  },
  {
    question: "Qual é o artigo correto para a palavra 'dog' (cachorro)?",
    options: ["a dog", "an dog", "a an dog", "no article"],
    answer: "a dog",
  },
  {
    question: "Qual é o artigo correto para a palavra 'hour' (hora)?",
    options: ["a hour", "an hour", "a an hour", "no article"],
    answer: "an hour",
  },
  {
    question: "Qual é o artigo correto para a palavra 'elephant' (elefante)?",
    options: ["a elephant", "an elephant", "a an elephant", "no article"],
    answer: "an elephant",
  },
];

export default data;
