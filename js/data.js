export const phrases = [
  "Hoy respiro con calma y me doy permiso para hablar sin prisa.",
  "Tengo tiempo, cada palabra puede salir suave y clara.",
  "Mi voz es estable, yo marco el ritmo.",
  "Empiezo con una letra amable y continúo con confianza.",
  "Si aparece un bloqueo, lo suelto y vuelvo a intentarlo con calma."
];

export const techniques = [
  {
    id: "inicio-suave",
    name: "Inicio suave",
    summary: "Arranca la frase con un sonido suave y controlado.",
    detail:
      "Practica iniciar las frases con una pequeña exhalación y un volumen bajo. Después sube a tu volumen habitual de forma progresiva.",
    steps: [
      "Respira por la nariz durante 3 segundos.",
      "Suelta el aire lentamente mientras dices la primera sílaba.",
      "Mantén el ritmo sin acelerar al final."
    ],
    practice: "Hoy empiezo despacio y dejo que la palabra fluya."
  },
  {
    id: "contacto-visual",
    name: "Contacto visual",
    summary: "Usa la mirada para mantener la calma y el ritmo.",
    detail:
      "Mirar a un punto estable reduce la ansiedad y ayuda a sostener el ritmo. Alterna tu mirada entre un punto fijo y el interlocutor.",
    steps: [
      "Elige un punto tranquilo frente a ti.",
      "Habla una frase mientras mantienes la mirada estable.",
      "Vuelve al interlocutor con suavidad."
    ],
    practice: "Sostengo la mirada y hablo con calma."
  },
  {
    id: "pausas-intencionales",
    name: "Pausas intencionales",
    summary: "Introduce pausas breves para recuperar el control.",
    detail:
      "Una pausa breve no rompe la conversación: te da espacio para reorganizar la respiración y el ritmo.",
    steps: [
      "Divide tu frase en dos partes.",
      "Haz una pausa de un segundo entre ambas.",
      "Retoma la frase con una voz más baja."
    ],
    practice: "Respiro, hago una pausa y continúo con seguridad."
  },
  {
    id: "ritmo-constante",
    name: "Ritmo constante",
    summary: "Mantén un tempo uniforme para evitar bloqueos.",
    detail:
      "Hablar con un ritmo constante evita los picos de tensión. Piensa en un metrónomo interno suave.",
    steps: [
      "Cuenta mentalmente hasta cuatro.",
      "Di cada palabra en un tiempo similar.",
      "Evita acelerar al final."
    ],
    practice: "Sigo un ritmo estable en cada frase."
  }
];

export const panelData = {
  progress: [
    { label: "Sesiones completadas", value: 4, total: 7 },
    { label: "Técnicas practicadas", value: 3, total: 4 },
    { label: "Frases leídas", value: 12, total: 20 }
  ],
  streak: 5,
  nextSession: "Mañana, 19:00",
  highlights: [
    "Mejoraste el ritmo en frases largas.",
    "Las pausas intencionales te dieron más control.",
    "La respiración previa te ayudó a iniciar con suavidad."
  ]
};
