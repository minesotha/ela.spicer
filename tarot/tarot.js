async function getCards() {
    $("#gameboard").removeClass("hidden");
    $("custom-instruction").addClass("hidden");

    var cards = [];
    while (cards.length <4){
        cards.push(getRandomCard(cards));
    }
    for (let i = 0; i < cards.length; i++) {
        const element = cards[i];
        var card = $('<tarot-card id="card'+i+'" img="../projekt/tarot/'+element+'.png" backImg="../projekt/tarot/card_back.png"></tarot-card>');
        card.css('opacity','0');
        card.animate({
            opacity: 1
          }, 1000 );
        $("#gameboardTable").append(card);  
        await new Promise(r => setTimeout(r, 1000));
    }
}

function getRandomCard(cards){
    var newCard = 0;
    while (cards.indexOf(newCard) > -1 || newCard==0) {
        newCard = Math.floor(Math.random() * 13)+1;
    }
    return newCard;
}


function toggleInstruction(){
    $("custom-instruction").toggleClass("hidden");
}
