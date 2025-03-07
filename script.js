// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

    //Form
    const Ticket = document.getElementById('Ticket');
    console.log(Ticket);
    //Age
    const userAgeElement = document.getElementById('userAge');
    console.log(userAge);
    //Km
    const userKmElement = document.getElementById('userKm');
    console.log(userKm);

    Ticket.addEventListener('submit', function(evento){
        evento.preventDefault();

        const userAge = parseInt(userAgeElement.value);
        const userKm = parseFloat(userKmElement.value);

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const ticketPrice = 0.21;
const discountUnder18 = 20;
const discountOver65 = 40;

//info in pagina(ul)
const ageInfoElement = document.getElementById('age-info');
const kmInfoElement = document.getElementById('km-info');
const discountInfoElement = document.getElementById('discount-info');
const priceInfoElement = document.getElementById('price-info');


//Logica calcolo sconti e prezzo finale
let Price = ticketPrice * userKm;
        console.log(Price);

        let discount = 0;
        if(userAge<18){
            console.log('Sconto minorenni');

            discount = (Price * discountUnder18) / 100 ;
        } else if(userAge>65){
            console.log('Sconto anziani');

            discount = (Price * discountOver65) / 100 ;
        }

        //prezzo finale
        Price = Price - discount;
        console.log(Price);
        //riassumo tutta la formattazione del prezzo e dello sconto in una parola sola
        //prezzo
        const PriceFormatted = `${Price.toFixed(2)}€`;
        //sconto
        const discountFormatted = `${discount.toFixed(2)}€`;

        console.log(`Hai risparmiato ${discountFormatted}€`);
        console.log(`Prezzo finale ${PriceFormatted}€`);







        //info in pagina
        ageInfoElement.innerText = userAge;
        kmInfoElement.innerText = userKm;
        discountInfoElement.innerText = discountFormatted;
        priceInfoElement.innerText = PriceFormatted;


    })


// MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.