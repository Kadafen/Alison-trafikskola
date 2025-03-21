export type QuizCategory = 'signs' | 'rules' | 'situations' | 'safety' | 'environment';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  image?: string;
  category: QuizCategory;
}

export const quizQuestions: QuizQuestion[] = [
  // Road Signs
  {
    id: 1,
    question: "Vad betyder detta vägmärke?",
    options: [
      "Huvudled",
      "Väjningsplikt",
      "Stopplikt",
      "Varning för korsning"
    ],
    correctAnswer: 0,
    explanation: "Detta vägmärke indikerar att du kör på en huvudled och har företräde i korsningar.",
    image: "https://images.unsplash.com/photo-1634824361788-925c0155187c",
    category: 'signs'
  },
  {
    id: 2,
    question: "Vad måste du göra när du ser detta vägmärke?",
    options: [
      "Sakta ner och vara beredd att stanna",
      "Stanna helt och fortsätt endast när det är säkert",
      "Sakta ner och ge företräde till trafik från vänster",
      "Öka hastigheten för att ansluta till trafiken"
    ],
    correctAnswer: 1,
    explanation: "Vid ett stoppmärke (oktagonalt rött märke med 'STOP') måste du alltid stanna helt, även om det inte finns någon annan trafik synlig.",
    image: "https://images.unsplash.com/photo-1564950746739-ee78db09b973",
    category: 'signs'
  },
  
  // Traffic Rules
  {
    id: 3,
    question: "Vilken är hastighetsgränsen i tättbebyggt område om inga andra hastighetsskyltar finns?",
    options: [
      "30 km/h",
      "40 km/h",
      "50 km/h",
      "70 km/h"
    ],
    correctAnswer: 2,
    explanation: "I Sverige är hastighetsgränsen i tättbebyggt område 50 km/h om inget annat anges.",
    category: 'rules'
  },
  {
    id: 4,
    question: "När måste du använda körriktningsvisare (blinkers) i en rondell?",
    options: [
      "Bara när du kör in i rondellen",
      "Bara när du lämnar rondellen",
      "Både när du kör in i och lämnar rondellen",
      "Du behöver inte använda blinkers i rondeller"
    ],
    correctAnswer: 1,
    explanation: "I Sverige ska du använda höger blinkers när du lämnar rondellen. Du behöver vanligtvis inte blinka när du kör in i en rondell (vissa förare använder dock vänster blinkers vid ingång för tydlighet).",
    category: 'rules'
  },
  
  // Traffic Situations
  {
    id: 5,
    question: "Du närmar dig en övergång för cyklar och gående. Vad är korrekt?",
    options: [
      "Fordon har alltid företräde framför cyklister",
      "Gående har företräde, men inte cyklister",
      "Både gående och cyklister har företräde",
      "Du har väjningsplikt mot gående, och cyklister ska visa hänsyn"
    ],
    correctAnswer: 3,
    explanation: "Vid ett övergångsställe har du väjningsplikt mot gående. Vid en cykelöverfart ska både bilister och cyklister visa hänsyn, men sedan 2018 har bilister oftast väjningsplikt när de korsar en cykelpassage som är i anslutning till ett övergångsställe.",
    image: "https://images.unsplash.com/photo-1543270317-5fedac2b8a1a",
    category: 'situations'
  },
  {
    id: 6,
    question: "Du kör på en väg med två körfält i samma riktning. Vilket körfält bör du normalt använda?",
    options: [
      "Vänster körfält eftersom det vanligtvis är snabbare",
      "Höger körfält om inte omkörning sker",
      "Det spelar ingen roll, du kan använda vilket som helst",
      "Det beror på trafikmängden"
    ],
    correctAnswer: 1,
    explanation: "I Sverige ska du normalt köra i höger körfält på vägar med flera körfält i samma riktning. Vänster körfält används främst för omkörning.",
    category: 'situations'
  },
  
  // Safety
  {
    id: 7,
    question: "Vad är det säkraste sättet att bära ett barn i en bil?",
    options: [
      "I framsätet med bilbälte",
      "I baksätet med bilbälte",
      "I en bakåtvänd bilbarnstol anpassad för barnets ålder och vikt",
      "I förälders knä med samma bilbälte"
    ],
    correctAnswer: 2,
    explanation: "Barn bör färdas i bakåtvända bilbarnstolar så länge som möjligt, minst till 4 års ålder eller ännu längre. Bakåtvänd position ger bäst skydd för barnets huvud och nacke vid en frontalkollision.",
    category: 'safety'
  },
  {
    id: 8,
    question: "Hur långt avstånd bör du hålla till framförvarande fordon på en landsväg?",
    options: [
      "Minst 1 sekund",
      "Minst 2 sekunder",
      "Minst 3 sekunder",
      "Minst 5 sekunder"
    ],
    correctAnswer: 2,
    explanation: "På landsvägar bör du hålla minst 3 sekunders avstånd till framförvarande fordon. Vid halt väglag eller dålig sikt bör avståndet ökas ytterligare.",
    category: 'safety'
  },
  
  // Environment & Vehicle
  {
    id: 9,
    question: "Vad är bäst för att minska bränsleförbrukningen?",
    options: [
      "Köra med hög hastighet på motorväg",
      "Köra med låg växel i stadstrafik",
      "Planera din körning och undvika onödiga accelerationer och inbromsningar",
      "Köra med halvtomma däck för att minska friktionen"
    ],
    correctAnswer: 2,
    explanation: "En jämn körstil där du undviker onödiga accelerationer och inbromsningar är bäst för bränsleekonomin. Planera din körning i förväg och anpassa hastigheten så att du inte behöver stanna i onödan.",
    category: 'environment'
  },
  {
    id: 10,
    question: "Vilket däcktryck bör du ha i dina däck?",
    options: [
      "Så lågt som möjligt för att få bättre grepp",
      "Det som rekommenderas av fordonstillverkaren",
      "Samma i alla däck oavsett årstid",
      "Så högt som möjligt för att minska bränsleförbrukningen"
    ],
    correctAnswer: 1,
    explanation: "Du bör alltid följa fordonstillverkarens rekommendationer för däcktryck. Dessa finns vanligtvis angivna på en dekal innanför förardörren, i tanklocket eller i instruktionsboken.",
    category: 'environment'
  },
  
  // Malmö-specific situations
  {
    id: 11,
    question: "Vid körning i centrala Malmö, vad måste du vara särskilt uppmärksam på?",
    options: [
      "Endast andra bilister",
      "Endast trafikljus",
      "Främst cyklister och fotgängare",
      "Bara trafiksignaler"
    ],
    correctAnswer: 2,
    explanation: "Malmö har en mycket aktiv cykelkultur med många cykelleder och överfarter. Som bilförare måste du vara särskilt uppmärksam på cyklister som kan komma från olika riktningar, samt fotgängare i det livliga centrumet.",
    image: "https://images.unsplash.com/photo-1556122071-e404eaedb77f",
    category: 'situations'
  },
  {
    id: 12,
    question: "Vad innebär miljözoner i Malmö?",
    options: [
      "Zoner där endast miljöbilar får köra",
      "Områden med särskilda regler för tunga fordon",
      "Områden där parkering är gratis för miljöbilar",
      "Områden med sänkt hastighetsgräns"
    ],
    correctAnswer: 1,
    explanation: "Miljözoner i Malmö och andra svenska städer ställer särskilda krav på tunga fordon (över 3,5 ton) för att begränsa utsläpp. Personbilar påverkas vanligtvis inte, men reglerna kan variera och ändras över tid.",
    category: 'rules'
  }
];

export const getQuestionsByCategory = (category: QuizCategory | 'all'): QuizQuestion[] => {
  if (category === 'all') {
    return quizQuestions;
  }
  return quizQuestions.filter(q => q.category === category);
};

export const getRandomQuestions = (count: number, category: QuizCategory | 'all' = 'all'): QuizQuestion[] => {
  const availableQuestions = getQuestionsByCategory(category);
  const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
}; 