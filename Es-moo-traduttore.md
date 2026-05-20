### 🏋️‍♂️ Esercizio: "Il Traduttore Comico da Terminale"

Il tuo obiettivo è creare un piccolo script che prenda in input una parola o una frase da terminale e la passi a Claude per farla "tradurre" in un dialetto o stile specifico, stampando poi il risultato con la mucca `cowsay`.

#### 📋 Requisiti della sfida:

1. **Input da CLI:** Usa `process.argv` per leggere una frase passata nel terminale dopo il nome del file.
2. **Gestione input:** Se l'utente non scrive nulla, gestisci il caso in modo che la mucca stampi un messaggio di default (es: *"Muuu, dammi qualcosa da tradurre!"*).
3. **Configurazione:** Il tuo script deve leggere dal file `.env` sia la `CLAUDE_API_KEY` che una nuova variabile chiamata `STILE_TRADUZIONE` (es: `STILE_TRADUZIONE="pirata"`).
4. **Logica IA:** Passa a Claude un `SystemMessage` che gli dica di agire come un traduttore che usa lo stile definito nella variabile d'ambiente.
5. **Output:** Stampa la risposta di Claude dentro la mucca `cowsay`.

---

### 🚀 Roadmap per completare l'esercizio

1. **Setup:** Se non lo hai già fatto, crea un file `esercizio.js` (o modifica `main.js`).
2. **Implementazione:**
* Usa `.slice(2).join(' ')` per raccogliere l'input.
* Recupera `process.env.STILE_TRADUZIONE` per personalizzare il `SystemMessage`.
* Invia la richiesta e gestisci il risultato.


3. **Test:**
* Lancia il comando: `node --env-file=.env esercizio.js "Ciao, come stai?"`
* Prova a cambiare `STILE_TRADUZIONE` nel file `.env` in "alieno" o "cavaliere medievale" e osserva come cambia la risposta senza modificare il codice!



---

### 💡 Un piccolo indizio per aiutarti:

Il `SystemMessage` dinamico dovrebbe apparire così:

```javascript
new SystemMessage(`Sei un traduttore che parla sempre come un ${process.env.STILE_TRADUZIONE}.`)

```
