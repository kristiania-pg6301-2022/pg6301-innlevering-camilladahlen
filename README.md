# pg6301-innlevering-camilladahlen
pg6301-innlevering-camilladahlen Innlevering av Magnus Hodne & Camilla Dahlen

## Innlevering pg6301

Denne innleveringen er anbefalt, men ikke påkrevd for å ta eksamen (PG6301 har ingen obligatoriske øvelser)

Dersom du gjør innleveringen vil du få verdifull input og kontroll opp mot eksamen. Innleveringen skal gjøres parvis. Det er tillatt og anbefalt at man samarbeider med andre par for å hjelpe hverandre.

Målet med innleveringen er at man skal kjøre en webapplikasjon på skytjenesten Heroku. Applikasjonen skal være en quiz der brukeren får et quiz-spørsmål og skal velge riktig svar.

Applikasjonen skal vise at dere behersker:

* Parcel
* React
* React Router
* Express
* Jest
* Coveralls
* Github Actions
* Heroku

### Oppsummert:
* [X] Få en Parcel til å bygge en React applikasjon
* [X] Få React Router til å navigere rundt i applikasjonen
* [X] Få React til å hente og lagre informasjon til et API
* [X] Få Heroku til å publisere websidene
* [ ] Få Github Actions til å kjøre Jest-testene og publisere coverage til Coveralls

*Express-serveren skal ha følgende API:*
* [X] GET /api/question - returnerer et tilfeldig spørsmål med { id, category, question, answers } 
* [X] POST /api/question - tar inn { id, answer } og returnerer "true" eller "false"

Dere kan ta utgangspunkt i følgende eksempel på spørsmål, men dere må endre på formatet som returneres til klienten slik at klienten ikke vet hvilket alternativ som er riktig: https://quizapi.io/