        // Section navigation
        function showSection(sectionId) {
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionId).classList.add('active');
            
            // Hide technique details if showing
            document.getElementById('technique-details').classList.add('hidden');
            document.querySelectorAll('.technique-detail').forEach(detail => {
                detail.classList.remove('technique-detail');
            });
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
        
        // Technique details
        function showTechnique(technique) {
            document.getElementById('techniques').classList.remove('active');
            document.getElementById('technique-details').classList.remove('hidden');
            document.getElementById(`${technique}-detail`).classList.add('technique-detail');
            window.scrollTo(0, 0);
        }
        
        function hideTechnique() {
            document.getElementById('technique-details').classList.add('hidden');
            document.querySelectorAll('.technique-detail').forEach(detail => {
                detail.classList.remove('technique-detail');
            });
            document.getElementById('techniques').classList.add('active');
        }
        
        // Exercises - Syllable Generator
        let currentDifficulty = 'easy';
        
        function setDifficulty(level) {
            currentDifficulty = level;
            // Update button styles
            document.querySelectorAll('.difficulty-btn').forEach(btn => {
                btn.classList.remove('bg-blue-500', 'text-white');
                btn.classList.add('bg-blue-100', 'text-blue-800');
            });
            event.target.classList.remove('bg-blue-100', 'text-blue-800');
            event.target.classList.add('bg-blue-500', 'text-white');
        }
        
        const easySyllables = ['ba', 'be', 'bi', 'bo', 'bu', 'pa', 'pe', 'pi', 'po', 'pu', 'ma', 'me', 'mi', 'mo', 'mu'];
        const mediumSyllables = ['bra', 'bre', 'bri', 'bro', 'bru', 'pla', 'ple', 'pli', 'plo', 'plu', 'tra', 'tre', 'tri', 'tro', 'tru'];
        const hardSyllables = ['spla', 'sple', 'spli', 'splo', 'splu', 'stra', 'stre', 'stri', 'stro', 'stru', 'scra', 'scre', 'scri', 'scro', 'scru'];
        
        function generateSyllables() {
            let syllables = [];
            let count = 0;
            
            switch(currentDifficulty) {
                case 'easy':
                    syllables = easySyllables;
                    count = 4;
                    break;
                case 'medium':
                    syllables = mediumSyllables;
                    count = 4;
                    break;
                case 'hard':
                    syllables = hardSyllables;
                    count = 3;
                    break;
            }
            
            let result = [];
            for(let i = 0; i < count; i++) {
                const randomIndex = Math.floor(Math.random() * syllables.length);
                result.push(syllables[randomIndex]);
            }
            
            document.getElementById('syllable-display').textContent = result.join(' - ');
        }
        
        function hideSyllable() {
            document.getElementById('syllable-display').textContent = '😊 Intenta decirlo en tu mente primero';
            setTimeout(() => {
                document.getElementById('syllable-display').textContent = 'Presiona "Generar" para comenzar';
            }, 1500);
        }
        
        // Exercises - Conversation Topics
        let currentAgeGroup = 'adult';
        
        const childTopics = [
            "Habla sobre tu juguete favorito y por qué te gusta",
            "Describe qué hiciste el fin de semana pasado",
            "Cuenta qué te gusta hacer con tus amigos",
            "Explica cómo es tu animal favorito",
            "Habla sobre tu comida preferida y por qué"
        ];
        
        const teenTopics = [
            "Discute sobre tu serie o película favorita",
            "Habla sobre qué te gustaría estudiar en el futuro",
            "Comenta sobre un problema social que te preocupe",
            "Describe cómo sería tu día perfecto",
            "Habla sobre alguien que admiras y por qué"
        ];
        
        const adultTopics = [
            "Describe tu trabajo o estudios actuales",
            "Habla sobre un libro que te haya impactado",
            "Comenta sobre los desafíos de ser padre/madre (si aplica)",
            "Discute sobre un viaje que te gustaría hacer",
            "Habla sobre cómo manejas el estrés en tu vida"
        ];
        
        function setAgeGroup(ageGroup) {
            currentAgeGroup = ageGroup;
            // Update button styles
            document.querySelectorAll('.age-btn').forEach(btn => {
                btn.classList.remove('bg-green-500', 'text-white');
                btn.classList.add('bg-green-100', 'text-green-800');
            });
            event.target.classList.remove('bg-green-100', 'text-green-800');
            event.target.classList.add('bg-green-500', 'text-white');
        }
        
        function generateTopic() {
            let topics = [];
            
            switch(currentAgeGroup) {
                case 'child':
                    topics = childTopics;
                    break;
                case 'teen':
                    topics = teenTopics;
                    break;
                case 'adult':
                    topics = adultTopics;
                    break;
            }
            
            const randomIndex = Math.floor(Math.random() * topics.length);
            document.getElementById('topic-display').textContent = topics[randomIndex];
        }
        
        function hideTopic() {
            document.getElementById('topic-display').textContent = '🤔 Piensa cómo desarrollarías este tema';
            setTimeout(() => {
                document.getElementById('topic-display').textContent = 'Selecciona tu edad y obtén un tema';
            }, 1500);
        }
        
        // Practice Diary
        function savePractice() {
            const date = document.getElementById('practice-date').value;
            const technique = document.getElementById('technique-select').value;
            const reflection = document.getElementById('practice-reflection').value;
            
            if (!date || !reflection) {
                alert('Por favor completa todos los campos');
                return;
            }
            
            // Get technique name for display
            let techniqueName = '';
            switch(technique) {
                case 'soft-start': techniqueName = 'Inicio suave'; break;
                case 'smoothing': techniqueName = 'Suavización'; break;
                case 'slow-down': techniqueName = 'Enlentecimiento'; break;
                case 'stop': techniqueName = 'Técnica STOP'; break;
                case 'breathing': techniqueName = 'Coordinación fono-respiratoria'; break;
                case 'intonation': techniqueName = 'Entonación'; break;
                case 'continuous': techniqueName = 'Fonación continuada'; break;
                case 'generalization': techniqueName = 'Generalización'; break;
            }
            
            // Format date
            const formattedDate = new Date(date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Create entry
            const entry = document.createElement('div');
            entry.className = 'bg-white p-4 rounded-lg shadow border border-gray-200';
            entry.innerHTML = `
                <div class="flex justify-between items-start mb-2">
                    <h4 class="font-semibold text-blue-600">${techniqueName}</h4>
                    <span class="text-sm text-gray-500">${formattedDate}</span>
                </div>
                <p class="text-gray-700">${reflection}</p>
            `;
            
            // Add to the top of the list
            document.getElementById('practice-entries').prepend(entry);
            
            // Clear form
            document.getElementById('practice-date').value = '';
            document.getElementById('practice-reflection').value = '';
            
            // Show confirmation
            alert('Práctica guardada correctamente');
        }
        
        // Contact Form
        function submitContact() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Por favor completa todos los campos obligatorios');
                return;
            }
            
            // In a real app, you would send this data to a server
            // Here we'll just show a confirmation
            const subject = document.getElementById('subject').value;
            let subjectText = '';
            
            switch(subject) {
                case 'question': subjectText = 'Consulta'; break;
                case 'suggestion': subjectText = 'Sugerencia'; break;
                case 'feedback': subjectText = 'Comentario'; break;
                case 'other': subjectText = 'Otro'; break;
            }
            
            alert(`Gracias ${name}, hemos recibido tu ${subjectText.toLowerCase()}. Te responderemos a ${email} pronto.`);
            
            // Reset form
            document.getElementById('contact-form').reset();
        }
        
        // Set today's date as default in practice diary
        document.addEventListener('DOMContentLoaded', function() {
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('practice-date').value = today;
        });
