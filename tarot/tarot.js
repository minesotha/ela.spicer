async function getCards() {
    $("#gameboard").removeClass("hidden");
    $("custom-instruction").addClass("hidden");

    var cards = [];
    while (cards.length < 4) {
        cards.push(getRandomCard(cards));
    }
    for (let i = 0; i < cards.length; i++) {
        const element = cards[i];
        var cardText = getCardText(element);
        var card = $('<tarot-card id="card' + i + '" img="../projekt/tarot/' + element + '.jpg" backImg="../projekt/tarot/card_back.jpg" explainerBackground="../projekt/tarot/explainer.jpg" explainerText="' + cardText + '"></tarot-card>');
        $("#gameboardTable").append(card);
        await new Promise(r => setTimeout(r, 1000));
        card.addClass("positioned");
        await new Promise(r => setTimeout(r, 1000));
    }
}

function getRandomCard(cards) {
    var newCard = 0;
    while (cards.indexOf(newCard) > -1 || newCard == 0) {
        newCard = Math.floor(Math.random() * 13) + 1;
    }
    return newCard;
}

function toggleInstruction() {
    $("custom-instruction").toggleClass("hidden");
}


function getCardText(number) {
    var text = '';
    switch (number) {
        case 1:
            text = `Wschodzące słońce - reprezentuje osobiste korzyści i sukcesy. Korzystaj z przewagi pojawiających się okazji.`
            break;
        case 2:
            text = `Głodomór - Wiedza, która jest Ci powierzona. Masz wystarczając wiedzę by móc bez obaw zanurzyć się w miłości i użyć wsparcia, które Ci oferują.`
            break;
        case 3:
            text = `Jaszczur (Spetarian)- Nie bój się wyrażać swoje uczucia, nawet złość. Karta ta reprezentuje pasje, nieznane i wszystko co jest tabu.`
            break;
        case 4:
            text = `Król - Reprezentuje dobrość, miłosierdzie i przebaczenie. Leczenie się i dawanie sobie szansy. Musisz sobie zaufać.`
            break;
        case 5:
            text = `Królowa - Ta karta reprezentuje Twoją wewnętrzną siłe, pewność siebie i umiejętności. Królowa to przywódca, który decyduje. `
            break;
        case 6:
            text = `Księżyc w pełni - Akcje powzięte w ramach potencjału. Konflikty mogą być piękne. Rozważ swoje postrzeganie. `
            break;
        case 7:
            text = `Księżniczka - ukochana przyjaciółka, kobieta która ma na Ciebie wpływ. Sojusznik, który zawsze oferuje dobre rady. `
            break;
        case 8:
            text = `Mistrz ksiąg - Reprezentuje wyzwania, poświęcenia, konsekwencje. Stawianie czoła rzeczywistości. `
            break;
        case 9:
            text = `Prawdziwa miłość -  Znajdujesz się na rozdrożu. Pamiętaj kim jesteś. Karta ta reprezentuje równieć wspólnotę i unię z drugą osobą. `
            break;
        case 10:
            text = `Spadająca gwiazda - Reprezentuje Twóje połączenie z naturą. Refleksja i cicha konemplacja pomogą Ci uwolnić się i  być swoją własną zaufaną sobą. `
            break;
        case 11:
            text = `Śmierć - Oznacza zarówno koniec jak i początek. Nie bój się iść naprzód! Pozbądź się przeszłości, która może Ci ciążyć.`
            break;
        case 12:
            text = `Wiszący kot - Decyzje, które nam ciążą. Pozbądź się przeszłosci, która Cię dręczy. Rzeczy, które są poza zasięgiem Twojej kontroli. `
            break;
        case 13:
            text = `Wola walki-  Reprezentuje zwycięstwo. Odnajdź siłę w swoim celu, do którego zostałeś stworzony i osiągnięciach, których dokonałeś. Przyznaj i pogódź się ze wstydem lub porażką.`
            break;
        default:
            break;
    }
    return text;
}
