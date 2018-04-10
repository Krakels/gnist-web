var modal;
var photo;
var title;
var speaker;
var description;
var time;
var nextTalk;
var openModalButton;
var closeModalButton;

var readyCheck = setInterval( function () {
  if ( document.readyState !== 'complete' ) return;
  clearInterval(readyCheck); 

  modal = document.getElementById('modal');
  photo = document.getElementById('modal-photo');
  title = document.getElementById('modal-title');
  speaker = document.getElementById('modal-speaker');
  description = document.getElementById('modal-description');
  time = document.getElementById('modal-time');
  nextTalk = document.getElementById('modal-next-talk');
  openModalButton = document.getElementById("modal-button");
  closeModalButton = document.getElementById("modal-close");

  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
}, 100);


function openModal(id) {
  var talk = getTalk(id);
  var imageElements = "";
  for (var i = 0; i < talk.imageUrls.length; i++) {
    imageElements += '<img class="modal-mug" src="' + talk.imageUrls[i] + '" alt="' + talk.speaker + '" />';
  }
  photo.innerHTML = imageElements;
  title.innerHTML = talk.title;
  speaker.innerHTML = talk.speaker;
  description.innerHTML = talk.description;
  time.innerHTML = talk.time;
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function getTalk(id) {
  for (var i = 0; i < talks.length; i++) {
    if (talks[i].id === id) {
      return talks[i];
    } 
  }
}

var talks = [
  {
    "id": 1,
    "imageUrls": ["mpj.gif"],
    "title": "Surviving death by complexity",
    "speaker": ["MPJ"],
    "description": "It feels like a law of nature that features are added to software at a pace much faster than they are removed. It seems like our nice simple software always eventually evolves into a slobbering complexity monster, incomprehensible for its users and unmaintainable by its developers. Is this an unavoidable phenomenon? If so, how can we adapt to that, as software creators?",
    "time": "KL. 11.40-12:20",
    "nextTalk": "Reaktiv programmering i RxJS av Kristian Tryggestad"
  },

  {
    "id": 2,
    "imageUrls": ["kristian.gif"],
    "title": "Reaktiv programmering i RxJS",
    "speaker": "Kristian Tryggestad",
    "description": "For 10-15 år siden var nettsider stort sett enkle, statiske og behøvde en backend for visning av dynamisk innhold. Spol frem til 2018, og vi befinner oss i en helt annen tidsalder. Nå er stadig flere nettsider dynamiske og levende, og trenger derfor en anseelig mengde JavaScript for å fungere. Dette foredraget tar for seg konseptet reaktiv programmering, som er en av måtene man kan håndtere den stadig økende kompleksiteten vi møter som frontend-utviklere. Vi ser på biblioteket RxJS, hva det kan gjøre for oss og hvordan det får oss til å bli funksjonelle og reaktive programmerere. Reaktiv programmering oppleves for mange som avansert. Sannsynligvis på grunn av at det oppfordrer til en annen tenkemåte enn vi er vant til. Foredraget vil ta for seg RxJS fra et begynnerperspektiv, men vil likevel kunne oppfattes som utfordrende. Det antas at lytterne har et visst forhold til web-programmering. Kunnskap om funksjonell programmering er ikke nødvendig, men gjør det definitivt lettere å skjønne konseptene.",
    "time": "KL. 12:30-13:00",
    "nextTalk": "REST - GraphQL dance-off av Jørgen Abrahamsen"
  },

  {
    "id": 3,
    "imageUrls": ["jorgen.gif"],
    "title": "REST - GraphQL dance-off",
    "speaker": "Jørgen Abrahamsen",
    "description": " Applikasjonene våre trenger data. Behovene varierer mellom web og app - og spesielt over tid. Tradisjonelle API blir for statiske i forhold til alternativet som nå finnes. Dette foredraget vil ta for seg GraphQL og hvordan det er bedre enn tradisjonelle REST-baserte API. Det vil bli gitt en kort intro til hva GraphQL er, men mest om hvordan det fungerer i praksis. Demo med kode (i JavaScript) vil forekomme. Foredraget er ment på både frontend- og backend-utviklere hvor API er en del av hverdagen. De vil få en kjennskap til fordelene med å bruke GraphQL over tradisjonelle API.",
    "time": "KL. 13:10-13:40",
    "nextTalk": "Ditt og mitt API: Hvem er jeg? Hva kan jeg gjøre?"
  },

  {
    "id": 4,
    "imageUrls": ["magnus.gif", "malin.gif"],
    "title": "Ditt og mitt API: Hvem er jeg? Hva kan jeg gjøre?",
    "speaker": "Magnus Sulland og Malin Kildal",
    "description": "Ikke alle er skapt likt, hvem er dine brukere og hvilke ressurser skal de få benytte i ditt API. Malin og Magnus vil vise eksempel fra virkeligheten på hvordan brukerrettigheter og personlig tilpasning kan gjennomføres i en verden av små løsninger bygget på mikrotjenester og utviklet av små team. Du vil få inspirasjon til å modularisere og gjenbruke komponentene som står bak ditt unike API og gi dine brukere en personlig opplevelse. 'APIs all the way down'!",
    "time": "KL. 13:50-14:20",
    "nextTalk": "CSS Grid av Marius Krakeli"
  },

  {
    "id": 5,
    "imageUrls": ["marius.gif"],
    "title": "CSS Grid",
    "speaker": "Marius Krakeli",
    "description": " CSS er noe de fleste webutviklere er nødt til å forholde seg til, og CSS er for mange det som havner bakerst i prioriteringskøen når man skal oppsøke og tilegne seg ny kunnskap. Nå som CSS Grid har blitt tatt inn i standarden, er det derfor på tide å børste støv av CSS-entusiasmen. Dette foredraget vil være en introduksjon til CSS Grid og vil ta for seg det grunnleggende du trenger å kunne for å ta i bruk CSS Grid i hverdagen. Forbered deg på et interaktivt foredrag med live demoer, som vil forsøke å inspirere akkurat nok til at du selv oppsøker mer avansert informasjon om CSS Grid etterpå. Foredraget forutsetter generell CSS-erfaring, men har man ikke rørt CSS på evigheter, vil dette oppleves som å sette seg i en tidsmaskin.",
    "time": "KL. 14:30-15:00",
    "nextTalk": "UX basics - Hvordan en utvikler kan jobbe med design uten designer"
  },

  {
    "id": 6,
    "imageUrls": ["kari.gif"],
    "title": "UX basics - Hvordan en utvikler kan jobbe med design uten designer ",
    "speaker": "Kari Aftret Ready",
    "description": "I en utviklers hverdag er det mange valg som skal gjøres, også når det gjelder utforming av brukergrensesnitt. Ideelt sett så burde alle digitale løsninger med et brukergrensesnitt hatt med en UX-designer i teamet for å forsikre seg om at løsningen får gjort det den skal på en god, intuitiv og effektiv måte. Dessverre er ikke dette alltid tilfelle, og dette er et foredrag som skal hjelpe de som jobber uten designer å ta de rette valgene for sitt GUI.",
    "time": "KL. 15.10-15:40",
    "nextTalk": "Slik lager vi forsida på NRK av Ib Johansen"
  },

  {
    "id": 7,
    "imageUrls": ["ib.gif"],
    "title": "Slik lager vi forsida på NRK",
    "speaker": "Ib Johansen",
    "description": "I 2014 startet NRK planleggingen av ny forside på NRK.no. Årsakene var mange, men i hovedsak dreide det seg om å bytte en utdatert publiseringsplattform og sørge for at brukeren har en like god leseopplevelse alle plattformer, fra mobil til storskjerm. 22. mai 2016 gikk NRK live med både publiseringsmodul og ny uttegning av forsida. Jeg tar dere med på innsiden og viser hvordan vi har bygget en publiseringsplattform hvor mobil vising er i sentrum, hvor samhandling muliggjør en raskest mulig vei fra artikkel til forsida, og hvor fremtidsrettede valg skal forenkle hverdagen for journalistene. Vi ser på hvordan prosjektet har løst samhandling i browsere med Redux og Redis.",
    "time": "KL. 15.50-16:20",
    "nextTalk": ""
  }
];
