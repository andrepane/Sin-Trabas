export const speakText = (text) => {
  if (!("speechSynthesis" in window)) {
    return { ok: false, message: "Tu navegador no soporta lectura en voz alta." };
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  utterance.rate = 0.95;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
  return { ok: true };
};

export const startRecording = (onResult, onStatus) => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    onStatus("Tu navegador no permite grabación de voz. Prueba con Chrome en escritorio.", true);
    return null;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "es-ES";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => onStatus("Escuchando…", false);
  recognition.onerror = () => onStatus("No se pudo capturar la voz. Inténtalo otra vez.", true);
  recognition.onend = () => onStatus("Grabación finalizada.", false);
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    onResult(transcript);
  };

  recognition.start();
  return recognition;
};
