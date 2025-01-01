# ParentsConnect

ParentsConnect är en plattform där användare kan registrera sig, logga in och för att skapa, visa och anmäla sig till aktiviteter baserat på datum. Man interagerar med aktiviteter via en kalender där man kan välja datum och se aktiviteter som är kopplade till det.

Appen riktar in sig på föräldrar till småbarn mellan 0-4 år primärt.

Denna hemsida är byggd med Vite och React primärt samt med MongoDB som server.

Se package.json för övrig information om paket.

## Installation

Installera Node.js och sedan paketen genom npm install på både client och backend

Två .env filer krävs
I backend: MONGO_URI: din databas
samt Port=5000

I client:
VITE_API_URL= din frontend
VITE_API_URL_LOCAL=http://localhost:5000

För utveckling:
npm run dev

För produktion:
npm run build
npm start

## Krav som mötts

- [x] **JavaScript** - Projektet ska utvecklas med ett modernt JavaScript-ramverk. Till exempel React eller Vue.
- [x] **Databas** - Ni ska använda en databas för att lagra och hämta värden.
- [x] **State hantering** - Hantera och uppdatera applikationens state på ett organiserat och effektivt sätt.
- [x] **Responsiv** - Produkten ska vara responsiv och anpassad efter enhetsorientering.
- [x] **Dynamiska komponenter** - Projektet ska innehålla dynamiska komponenter som visar på reaktivitet, interaktivitet, datahantering och visuella effekter som animering.
- [x] **Semantisk HTML** - Använd semantisk HTML (HTML 5).
- [x] **Tillgänglighet** - Koden ska vara tillgänglig enligt den globala standarden WCAG 2.1.

## Live hemsida

Se sidan genom att gå in på:

https://parentsconnect-website.onrender.com

Notera dock att i aktivitetssidan behöver du vänta 20 sek på laddning pg a gratisversion på render
