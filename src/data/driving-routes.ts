export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface RoutePoint {
  title: string;
  description: string;
  position: { x: number; y: number };
  important?: boolean;
}

export interface DrivingRoute {
  id: string;
  name: string;
  description: string;
  difficulty: DifficultyLevel;
  features: string[];
  mapImage: string;
  estimatedTime: string;
  distance: string;
  trafficIntensity: 'low' | 'medium' | 'high';
  routePoints?: RoutePoint[];
  recommendedFor?: string[];
}

export const drivingRoutes: DrivingRoute[] = [
  {
    id: "limhamn-route",
    name: "Limhamn lugn rutt",
    description: "Perfekt för nybörjare. Lugna villagator med lite trafik och enkla korsningar. Bra för att öva grundläggande manövrering och körning i låg hastighet.",
    difficulty: "beginner",
    features: [
      "Låg trafikintensitet", 
      "30-40 km/h zoner", 
      "Enkla fyrvägskorsningar", 
      "Få trafikljus",
      "Breda gator med god sikt"
    ],
    mapImage: "https://images.unsplash.com/photo-1519501025264-65ba15a82390",
    estimatedTime: "30-40 minuter",
    distance: "8 km",
    trafficIntensity: "low",
    recommendedFor: ["Helt nya förare", "De som känner sig osäkra i trafiken", "Elever på sina första körlektioner"],
    routePoints: [
      {
        title: "Startpunkt: Limhamns torg",
        description: "Lugn plats att starta från med goda parkeringsmöjligheter.",
        position: { x: 25, y: 15 }
      },
      {
        title: "Korsning Linnégatan/Tegnérgatan",
        description: "Enkel fyrvägskorsning med väjningsplikt. Perfekt för att öva teckengivning.",
        position: { x: 40, y: 30 }
      },
      {
        title: "Järnvägsgatan",
        description: "Rak och bred gata där du kan öva att hålla jämn hastighet och placering.",
        position: { x: 55, y: 45 }
      },
      {
        title: "Rundning vid Ön",
        description: "Vacker kustväg med få utfarter. Öva på ratt- och blickteknik i kurvor.",
        position: { x: 65, y: 60 },
        important: true
      },
      {
        title: "Återkomst till Limhamns torg",
        description: "Övning i att navigera tillbaka till startpunkten via andra gator.",
        position: { x: 30, y: 20 }
      }
    ]
  },
  {
    id: "varnhem-bunke-route",
    name: "Värnhem-Bunkeflostrand pendlarrutt",
    description: "En mellansvår rutt som kombinerar stadskörning med landsvägskörning. Bra för att öva filbyten, trafikljus och att köra på större vägar.",
    difficulty: "intermediate",
    features: [
      "Måttlig trafikintensitet", 
      "Flera körfält att öva filbyten i", 
      "Kombinerad stads- och landsvägskörning", 
      "Flera rondeller av olika storlek",
      "Trafikljusreglerade korsningar"
    ],
    mapImage: "https://images.unsplash.com/photo-1592859600972-1b0834d83747",
    estimatedTime: "45-60 minuter",
    distance: "15 km",
    trafficIntensity: "medium",
    recommendedFor: ["Elever med viss körvana", "De som behöver öva filbyten", "Övning inför långkörning"],
    routePoints: [
      {
        title: "Start: Värnhemstorget",
        description: "Större korsning med flera körfält och intensiv trafik. Var uppmärksam på bussarna.",
        position: { x: 20, y: 10 },
        important: true
      },
      {
        title: "Amiralsgatan västerut",
        description: "Håll dig i rätt körfält och öva på att följa trafikrytmen.",
        position: { x: 35, y: 25 }
      },
      {
        title: "Pildammsvägen söderut",
        description: "Större väg med flera körfält. Öva på att byta körfält säkert.",
        position: { x: 45, y: 40 }
      },
      {
        title: "Anslutning till Inre Ringvägen",
        description: "Bra tillfälle att öva på att ansluta till större väg med högre hastighet.",
        position: { x: 60, y: 55 },
        important: true
      },
      {
        title: "Limhamnsvägen mot Bunkeflostrand",
        description: "Lugnare vägsträcka där du kan öva på landsvägskörning.",
        position: { x: 75, y: 70 }
      },
      {
        title: "Bunkeflostrand centrum",
        description: "Lugn förort med flera mindre rondeller att öva på.",
        position: { x: 85, y: 80 }
      },
      {
        title: "Återfärd via Annetorpsvägen",
        description: "Alternativ rutt tillbaka med andra trafiksituationer.",
        position: { x: 50, y: 60 }
      }
    ]
  },
  {
    id: "centrum-route",
    name: "Malmö Centrum utmaning",
    description: "En avancerad rutt genom centrala Malmö med hög trafik, flera filer och komplexa korsningar. Perfekt för att förbereda sig inför uppkörningen.",
    difficulty: "advanced",
    features: [
      "Hög trafikintensitet", 
      "Komplexa filbyten", 
      "Spårvagns- och bussträckningar", 
      "Många trafikljus",
      "Många gående och cyklister att ta hänsyn till",
      "Flera komplexa rondeller"
    ],
    mapImage: "https://images.unsplash.com/photo-1512084747998-038941dcebfd",
    estimatedTime: "60-75 minuter",
    distance: "12 km",
    trafficIntensity: "high",
    recommendedFor: ["Elever som närmar sig uppkörning", "Övning i stresshantering vid komplex körning", "De som behöver öva uppmärksamhet på många trafikanter samtidigt"],
    routePoints: [
      {
        title: "Start: Centralstationen",
        description: "Mycket trafikerad plats med många taxibilar, bussar och gående.",
        position: { x: 15, y: 10 },
        important: true
      },
      {
        title: "Stortorget och Lilla Torg",
        description: "Smala gator med många fotgängare. Kräver hög uppmärksamhet och låg hastighet.",
        position: { x: 25, y: 20 }
      },
      {
        title: "Södra Förstadsgatan",
        description: "Gata med många cyklister och kollektivtrafik. Öva på att dela utrymmet säkert.",
        position: { x: 35, y: 30 },
        important: true
      },
      {
        title: "Triangeln köpcentrum",
        description: "Komplex korsning med många körfält och hög trafikintensitet.",
        position: { x: 45, y: 40 }
      },
      {
        title: "Pildammsparken rundning",
        description: "Flera svåra korsningar i rad. Kräver god förberedelse och planering.",
        position: { x: 55, y: 50 }
      },
      {
        title: "Dalaplan rondell",
        description: "En av Malmös mest trafikerade rondeller med flera körfält.",
        position: { x: 65, y: 60 },
        important: true
      },
      {
        title: "Nobeltorget",
        description: "Komplex korsning med många svängande fordon och cyklister.",
        position: { x: 75, y: 70 }
      },
      {
        title: "Östervärn",
        description: "Flera trafiksignaler i rad som kräver god framförhållning.",
        position: { x: 85, y: 80 }
      },
      {
        title: "Tillbaka till Centralstationen",
        description: "Navigera genom city med envägs- och kollektivtrafikgator.",
        position: { x: 20, y: 15 }
      }
    ]
  },
  {
    id: "motorway-route",
    name: "Motorvägsträning Yttre Ringvägen",
    description: "Speciellt utformad rutt för att öva motorvägskörning på E6/E20 och Yttre Ringvägen runt Malmö. Fokus på påfarter, avfarter och filbyten i högre hastigheter.",
    difficulty: "advanced",
    features: [
      "Höghastighetsträning (100-110 km/h)", 
      "På- och avfarter till motorväg", 
      "Säkra filbyten i hög hastighet", 
      "Motorvägskorsningar",
      "Trafikplatser med flera körfält"
    ],
    mapImage: "https://images.unsplash.com/photo-1511108690759-009324a90311",
    estimatedTime: "75-90 minuter",
    distance: "40 km",
    trafficIntensity: "medium",
    recommendedFor: ["Elever som behöver öva motorvägskörning", "De som känner sig osäkra på högre hastigheter", "Uppkörningsförberedelser"],
    routePoints: [
      {
        title: "Start: Fosie trafikplats",
        description: "Bra startpunkt med enkel påfart till Yttre Ringvägen.",
        position: { x: 20, y: 15 }
      },
      {
        title: "Påfart Yttre Ringvägen",
        description: "Öva acceleration och att smidigt komma in i trafikrytmen.",
        position: { x: 30, y: 25 },
        important: true
      },
      {
        title: "Filbyten på Yttre Ringvägen",
        description: "Lugn sträcka för att öva på att byta körfält säkert i högre hastighet.",
        position: { x: 40, y: 35 }
      },
      {
        title: "Trafikplats Kronetorp",
        description: "Komplex trafikplats med flera avfarter och påfarter.",
        position: { x: 55, y: 45 },
        important: true
      },
      {
        title: "Anslutning E6/E20 norrut",
        description: "Övning i att välja rätt körfält vid övergång mellan olika motorvägar.",
        position: { x: 65, y: 55 }
      },
      {
        title: "Trafikplats Arlöv",
        description: "Övning i avfart och direkt påfart för att byta körriktning.",
        position: { x: 75, y: 65 }
      },
      {
        title: "E6/E20 söderut",
        description: "Sträcka med ofta tätare trafik. Öva på att hålla säkerhetsavstånd.",
        position: { x: 70, y: 60 },
        important: true
      },
      {
        title: "Öresundsbron-avfarten",
        description: "Komplex avfart med flera vägval. Kräver god förberedelse.",
        position: { x: 60, y: 50 }
      },
      {
        title: "Återanslutning till Yttre Ringvägen",
        description: "Träning i att läsa skyltning och välja rätt körfält i god tid.",
        position: { x: 50, y: 40 }
      },
      {
        title: "Avfart Fosie",
        description: "Övning i nedbromsning och anpassning till lägre hastighet.",
        position: { x: 30, y: 20 }
      }
    ]
  },
  {
    id: "trelleborg-commute",
    name: "Malmö-Trelleborg pendlarrutt",
    description: "Längre rutt som kombinerar stadskörning, landsväg och mindre tätorter. Perfekt för att öva varierad körning över längre tid.",
    difficulty: "intermediate",
    features: [
      "Långkörningsträning", 
      "Varierande vägtyper och hastigheter", 
      "Körning i mindre tätorter", 
      "Landsvägskörning med omkörningar",
      "Trafikerade korsningar utanför stadskärnan"
    ],
    mapImage: "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8",
    estimatedTime: "90-120 minuter",
    distance: "60 km",
    trafficIntensity: "medium",
    recommendedFor: ["Långkörningsträning", "De som behöver bygga körvana", "Elever som vill öva olika typer av körning i ett svep"],
    routePoints: [
      {
        title: "Start: Mobilia köpcentrum",
        description: "Utgångspunkt med goda parkeringsmöjligheter och enkel anslutning söderut.",
        position: { x: 15, y: 10 }
      },
      {
        title: "Väg 108 söderut",
        description: "Träning i landsvägskörning med varierande hastighetsbegränsningar.",
        position: { x: 30, y: 25 }
      },
      {
        title: "Svedala tätort",
        description: "Övning i att anpassa körningen när du kommer in i en mindre tätort.",
        position: { x: 40, y: 35 },
        important: true
      },
      {
        title: "Väg 108/E65 korsningen",
        description: "Större korsning där du ska välja riktning mot Trelleborg.",
        position: { x: 50, y: 45 }
      },
      {
        title: "E65 mot Trelleborg",
        description: "Träning i att hålla jämn hastighet på större landsväg.",
        position: { x: 60, y: 55 }
      },
      {
        title: "Infart Trelleborg",
        description: "Övning i att anpassa hastigheten när du kommer in i tätort från landsväg.",
        position: { x: 75, y: 65 },
        important: true
      },
      {
        title: "Trelleborg centrum",
        description: "Körning i mindre stad med andra trafikmönster än Malmö.",
        position: { x: 85, y: 70 }
      },
      {
        title: "Trelleborg hamn",
        description: "Navigation i hamnområde med tung trafik och speciella regler.",
        position: { x: 90, y: 75 }
      },
      {
        title: "Alternativ väg tillbaka via kustvägen",
        description: "Smalare landsväg med kurvor och vacker utsikt. Bra för kurvteknik.",
        position: { x: 70, y: 60 },
        important: true
      },
      {
        title: "Återkomst till Malmö via Limhamn",
        description: "Träning i att köra in i större stad från landsväg.",
        position: { x: 30, y: 20 }
      }
    ]
  }
];

export const getRoutesByDifficulty = (difficulty: DifficultyLevel | 'all'): DrivingRoute[] => {
  if (difficulty === 'all') {
    return drivingRoutes;
  }
  return drivingRoutes.filter(route => route.difficulty === difficulty);
};

export const getRouteById = (id: string): DrivingRoute | undefined => {
  return drivingRoutes.find(route => route.id === id);
}; 