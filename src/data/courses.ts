export interface Course {
  id: number;
  title: string;
  description: string;
  features: string[];
  price: number;
  duration: string;
  image: string;
  popular?: boolean;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Introduktionspaket",
    description: "Perfekt för dig som vill prova på körning och se om Ali är rätt körlärare för dig.",
    features: [
      "2 körlektioner à 40 minuter",
      "Personlig utvärdering",
      "Plan för fortsatt utbildning",
      "Gratis teorimaterial under provperioden"
    ],
    price: 1200,
    duration: "2 lektioner",
    image: "/images/courses/intro.jpg"
  },
  {
    id: 2,
    title: "Standardpaket",
    description: "Det mest populära alternativet för nya förare som vill ta B-körkort.",
    features: [
      "15 körlektioner à 40 minuter",
      "Teoripaket med online-tillgång",
      "5 teorilektioner i grupp",
      "Riskettan (riskettor)",
      "Risktvåan (halkbana)",
      "Handledning inför uppkörning"
    ],
    price: 13500,
    duration: "15-20 veckor",
    image: "/images/courses/standard.jpg",
    popular: true
  },
  {
    id: 3,
    title: "Intensivkurs",
    description: "För dig som behöver ta körkort snabbt och kan fokusera heltid på din körkortsutbildning.",
    features: [
      "20 körlektioner à 40 minuter (koncentrerat)",
      "Teoripaket med online-tillgång",
      "Intensiv teorigenomgång",
      "Riskettan (riskettor)",
      "Risktvåan (halkbana)",
      "Boka uppkörning och teoriprov",
      "Extra handledning inför proven"
    ],
    price: 18000,
    duration: "2-3 veckor",
    image: "/images/courses/intensive.jpg"
  },
  {
    id: 4,
    title: "Körkortskonvertering",
    description: "För dig med utländskt körkort som behöver konvertera till svenskt körkort.",
    features: [
      "5 körlektioner à 40 minuter",
      "Genomgång av svenska trafikregler",
      "Handledning inför uppkörning",
      "Hjälp med administrativt arbete",
      "Tillgång till lånefordon vid uppkörning"
    ],
    price: 5500,
    duration: "2-4 veckor",
    image: "/images/courses/conversion.jpg"
  },
  {
    id: 5,
    title: "Uppfräschningskurs",
    description: "För dig som har körkort men inte har kört på länge och behöver bygga upp ditt självförtroende.",
    features: [
      "3 körlektioner à 40 minuter",
      "Personlig utvärdering",
      "Fokus på dina specifika utmaningar",
      "Uppföljning och stöd"
    ],
    price: 2800,
    duration: "1-2 veckor",
    image: "/images/courses/refresher.jpg"
  }
];