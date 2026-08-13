# MC Servizi - Web Platform & Lead Generation Core

Piattaforma web full-stack sviluppata per MC Servizi (ditta artigiana specializzata in carpenteria metallica, installazione infissi, sostituzione serrature di sicurezza e zanzariere).

Il progetto integra un'interfaccia client reattiva ad alte prestazioni per la conversione diretta (chiamata rapida / WhatsApp) e un microservice backend Node.js per l'elaborazione e l'inoltro sicuro delle richieste di preventivo via SMTP.

🛠️ Tech Stack & Architettura
Frontend Architecture
Framework: React 18 con TypeScript per garantire type-safety sui componenti e sugli stati.

Styling & UI Design: Tailwind CSS con tema custom Dark Industrial (#0D0D0D background, elementi metallici e accenti bordeaux #8B0000).

State & Router: Componenti modulari ad alta riutilizzabilità (Header, Hero, Services Grid, Interactive Gallery, Contact Section).

Client-Side Actions: Handlers nativi per la generazione di link dinamici tel: e wa.me con query string pre-compilata.

Backend Architecture
Runtime Environment: Node.js (v18+) con Express.js.

Form Processing: REST API endpoint (POST /api/contact) per il parsing, la sanitizzazione e la validazione dei payload delle richieste.

Mail Service: Integrazione con Nodemailer per il dispatch immediato di notifiche e-mail via SMTP aziendale.

Security & Protection: CORS configurato, protezione da attacchi XSS/injection sui dati del modulo e rate limiting sugli endpoint di contatto.

📐 Struttura delle Directory
mc-servizi/
├── client/                     # App React (Frontend)
│   ├── src/
│   │   ├── assets/             # Logo e asset grafici vettoriali
│   │   ├── components/         # Componenti UI (Header, Services, ContactForm, etc.)
│   │   ├── styles/             # Configurazione Tailwind e variabili CSS globali
│   │   ├── App.tsx             # Main Layout Component
│   │   └── main.tsx            # Entry point dell'applicazione React
│   └── package.json
│
├── server/                     # Server Node.js (Backend API)
│   ├── controllers/            # Controller per l'elaborazione dei contatti
│   ├── routes/                 # Definizione delle rotte REST (/api/contact)
│   ├── services/               # Configurazione del mailer Nodemailer
│   ├── server.js               # Entry point dell'istanza Express
│   └── package.json
│
├── .gitignore                  # Regole d'esclusione Git per file sensibili e nodi
└── README.md

🔌 API Endpoints & Integrazione Data-Flow
POST /api/contact
Riceve i dati inviati dal client quando un utente sottomette il form dei preventivi.

Request Payload Example:
{
"name": "Mario Rossi",
"phone": "+393401234567",
"service": "Serrature di Sicurezza",
"message": "Richiedo preventivo per conversione serratura a cilindro europeo."
}

Response Handling:

200 OK: Richiesta elaborata e mail inviata con successo al destinatario aziendale.

400 Bad Request: Mancanza di campi obbligatori o formato dati non valido.

500 Internal Server Error: Errore durante la connessione al server SMTP.

⚙️ Setup & Environment Variables

1. Configurazione Variabili d'Ambiente (server/.env)
Crea un file .env all'interno della cartella server/ definendo i seguenti parametri d'ambiente:

PORT=5000

RECIPIENT_EMAIL=<info@mcservizi.it>
PHONE_NUMBER=+393330000000
WHATSAPP_NUMBER=+393330000000

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=<tuo-account@gmail.com>
SMTP_PASS=app-password-dedicata
