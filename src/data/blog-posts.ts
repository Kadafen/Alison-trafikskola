export type BlogCategory = 'safety' | 'maintenance' | 'rules' | 'local' | 'seasonal' | 'eco';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  categories: BlogCategory[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'nar-bor-du-byta-till-vinterdack-i-malmo',
    title: 'När bör du byta till vinterdäck i Malmö?',
    excerpt: 'En guide för lokala förare om tidpunkt, lagkrav och rekommendationer för däckbyte inför vintersäsongen.',
    content: `
# När bör du byta till vinterdäck i Malmö?

I södra Sverige, särskilt i Malmöområdet, kan det ibland vara svårt att avgöra när det är dags att byta till vinterdäck. Vädret i Skåne kan vara oberäkneligt och ofta mildare än i resten av landet, vilket gör att många bilägare väntar med däckbytet. Men vad säger lagen och vad är egentligen bäst för din säkerhet?

## Vad säger lagen?

Enligt svensk lag måste du ha vinterdäck på ditt fordon under perioden 1 december till 31 mars om det råder vinterväglag. Detta gäller i hela Sverige, inklusive Malmö. Men vad menas egentligen med "vinterväglag"?

Vinterväglag innebär att det finns snö, is, snömodd eller frost på någon del av vägen. I praktiken betyder det att du måste vara beredd att byta till vinterdäck så fort vädret försämras, även om det sker före 1 december eller efter 31 mars.

## Särskilda överväganden för Malmö

Även om Malmö generellt har mildare vintrar än många andra delar av Sverige, kan vädret snabbt förändras. Här är några faktorer att tänka på:

1. **Temperaturen**: Redan när temperaturen faller under +7°C börjar sommardäck förlora sitt grepp, även på torr väg.

2. **Pendling**: Kör du regelbundet utanför Malmö, kanske till andra delar av Skåne eller norrut i Sverige, kan vägförhållandena vara mycket annorlunda.

3. **Plötsliga väderförändringar**: Malmö kan snabbt gå från milt väder till frost och halka över en natt.

## Rekommendationer

För bilister i Malmöområdet rekommenderar vi att:

- Byt till vinterdäck i mitten eller slutet av november, oavsett väderprognos
- Välj nordiska vinterdäck (med dubb eller utan) framför centraleuropeiska om du kör mycket under vintern
- Kontrollera dina däcks mönsterdjup - lagen kräver minst 3 mm för vinterdäck
- Planera ditt däckbyte i god tid - vänta inte till sista minuten när verkstäderna är fullbokade

## Var kan du byta däck?

I Malmöområdet finns många verkstäder som erbjuder däckbyte. Boka tid i förväg, särskilt runt de perioder då många vill byta däck. Alternativt, om du har kunskapen och verktygen, kan du göra det själv.

Kom ihåg: Det är alltid bättre att byta till vinterdäck för tidigt än för sent. Din säkerhet på vägen är viktigast!
    `,
    image: '/images/blog/winter-tires.jpg',
    author: 'Ali',
    publishDate: '2023-10-15',
    categories: ['safety', 'maintenance', 'seasonal'],
    featured: true
  },
  {
    id: '2',
    slug: 'navigera-i-malmos-nya-trafikzoner',
    title: 'Guide: Malmös nya miljözoner och trafikregleringar',
    excerpt: 'Senaste uppdateringarna om Malmös miljözoner och hur de påverkar ditt vardagliga körande.',
    content: `
# Guide: Malmös nya miljözoner och trafikregleringar

Malmö stad arbetar kontinuerligt med att förbättra luftkvaliteten och minska trafikens miljöpåverkan i centrum. Under de senaste åren har detta inneburit införandet av nya miljözoner och trafikregleringar som kan påverka hur du som bilförare navigerar i staden.

## Vad är en miljözon?

En miljözon är ett område där det ställs särskilda miljökrav på fordon för att minska luftföroreningar och buller. I Sverige finns det olika klasser av miljözoner med varierande krav på fordonens utsläpp.

## Malmös miljözoner

Från och med [datum] har Malmö stad infört miljözon klass [X] i följande områden:

- Centrala Malmö innanför [specificera gränser]
- [Andra områden]

### Vad innebär detta för dig som bilförare?

Beroende på vilken typ av fordon du kör kan miljözonen påverka dig på olika sätt:

#### Personbilar
- [Specifika krav för personbilar]
- Vilka bilar som får köra i zonerna (baserat på Euro-klass)
- Eventuella undantag

#### Tunga fordon (lastbilar och bussar)
- [Specifika krav för tunga fordon]
- Tidsbegränsningar
- Certifieringskrav

## Andra trafikregleringar i Malmö

Utöver miljözonerna har Malmö stad även implementerat andra trafikregleringar för att förbättra framkomligheten och säkerheten:

### Nya enkelriktade gator
- [Lista över nyligen enkelriktade gator]
- Tips för alternativa rutter

### Utökade gågator
- [Information om nya eller utökade gågator]
- Tider då leveranstrafik är tillåten

### Förändringar i kollektivtrafikens körfält
- [Information om nya busskörfält]
- Regler för när andra fordon får använda dessa

## Parkeringsförändringar

Tillsammans med miljözonerna har det också kommit förändringar i parkeringsmöjligheterna i centrala Malmö:

- Nya parkeringsavgifter och tider
- Utökade parkeringszoner
- Fördelar för elbilar och andra miljövänliga fordon

## Hur du håller dig uppdaterad

Trafikregler och zoner kan ändras med tiden. Här är några sätt att hålla dig uppdaterad:

1. Malmö stads officiella hemsida: [länk]
2. Trafikverkets informationstjänster
3. Navigationsappar som uppdateras kontinuerligt

## Tips för smidig körning i Malmö

För att undvika problem med de nya trafikregleringarna:

1. Planera din rutt i förväg
2. Överväg att parkera utanför centrum och använda kollektivtrafik eller cykel
3. Om du ofta kör i Malmö, kontrollera om ditt fordon uppfyller kraven för miljözonerna
4. Var uppmärksam på nya skyltning i staden

Vi på Allis Trafikskola hjälper gärna till med mer information om du har frågor om hur du bäst navigerar i Malmös förändrade trafikmiljö!
    `,
    image: '/images/blog/malmo-traffic-zones.jpg',
    author: 'Ali',
    publishDate: '2023-09-22',
    categories: ['local', 'rules', 'eco']
  },
  {
    id: '3',
    slug: 'eco-driving-tips',
    title: '5 enkla sätt att spara bränsle med eco-driving',
    excerpt: 'Lär dig hur du kan minska din bränsleförbrukning med upp till 20% genom att tillämpa enkla eco-driving-tekniker i din vardagliga körning.',
    content: `
# 5 enkla sätt att spara bränsle med eco-driving

Eco-driving, eller sparsam körning, handlar inte bara om att vara miljövänlig - det kan också spara dig tusentals kronor per år i bränslekostnader. Genom att tillämpa några enkla tekniker i din vardagliga körning kan du minska din bränsleförbrukning med upp till 20%.

## 1. Mjuk acceleration och inbromsning

Häftiga accelerationer och hårda inbromsningar är bland de största bränsletjuvarna. När du accelererar, gör det gradvis och mjukt. Sikta på att komma upp i önskad hastighet med ett jämnt och kontrollerat gaspådrag.

**Tips:** Tänk dig att du har ett ägg mellan din fot och gaspedalen som du inte vill krossa.

När det gäller inbromsning, försök att planera i förväg. Om du ser att ett trafikljus blir rött långt framför dig, släpp gasen och låt bilen sakta rulla istället för att fortsätta i hög hastighet fram till ljuset och sedan bromsa hårt.

## 2. Använd rätt växel

Att köra på för låg växel är en vanlig orsak till onödig bränsleförbrukning. Moderna bilar är designade för att vara effektiva vid lägre varvtal:

- Växla upp tidigt (runt 2000-2500 rpm för bensinmotorer, 1500-2000 för diesel)
- Använd högsta möjliga växel som passar för hastigheten
- Vid körning i stadstrafik, hoppa över växlar när det är möjligt (t.ex. gå från 2:an direkt till 4:an)

**Kom ihåg:** Att köra på för hög växel kan också öka förbrukningen om motorn behöver arbeta för hårt. Lyssna på motorn - om den låter ansträngd, växla ner.

## 3. Håll jämn hastighet

Att hålla en jämn hastighet, särskilt på motorvägar, är en av de enklaste sätten att spara bränsle:

- Använd farthållare på motorvägar och landsvägar när det är möjligt
- Om din bil har adaptiv farthållare, använd den för att automatiskt anpassa hastigheten till trafiken
- Försök att förutse trafikrytmen för att undvika onödiga hastighetsförändringar

**Fakta:** En bil som kör i 110 km/h förbrukar cirka 20% mer bränsle än samma bil i 90 km/h. Tänk på detta nästa gång du har bråttom på motorvägen.

## 4. Minska tomgångskörning

Modern teknologi har gjort att traditionella råd om tomgångskörning har förändrats:

- Moderna bilar förbrukar mindre bränsle vid start än vid tomgång över 10 sekunder
- Stäng av motorn vid längre stopp (vissa nyare bilar gör detta automatiskt)
- Använd inte tomgångskörning för att värma upp bilen - börja köra försiktigt direkt

**Lagfakta:** I Sverige är det faktiskt olagligt att ha motorn på tomgång i mer än 1 minut i tätbebyggt område.

## 5. Underhåll din bil regelbundet

En välunderhållen bil är en bränsleeffektiv bil:

- Kontrollera däcktrycket regelbundet - för lågt tryck kan öka förbrukningen med upp till 3%
- Byt luftfilter enligt tillverkarens rekommendationer
- Använd rätt motorolja - moderna lågfriktionsoljor kan göra skillnad
- Ta bort onödig vikt från bilen - kör inte runt med saker du inte behöver i bagageutrymmet
- Ta bort takräcken när de inte används - de kan öka luftmotståndet avsevärt

## Bonus: Planera dina resor

Ett av de mest effektiva sätten att spara bränsle är att köra mindre:

- Kombinera flera ärenden i samma resa
- Planera rutten för att undvika trafikstockningar
- Överväg att samåka, cykla eller använda kollektivtrafik när det är möjligt

Genom att tillämpa dessa enkla eco-driving-tekniker kan du inte bara göra en insats för miljön utan också spara betydande summor på ditt bränslekonto. På Allis Trafikskola inkluderar vi eco-driving i alla våra kurser för att hjälpa våra elever att bli både säkra och miljömedvetna förare.
    `,
    image: '/images/blog/eco-driving.jpg',
    author: 'Ali',
    publishDate: '2023-08-10',
    categories: ['eco', 'maintenance']
  },
  {
    id: '4',
    slug: 'handsfree-nya-regler',
    title: 'Nya handsfree-regler - vad du behöver veta',
    excerpt: 'Sedan 2018 har Sverige strängare regler för användning av mobiltelefon under körning. Här är vad du behöver veta för att undvika böter och köra säkert.',
    content: `
# Nya handsfree-regler - vad du behöver veta

Sedan februari 2018 har Sverige infört strängare regler för användning av mobiltelefon under körning. Trots att lagen har funnits i några år nu, ser vi fortfarande många förare som inte är helt säkra på vad som är tillåtet och inte. Här går vi igenom vad lagen säger och hur du kan köra säkert och lagligt.

## Vad säger lagen?

Den svenska lagen säger att du som förare inte får använda mobiltelefon eller annan kommunikationsutrustning på ett sätt som håller dig "handhållen". Med andra ord:

- **Det är förbjudet** att hålla telefonen i handen under körning för att ringa, skriva meddelanden, bläddra på sociala medier, eller använda andra appar.
- **Det är tillåtet** att använda telefonen om den är placerad i en hållare eller kan användas via handsfree-funktion, så länge det inte påverkar din körning negativt.

## Vad räknas som handhållen användning?

Handhållen användning innebär att du fysiskt håller enheten i handen. Detta inkluderar:

- Att hålla telefonen mot örat under ett samtal
- Att hålla telefonen för att skriva eller läsa meddelanden
- Att hålla telefonen för att navigera eller byta musik
- Att hålla telefonen för att ta bilder eller filma

## Lagliga alternativ

För att följa lagen och samtidigt kunna använda din telefon när det behövs, finns flera alternativ:

### 1. Mobilhållare
En mobilhållare som fäster telefonen på instrumentbrädan eller vindrutan är den enklaste lösningen. Se till att:
- Hållaren är stadigt monterad
- Telefonen inte skymmer din sikt
- Du kan manövrera telefonen med minimal distraktion

### 2. Integrerade system
Många moderna bilar har integrerade system som Android Auto eller Apple CarPlay som låter dig:
- Använda röststyrning för att ringa samtal
- Få dina meddelanden upplästa
- Kontrollera navigation och musik via bilens skärm

### 3. Bluetooth-headset eller bilens högtalarsystem
För samtal är ett Bluetooth-headset eller bilens inbyggda högtalarsystem utmärkta handsfree-alternativ.

## Böter och påföljder

Om du bryter mot lagen genom att använda mobiltelefon handhållen under körning:
- Kan du få böter på 1500 kronor (beloppet kan justeras över tid)
- Risken för att orsaka olyckor ökar betydligt

## Säkerhetstips utöver lagen

Även om lagen tillåter viss användning av mobiltelefon i hållare, är det alltid säkrast att:
1. Ställa in navigation och musik innan du börjar köra
2. Låta inkommande samtal och meddelanden vänta om de inte är akuta
3. Parkera säkert om du behöver använda telefonen för något som kräver mer uppmärksamhet

## Vanliga missförstånd

**Missförstånd 1:** "Det är okej att använda telefonen när jag står stilla vid rödljus."
**Fakta:** Nej, lagen gäller även när fordonet står stilla i trafiken, t.ex. vid rödljus eller i köer.

**Missförstånd 2:** "Lagen gäller bara mobiltelefoner."
**Fakta:** Lagen omfattar all kommunikationsutrustning som används handhållen, inklusive surfplattor, GPS-enheter, etc.

**Missförstånd 3:** "Det är okej att bara titta snabbt på telefonen."
**Fakta:** All handhållen användning är förbjuden, oavsett hur kort tid det tar.

## Sammanfattning

- Använd aldrig telefonen handhållen under körning
- Investera i en bra mobilhållare eller handsfree-system
- Planera dina samtal och meddelanden före eller efter körningen
- Kom ihåg att även laglig användning kan vara distraherande - säkerheten först!

På Allis Trafikskola lär vi ut säker hantering av teknologi i bilen som en naturlig del av körkortsutbildningen, eftersom vi vet att detta är en viktig aspekt av modern körning.
    `,
    image: '/images/blog/handsfree-driving.jpg',
    author: 'Ali',
    publishDate: '2023-07-12',
    categories: ['rules', 'safety']
  },
  {
    id: '5',
    slug: 'guide-till-rondeller',
    title: 'Den kompletta guiden till rondellkörning',
    excerpt: 'Många förare känner sig osäkra i rondeller. Vår guide går igenom allt du behöver veta för att navigera rondeller säkert och effektivt.',
    content: `
# Mästarens guide till att köra i rondeller

Rondeller är ett vanligt inslag i den svenska trafikmiljön, särskilt i Malmö och andra större städer. För många nyblivna förare, och ibland även för erfarna, kan rondeller skapa förvirring och osäkerhet. I denna guide går vi igenom allt du behöver veta för att hantera rondeller på ett säkert och korrekt sätt.

## Grundläggande principer

### Väjningsplikt
När du närmar dig en rondell i Sverige har du alltid väjningsplikt mot trafiken som redan befinner sig i rondellen. Detta markeras med väjningspliktsskyltar och ofta med vägmarkeringar.

### Körriktning
I Sverige kör du alltid moturs i rondellen (håll till vänster om rondellens mitt).

### Blinkers
- **Vid infart:** Generellt behöver du inte blinka när du kör in i en rondell.
- **Vid utfart:** Använd alltid höger blinkers när du ska lämna rondellen, oavsett vilken utfart du tar.

## Steg-för-steg guide

### 1. Förberedelse innan rondellen
- Sänk hastigheten när du närmar dig rondellen
- Observera skyltning och vägmarkeringar
- Se efter trafik som redan är i rondellen
- Välj rätt körfält om det finns flera (se nedan)

### 2. Körning i rondellen
- Kör in i rondellen när det är säkert
- Anpassa hastigheten efter rondellens storlek och trafik
- Håll dig i ditt körfält om rondellen har flera filer
- Var uppmärksam på andra fordons blinkers och placering

### 3. Utfart från rondellen
- Slå på höger blinkers i god tid innan du ska köra ut
- Se upp för cyklister och fotgängare vid utfarten
- Byt till yttre körfält om du är i inre och ska svänga av (i större rondeller)

## Körfältsval i flerfältiga rondeller

Många större rondeller i Malmö och andra städer har flera körfält. Här är grundprinciperna:

### Yttre körfält (höger)
- Använd om du ska ta första eller andra avfarten
- Kör vidare i yttre körfältet genom rondellen

### Inre körfält (vänster)
- Använd om du ska köra längre i rondellen (tredje avfarten eller mer)
- Byt till yttre körfält i god tid innan din avfart (med blinkers)

## Speciella rondelltyper i Malmö

### 1. Minirondeller
Dessa är små rondeller, ofta med en överkörningsbar upphöjning i mitten.
- Kör runt dem som vanliga rondeller
- Större fordon kan vid behov köra över den upphöjda mitten

### 2. Signalreglerade rondeller
Några rondeller i Malmö har trafikljus, särskilt vid höga trafikflöden.
- Följ trafiksignalerna precis som vid vanliga korsningar
- Vanliga rondellregler gäller fortfarande inom rondellen

### 3. Turborondeller
Dessa har spiralformade körfält där du måste välja körfält innan du kör in.
- Följ markeringarna på vägen noggrant
- Körfältsbyten inne i rondellen är inte möjliga/tillåtna

## Vanliga misstag att undvika

1. **Ingen blinkers vid utfart** - Detta förvirrar andra trafikanter om dina avsikter
2. **Felaktigt körfältsval** - Särskilt i flerfältiga rondeller kan detta leda till konflikter
3. **För hög hastighet** - Gör det svårare att reagera på situationer i rondellen
4. **Stanna i rondellen** - Flyt är viktigt, stanna bara om du måste av säkerhetsskäl
5. **Missförstånd om väjningsplikten** - Kom ihåg att du ska väja för trafik redan i rondellen

## Tips för nybörjare

- Öva på mindre trafikerade rondeller innan du ger dig på de stora, komplexa
- Om du missar din avfart, fortsätt ett varv till i rondellen istället för att göra farliga manövrer
- Vid osäkerhet, ta det lugnt och håll dig i yttre körfältet

## Tips för körning i Malmös mest kända rondeller

### Mobilia-rondellen
- Ofta trafikerad, var extra uppmärksam
- Flera körfält, välj rätt fält i god tid

### Dalaplan
- Stor rondell med många utfarter
- Tydlig filkörning är viktigt här

### Värnhemstorget
- Komplicerad trafiksituation med spårvagnar och bussar
- Var särskilt uppmärksam på kollektivtrafik och fotgängare

På Allis Trafikskola ägnar vi särskild uppmärksamhet åt att lära ut korrekt körning i rondeller, eftersom detta är en så viktig del av trafikbilden i Malmö. Med rätt kunskap och övning blir rondellkörning både enkel och säker!
    `,
    image: '/images/blog/roundabout-guide.jpg',
    author: 'Ali',
    publishDate: '2023-06-05',
    categories: ['safety', 'rules']
  }
];

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: BlogCategory | 'all'): BlogPost[] => {
  if (category === 'all') {
    return blogPosts;
  }
  return blogPosts.filter(post => post.categories.includes(category));
};

export const getRelatedPosts = (currentPostId: string, limit: number): BlogPost[] => {
  const currentPost = blogPosts.find(post => post.id === currentPostId);
  
  if (!currentPost) return [];
  
  // Get posts that share at least one category with the current post
  const relatedPosts = blogPosts
    .filter(post => post.id !== currentPostId && post.categories.some(cat => currentPost.categories.includes(cat)))
    .sort((a, b) => {
      // Count shared categories
      const aSharedCats = a.categories.filter(cat => currentPost.categories.includes(cat)).length;
      const bSharedCats = b.categories.filter(cat => currentPost.categories.includes(cat)).length;
      
      // Sort by number of shared categories (desc) and then by date (desc)
      if (aSharedCats !== bSharedCats) {
        return bSharedCats - aSharedCats;
      }
      
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    })
    .slice(0, limit);
  
  return relatedPosts;
}; 