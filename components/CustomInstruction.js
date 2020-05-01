const template = document.createElement('template');
template.innerHTML = `
<style>
:host{
    position: relative;
    text-align: center;
    color: white;
    display: inline-block;
    z-index: 3;
}
#instruction-content {
    color: black;
    position: absolute;
    display: table-row;
    top: 0;
    margin: 30% 19% 0% 23%;
    max-height: 64%;
    font-size: 16px;
    overflow-y: auto;
}
#background {
    height: 100vh;
    display: block;
}
.head {
    text-decoration: underline;
    font-style: oblique;
}

</style>
<img id="background"/>
<div id="instruction-content">
<h2 class="head"> Układ dojrzałości mewniańskiej </h2>
<label>
To konkretne rozdanie reprezentuje zmiany. Pomoże odkryć abstrakcje i określi co musi się wydarzyć w celu rozwinięcia skrzydeł i osiągnięcia osobistej doskonałości.
Najpierw skup się na swoim pytaniu. Może ono dotyczyć związku, pracy, szkoły albo konkretnego problemu czy sytuacji. Używając formy osiagnięcia dojrzałości przez rodzinę Butterfly jako ekspresji Twojego umysłu. </label>
</br>
<label>Potasujesz teraz karty i położysz je na planszy rewersem do góry zaczynając od Problemu, następnie Przeszłość i Teraźniejszość. Na końcu położysz Ścieżkę. Kliknij każdą z kart by odsłonić co gwiazdy mają Ci do powiedzienia. Przeczytaj opisy i spróbuj interpretować każdą z nich w odniesieniu do Twojego pytania.</label>
<h3 class="head">Pola: </h3>
<ul>
<li><b>Problem</b> - reprezentuje Twoje obecne rozterki. Odnosi się bezpośrednio do Twoich obecnych kłopotów, z którymi się mierzysz. </li>
<li><b>Przeszłość</b> - karta na tym polu określa pewne części Twojej przeszłości, które mogą Ci ciążyć i wpływać na Twoj obecny problem.</li>
<li><b>Przyszłość</b> - reprezentuje wyzwania, z którymi się mierzysz, a które blokują Cię od ruszenia naprzód. </li>
<li><b>Ścieżka</b> - karta na tym polu reprezentuje odpowiedź. Wskazuje drogę i określa rezultat Twojego problemu. </li>
</ul>
</div>
`;


class CustomInstruction extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));

        this.$background = shadowRoot.querySelector('#background');

        if (this.hasAttribute('backgroundImg')) {
            var imgAddress = this.getAttribute('backgroundImg');
            this.$background.src = imgAddress;
        }
        this.onclick = () => {
            $(this).animate({ "left": "-=1000px" }, 1000, "linear", function() {
                // alert( "all done" );
                this.classList.add('hidden');
                $(this).css("left", "0");
              });
        }
    }
}
customElements.define("custom-instruction", CustomInstruction);