// Interactive phrase generator and voice recording
const techniquePhrases = {
  'soft-start': [
    'Al amanecer aparece la armonía',
    'Ahora habla muy suave y relajado'
  ],
  'smoothing': [
    'Sigue las suaves olas del sonido',
    'Las palabras fluyen una tras otra'
  ],
  'slow-down': [
    'Cada palabra se dice con calma',
    'Respira y habla lentamente'
  ],
  'stop': [
    'Para un momento y respira',
    'Detente antes de seguir hablando'
  ],
  'breathing': [
    'Respiro hondo y digo hola',
    'El aire acompaña cada frase'
  ],
  'intonation': [
    'Qué agradable día tenemos',
    '¿Vienes con nosotros al parque?'
  ],
  'continuous': [
    'Voy hablando de forma continua',
    'Mantengo la voz sin cortes'
  ],
  'generalization': [
    'Practico las técnicas en la vida diaria',
    'Aplico todo lo aprendido siempre'
  ]
};

let recorder;
let recStart;
let currentTech = '';

function generatePhrase(tech) {
  const phrases = techniquePhrases[tech];
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  document.getElementById(`${tech}-phrase`).textContent = phrase;
}

function startRecording(tech) {
  if (recorder) return;
  navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    recorder = new MediaRecorder(stream);
    recStart = Date.now();
    currentTech = tech;
    recorder.onstop = () => {
      stream.getTracks().forEach(t => t.stop());
      const phrase = document.getElementById(`${tech}-phrase`).textContent;
      const words = phrase.trim().split(/\s+/).length;
      const minutes = (Date.now() - recStart) / 60000;
      const wpm = Math.round(words / minutes);
      document.getElementById(`${tech}-result`).textContent = `Velocidad aproximada: ${wpm} palabras/minuto`;
      recorder = null;
    };
    recorder.start();
    document.getElementById(`${tech}-result`).textContent = 'Grabando...';
  }).catch(() => alert('No se pudo acceder al micrófono'));
}

function stopRecording(tech) {
  if (recorder && tech === currentTech) {
    recorder.stop();
  }
}
