export interface SuccessStory {
  id: string;
  name: string;
  age: number;
  image: string;
  title: string;
  story: string;
  challenge: string;
  solution: string;
  quote: string;
  passedDate: string;
  attempts: number;
}

export const successStories: SuccessStory[] = [
  {
    id: "maria",
    name: "Maria Johansson",
    age: 24,
    image: "/images/success-stories/maria.jpg",
    title: "Från extremt nervös till självsäker förare",
    story: "Maria hade försökt ta körkort tidigare men misslyckats på grund av extrem nervositet vid uppkörningen. Hon hade kört med tre olika trafikskolor under en period av fyra år utan att lyckas.",
    challenge: "Marias största utmaning var hennes körångest, särskilt i trafikerade områden och vid omkörningar på motorvägen. Hon var rädd för att fatta snabba beslut i trafiken och blev paralyserad av nervositet vid uppkörning.",
    solution: "Ali utvecklade en specialanpassad plan för Maria som började med körlektioner i lugna områden tidigt på söndagsmorgnar. Gradvis ökade komplexiteten och trafikintensiteten. Han använde särskilda andningstekniker och avslappningsövningar före varje körlektion. De tränade också på mentala visualiseringsteknier där Maria i förväg föreställde sig hur hon skulle hantera stressiga situationer.",
    quote: "Ali var den första körläraren som verkligen förstod att min nervositet inte var lathet eller ovilja att lära mig. Hans tålamod och metoder hjälpte mig att övervinna min ångest och äntligen få mitt körkort! Nu kör jag varje dag och kan knappt tro att jag en gång var så rädd.",
    passedDate: "15 juni 2023",
    attempts: 1
  },
  {
    id: "ahmed",
    name: "Ahmed Al-Farsi",
    age: 32,
    image: "/images/success-stories/ahmed.jpg",
    title: "Internationell licens konverterad på rekordtid",
    story: "Ahmed flyttade till Sverige från Jordanien och behövde konvertera sitt utländska körkort till ett svenskt. Han behövde sitt körkort snabbt för sitt nya jobb som säljare med hela Skåne som arbetsområde.",
    challenge: "Ahmed var van vid helt andra trafikregler och körkultur. Särskilt rondeller, cykelöverfarter och vinterkörning var nya koncept för honom. Det fanns även språkbarriärer som gjorde det svårt att förstå alla nyanser i trafikreglerna.",
    solution: "Ali skapade ett intensivt tvåveckorsprogram med fokus på svenska trafikregler och körning i stadsmiljö. De tränade särskilt på interaktion med cyklister och fotgängare, samt körning i rondeller i Malmö. Ali använde en kombination av arabiska och svenska för att förklara de mest kritiska koncepten. För att underlätta inlärningen använde de också visuella hjälpmedel och körde samma rutter flera gånger för att bygga upp förtrogenhet.",
    quote: "Tack vare Alis målmedvetna och effektiva undervisning klarade jag uppkörningen på första försöket, trots att jag bara hade två veckor på mig att anpassa mig till svenska trafikregler! Hans förmåga att förklara skillnaderna mellan körning i Mellanöstern och Sverige var ovärderlig.",
    passedDate: "3 mars 2023",
    attempts: 1
  },
  {
    id: "anders",
    name: "Anders Svensson",
    age: 52,
    image: "/images/success-stories/anders.jpg",
    title: "Övervann rädslan efter svår trafikolycka",
    story: "Anders var med om en allvarlig trafikolycka 2018 som passagerare och utvecklade en stark rädsla för att köra bil. Efter fem års tvekan bestämde han sig för att försöka ta körkort med professionell hjälp.",
    challenge: "Anders led av PTSD-symtom relaterade till bilkörning. Han kunde få panikattacker när han satt bakom ratten, särskilt vid högre hastigheter eller i situationer som påminde om olyckan han var med om. Hans rädsla var så stark att han inte ens ville vara passagerare i framsätet.",
    solution: "Ali arbetade tillsammans med Anders terapeut för att skapa ett gradvis exponeringsprogram. De började med att Anders bara satt i en parkerad bil. Sedan övergick de till körning på tomma parkeringsplatser, vidare till lugna villagator och till slut till vanlig trafik. Ali lärde honom även tekniker för att hantera ångest medan han körde och skapade en trygg miljö där Anders kunde uttrycka sin rädsla utan att känna sig dömd.",
    quote: "Jag trodde verkligen inte att jag någonsin skulle kunna köra bil igen efter olyckan. Alis lugna sätt och hans förståelse för min situation gjorde hela skillnaden. Han såg mig som en person, inte bara som en elev. Att ta körkort har gett mig en frihet jag inte trodde var möjlig igen.",
    passedDate: "7 november 2023",
    attempts: 2
  },
  {
    id: "sofia",
    name: "Sofia Bergman",
    age: 42,
    image: "/images/success-stories/sofia.jpg",
    title: "Från 5 underkända uppkörningar till godkänd",
    story: "Sofia hade försökt ta körkort i över 10 år och hade underkänts fem gånger på uppkörningen med olika trafikskolor. Hon var nära att ge upp drömmen om körkort helt.",
    challenge: "Sofias huvudproblem var att hon hade byggt upp flera felaktiga vanor under åren med olika körlärare. Hon hade också utvecklat en stark rädsla för själva provsituationen. Trots att hon körde relativt bra under lektioner, gjorde hon alltid misstag under press vid uppkörning.",
    solution: "Ali började med att identifiera alla felaktiga vanor och systematiskt arbeta med att korrigera dem en i taget. Han filmade körlektioner så Sofia kunde se sina framsteg och misstag. De gjorde också flera simulerade uppkörningar där Ali spelade rollen som kontrollant för att Sofia skulle vänja sig vid provsituationen. Ett annat viktigt element var att träna på exakt de rutter som användes för uppkörning i Malmö.",
    quote: "Efter fem misslyckade försök och tiotusentals kronor hade jag nästan gett upp. Ali var brutalt ärlig om vad jag behövde förbättra, men också otroligt stöttande. Hans metoder var helt annorlunda – han lärde mig inte bara att köra för att klara provet, utan att verkligen bli en säker förare. Nu har jag äntligen mitt körkort och känner mig trygg på vägen!",
    passedDate: "22 april 2023",
    attempts: 1
  },
  {
    id: "erik",
    name: "Erik Lindberg",
    age: 19,
    image: "/images/success-stories/erik.jpg",
    title: "Från ouppmärksam till fokuserad förare",
    story: "Erik, som har ADHD, hade svårt att hålla fokus under långa körlektioner och missade ofta viktiga detaljer i trafiken. Hans föräldrar var oroliga för om han skulle kunna ta körkort.",
    challenge: "Eriks största utmaningar var att behålla koncentrationen under längre körsessioner, att uppfatta flera trafikelement samtidigt och att komma ihåg trafikregler. Han hade lätt för att bli distraherad av saker utanför bilen eller av sina egna tankar.",
    solution: "Ali bröt ner körlektionerna i kortare, mer intensiva pass på 25-30 minuter med tydliga mål för varje session. Han använde också multimodala inlärningstekniker, där Erik fick verbalisera vad han såg och planerade att göra medan han körde. För att hjälpa med inlärning av regler använde de minnestekniker och visuella hjälpmedel. Ali hjälpte också Erik att utveckla rutiner före körning för att optimera sitt fokus.",
    quote: "Ali förstod exakt hur min hjärna fungerar och anpassade undervisningen därefter. Istället för att försöka tvinga mig att koncentrera mig längre, hjälpte han mig att bli mer effektiv med min uppmärksamhet. De kortare, intensivare lektionerna och tydliga rutinerna gjorde all skillnad. Nu har jag tekniker som hjälper mig att vara en säker förare trots min ADHD.",
    passedDate: "8 januari 2023",
    attempts: 2
  },
  {
    id: "linnea",
    name: "Linnéa Öström",
    age: 68,
    image: "/images/success-stories/linnea.jpg",
    title: "Tog körkort efter pensionering",
    story: "Linnéa hade aldrig behövt körkort under sitt yrkesliv i Stockholm. Efter pensioneringen och flytten till Skåne bestämde hon sig för att det var dags att lära sig köra, trots att många tyckte hon var för gammal.",
    challenge: "Linnéas utmaningar inkluderade längre inlärningstid för nya motoriska färdigheter, viss osäkerhet kring modern trafikteknologi och att överkomma fördomen att äldre inte kan lära sig nya färdigheter. Hon hade också svårt med nackrörlighet vilket påverkade sikten vid backning och filbyten.",
    solution: "Ali utvecklade en anpassad läroplan med längre inlärningsperiod och mer repetition. Han fokuserade på att bygga Linnéas självförtroende gradvis och anpassade körställningen för att kompensera för den begränsade nackrörligheten. De tränade också särskilt på användning av moderna förarassistanssystem och navigering. Ali betonade alltid att ålder kan vara en fördel genom ökad livserfarenhet och mogna riskbedömningar.",
    quote: "Många i min ålder skulle aldrig våga försöka ta körkort. Jag möttes av skepsis från vänner och till och med från andra trafikskolor. Men Ali såg aldrig min ålder som ett hinder, bara som en faktor att anpassa undervisningen efter. Hans tålamod och tro på mig gav mig modet att fortsätta även när det kändes svårt. Nu njuter jag av friheten att kunna köra till mina barnbarn och upptäcka Skåne på egen hand!",
    passedDate: "15 oktober 2023",
    attempts: 3
  }
];

export const getSuccessStoryById = (id: string): SuccessStory | undefined => {
  return successStories.find(story => story.id === id);
}; 