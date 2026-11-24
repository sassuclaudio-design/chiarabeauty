/* =====================================================================
   CONFIGURAZIONE — modifica SOLO questa parte per aggiornare il sito
   ===================================================================== */
window.CONFIG = {
  // TESTI DELLA HOME — slogan (prima riga + seconda riga in corsivo), payoff e frase introduttiva
  testi: {
    slogan: "La bellezza,",
    sloganCorsivo: "nei dettagli.",
    payoff: "Nail Design · Lash & Brow Beauty",
    intro: "Un'esperienza di bellezza pensata per valorizzare la tua unicità, attraverso precisione, professionalità e attenzione ad ogni dettaglio."
  },

  citta: "Porto Torres (SS) · Sardegna",
  indirizzo: "",                 // es. "Via Esempio 12, 07046 Porto Torres (SS)" — se vuoto non compare
  whatsapp: "",                  // solo cifre con prefisso, es. "393401234567"
  email: "info@chiarabeauty.pro",
  instagram: "chiarabeauty18",
  tiktok: "chiarabeauty1802",
  ragioneSociale: "Chiara Beauty di Maria Chiara Fattacciu",
  piva: "",                      // OBBLIGATORIA per vendere online

  // Link alla pagina di prenotazione Fresha (es. "https://www.fresha.com/a/chiara-beauty-...")
  // Finché è vuoto, le prenotazioni arrivano su WhatsApp/email con il modulo.
  fresha: "",

  orari: [
    ["Lunedì", "XX"], ["Martedì", "XX"], ["Mercoledì", "XX"], ["Giovedì", "XX"], ["Venerdì", "XX"], ["Sabato", "XX"], ["Domenica", "XX"]
  ],

  // PREZZI E DURATE: sostituire "XX" con il valore (es. prezzo: 25, durata: "60 min")
  servizi: {
    "Nails": [
      { nome: "Semipermanente mani", desc: "Preparazione, cuticole e colore a lunga tenuta.", prezzo: "XX", durata: "XX min" },
      { nome: "Rinforzo gel su unghia naturale", desc: "Struttura sottile e resistente sull'unghia naturale.", prezzo: "XX", durata: "XX min" },
      { nome: "Ricostruzione gel", desc: "Allungamento con forma su misura: almond, square, ballerina.", prezzo: "XX", durata: "XX min" },
      { nome: "Refill", desc: "Manutenzione di gel o ricostruzione entro 3–4 settimane.", prezzo: "XX", durata: "XX min" },
      { nome: "French & Nail Art", desc: "French classica, glitter, decorazioni e dettagli dipinti a mano.", prezzo: "XX", da: true, durata: "XX min" },
      { nome: "Semipermanente piedi", desc: "Pedicure estetico con colore a lunga tenuta.", prezzo: "XX", durata: "XX min" }
    ],
    "Lash & Brow": [
      { nome: "Korean Lash Lift", desc: "Curvatura e nutrimento delle ciglia naturali, effetto fino a 6–8 settimane.", prezzo: "XX", durata: "XX min" },
      { nome: "Lash Lift + Tinta", desc: "Lash lift con tintura per uno sguardo più intenso.", prezzo: "XX", durata: "XX min" },
      { nome: "Laminazione sopracciglia", desc: "Sopracciglia ordinate, piene e pettinate, con definizione della forma.", prezzo: "XX", durata: "XX min" },
      { nome: "Combo Lash Lift + Brow", desc: "Ciglia e sopracciglia nella stessa seduta.", prezzo: "XX", durata: "XX min" }
    ]
  },

  // PRODOTTI — "stripe" = Payment Link Stripe (https://buy.stripe.com/...). Se vuoto, l'ordine va su WhatsApp/email.
  prodotti: [
    { nome: "Olio cuticole", desc: "Nutre cuticole e unghie e prolunga la durata del semipermanente.", prezzo: "XX", foto: "", stripe: "" },
    { nome: "Crema mani", desc: "Idratante e non grassa, per mani morbide ogni giorno.", prezzo: "XX", foto: "", stripe: "" },
    { nome: "Siero rinforzante ciglia", desc: "Trattamento quotidiano per ciglia più forti, ideale dopo il lash lift.", prezzo: "XX", foto: "", stripe: "" },
    { nome: "Kit lima & buffer", desc: "Lima professionale e buffer per la cura a casa.", prezzo: "XX", foto: "", stripe: "" },
    { nome: "Gift Card", desc: "Un trattamento da regalare. Importo a scelta, valida 12 mesi.", prezzo: "XX", da: true, foto: "", stripe: "" }
  ],

  // CORSI — date e prezzi da confermare
  corsi: [
    { nome: "Corso base semipermanente", desc: "Preparazione dell'unghia, applicazione e rimozione in sicurezza. Per chi parte da zero.", quando: "Date in arrivo", formato: "1 giorno", chips: ["Principianti", "Max 4 persone", "Kit incluso"], prezzo: "XX", stripe: "" },
    { nome: "Korean Lash Lift", desc: "Teoria, scelta dei bigodini, tempi di posa e pratica su modella.", quando: "Date in arrivo", formato: "1 giorno", chips: ["Principianti", "Individuale", "Attestato"], prezzo: "XX", stripe: "" },
    { nome: "Aggiornamento nail art", desc: "French moderne, effetti e decorazioni di tendenza per professioniste.", quando: "Date in arrivo", formato: "Mezza giornata", chips: ["Professioniste", "Max 4 persone"], prezzo: "XX", stripe: "" }
  ],

  galleria: [
    ["nails-french-glitter", "Nail art"], ["lash-hero", "Lash lift"], ["nails-bordeaux-2", "Semipermanente"],
    ["nails-nero-speckled", "Nail art"], ["nails-prugna", "Semipermanente"], ["lash-lift-2", "Lash lift"],
    ["nails-vino", "Gel"], ["nails-nude", "Classy nails"], ["nails-bordeaux", "Semipermanente"],
    ["nails-rosso", "Semipermanente"], ["nails-nude-rosa", "Classy nails"]
  ]
};
/* ===================================================================== */

/* Applica i testi della home (slogan, payoff, introduzione) — non modificare */
document.addEventListener("DOMContentLoaded", function () {
  var T = window.CONFIG.testi; if (!T) return;
  var eb = document.querySelector(".hero .eyebrow"), h1 = document.querySelector(".hero h1"), p = document.querySelector(".hero h1 + p");
  if (eb && T.payoff) { eb.removeAttribute("data-city"); eb.textContent = T.payoff; }
  if (h1 && T.slogan) { h1.textContent = T.slogan; var s = document.createElement("span"); s.className = "script"; s.textContent = T.sloganCorsivo || ""; h1.appendChild(s); }
  if (p && T.intro) p.textContent = T.intro;
  document.title = "Chiara Beauty · " + T.slogan.replace(/,$/, "") + ", " + (T.sloganCorsivo || "").replace(/\.$/, "") + " · Porto Torres";
  var st = document.createElement("style");
  st.textContent = "@media(max-width:900px){.hero .eyebrow{letter-spacing:.2em;font-size:.68rem}.hero .eyebrow::before{width:18px}}";
  document.head.appendChild(st);
});
