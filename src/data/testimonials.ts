export interface Testimonial {
  id: number;
  name: string;
  age: number;
  location: string;
  image: string;
  text: string;
  rating: number;
  courseType: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Erik Johansson",
    age: 18,
    location: "Stockholm",
    image: "/images/testimonials/erik.jpg",
    text: "Ali är en fantastisk körlärare! Han var alltid tålmodig och förklarade saker på ett sätt som var lätt att förstå. Jag klarade uppkörningen på första försöket tack vare hans undervisning.",
    rating: 5,
    courseType: "B-körkort"
  },
  {
    id: 2,
    name: "Sofia Andersson",
    age: 24,
    location: "Stockholm",
    image: "/images/testimonials/sofia.jpg",
    text: "Efter att ha bytt från en annan trafikskola till Ali märkte jag direkt skillnaden. Han fokuserar verkligen på att göra dig till en säker förare, inte bara att klara provet. Rekommenderar starkt!",
    rating: 5,
    courseType: "B-körkort"
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    age: 32,
    location: "Stockholm",
    image: "/images/testimonials/ahmed.jpg",
    text: "Ali hjälpte mig att konvertera mitt utländska körkort till svenskt. Hans kunskap om de svenska trafikreglerna och tålmodiga sätt att lära ut gjorde hela processen mycket smidigare.",
    rating: 5,
    courseType: "Körkortskonvertering"
  },
  {
    id: 4,
    name: "Linnea Björk",
    age: 19,
    location: "Stockholm",
    image: "/images/testimonials/linnea.jpg",
    text: "Jag var väldigt nervös för att börja köra, men Ali fick mig att känna mig trygg redan från första lektionen. Hans lugnande sätt och tydliga instruktioner gjorde hela inlärningsprocessen mycket lättare.",
    rating: 5,
    courseType: "B-körkort"
  },
  {
    id: 5,
    name: "Markus Ek",
    age: 27,
    location: "Stockholm",
    image: "/images/testimonials/markus.jpg",
    text: "Efter att ha haft uppehåll i körningen i flera år behövde jag uppfriskningslektioner. Ali anpassade undervisningen perfekt efter mina behov och hjälpte mig att bygga upp mitt självförtroende bakom ratten igen.",
    rating: 4,
    courseType: "Uppfräschningskurs"
  },
  {
    id: 6,
    name: "Emma Lindberg",
    age: 22,
    location: "Stockholm",
    image: "/images/testimonials/default.jpg",
    text: "Jag valde Ali Trafikskola efter rekommendation från en vän, och jag är så glad att jag gjorde det. Teoretiska lektionerna var informativa och praktiska lektionerna anpassades helt efter mina behov. Klarade både teori och uppkörning på första försöket!",
    rating: 5,
    courseType: "B-körkort"
  },
  {
    id: 7,
    name: "Jonas Sandberg",
    age: 35,
    location: "Stockholm",
    image: "/images/testimonials/default.jpg",
    text: "Behövde ta motorcykelkörkort och Ali var den perfekta läraren. Han är otroligt kunnig och anpassade undervisningen efter mina förkunskaper. Säkerheten var alltid i fokus, vilket gav mig trygghet under hela utbildningen.",
    rating: 5,
    courseType: "A-körkort"
  },
  {
    id: 8,
    name: "Mia Karlsson",
    age: 29,
    location: "Stockholm",
    image: "/images/testimonials/default.jpg",
    text: "Jag hade försökt ta körkort tidigare med en annan trafikskola men misslyckades. Med Ali hittade jag ett nytt sätt att lära mig som fungerade mycket bättre för mig. Han identifierade mina svårigheter och hjälpte mig övervinna dem.",
    rating: 5,
    courseType: "B-körkort"
  },
  {
    id: 9,
    name: "Gustav Nilsson",
    age: 18,
    location: "Stockholm",
    image: "/images/testimonials/default.jpg",
    text: "Tog intensivkursen och lyckades ta körkortet på bara 3 veckor. Ali var flexibel med tiderna och såg till att jag fick tillräckligt med övning. Teorilektionerna var också utmärkta. Väl investerade pengar!",
    rating: 5,
    courseType: "Intensivkurs"
  },
  {
    id: 10,
    name: "Sara Lund",
    age: 26,
    location: "Stockholm",
    image: "/images/testimonials/default.jpg",
    text: "Ali är den bästa körläraren jag någonsin kunde ha hoppats på. Han fokuserar inte bara på teknik utan också på trafiksäkerhet och självförtroende. Han ger konkret och hjälpsam feedback efter varje lektion.",
    rating: 5,
    courseType: "B-körkort"
  },
  {
    id: 11,
    name: "Oscar Bergman",
    age: 31,
    location: "Stockholm",
    image: "/images/testimonials/default.jpg",
    text: "Hade körkort från USA och behövde konvertera till svenskt. Ali hjälpte mig förstå de svenska trafikreglerna och vad som skiljer sig. Uppfriskningskursen var perfekt för mina behov.",
    rating: 4,
    courseType: "Körkortskonvertering"
  },
  {
    id: 12,
    name: "Fatima Ahmed",
    age: 20,
    location: "Stockholm",
    image: "/images/testimonials/default.jpg",
    text: "Ali är en otroligt pedagogisk lärare som har mycket tålamod. Som nybörjare var jag väldigt nervös, men Ali fick mig att känna mig bekväm bakom ratten. Rekommenderar verkligen hans trafikskola!",
    rating: 5,
    courseType: "B-körkort"
  },
  {
    id: 13,
    name: "Henrik Svensson",
    age: 41,
    location: "Stockholm",
    image: "/images/testimonials/default.jpg",
    text: "Behövde förnya mitt C-körkort och valde Ali för uppfriskningskursen. Han är professionell, punktlig och verkligen kunnig om olika körkortsklasser. Det märks att han har lång erfarenhet.",
    rating: 5,
    courseType: "C-körkort"
  },
  {
    id: 14,
    name: "Jasmine Özdemir",
    age: 25,
    location: "Stockholm",
    image: "/images/testimonials/default.jpg",
    text: "Jag hade svårigheter med att klara teoriprov från andra trafikskolor men med Alis pedagogiska metoder och tydliga förklaringar kunde jag äntligen förstå materialet. Klarade teorin med god marginal!",
    rating: 4,
    courseType: "Teorikurs"
  },
  {
    id: 15,
    name: "David Lundgren",
    age: 33,
    location: "Stockholm",
    image: "/images/testimonials/default.jpg",
    text: "Som yrkesförare behövde jag YKB-fortbildning, och Ali erbjöd en komplett och professionell kurs. Bra balans mellan teori och praktiska övningar, med fokus på det senaste inom trafiksäkerhet.",
    rating: 5,
    courseType: "YKB-fortbildning"
  }
];