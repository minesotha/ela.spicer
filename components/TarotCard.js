const template = document.createElement('template');
template.innerHTML = `
<style>
.card{
    height: 34.1vh;
    width: 22.6vh;
    margin: 0 auto;
    display: block;
    position: absolute;
    transition: 0.6s all;
    cursor:pointer;
}
.card:hover {
    box-shadow: -1px -1px 8px 5px rgba(100, 100, 255, 0.6), 0 6px 20px 0 rgba(5, 60, 150, 0.5);
}
.hidden{
    display:none;
}
explainer{
    margin: 0 auto;
    display: block;
    position: absolute;
}
#explainerText{
    z-index: 5;
    position: absolute;
    padding: 2vh;
    color: black;
    font-style: italic;
    font-size: 2.2vh;
}
#front{
    opacity:1;
    transition: 0.6s all;
}
#front:hover{
    opacity:0.5;
}
</style>
<img id="front" class="card hidden"/>
<img id="back" class="card"/>
<div id="explainer" class="hidden"></div>
`;


class TarotCard extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));

        this.$front = shadowRoot.querySelector('#front');
        if (this.hasAttribute('img')) {
            var imgAddress = this.getAttribute('img');
            this.$front.src = imgAddress;
        }

        this.$back = shadowRoot.querySelector('#back');
        if (this.hasAttribute('backImg')) {
            var imgAddress = this.getAttribute('backImg');
            this.$back.src = imgAddress;
        }

        this.$exp = shadowRoot.querySelector('#explainer');

        if (this.hasAttribute('explainerBackground')) {

            var img = document.createElement('img');
            var imgAddress = this.getAttribute('explainerBackground');
            img.id = "explainerBackground";
            img.classList.add("card");
            img.src = imgAddress;
            this.$exp.appendChild(img);
        }

        // this.$label = shadowRoot.querySelector('#explainerText');
        if (this.hasAttribute('explainerText')) {
            var label = document.createElement('label');
            var text = this.getAttribute('explainerText');
            label.textContent = text;
            label.id = "explainerText";
            this.$exp.appendChild(label);
        }


        this.onclick = () => {
            if (this.$front.classList.contains("hidden")) {
                this.$front.classList.remove("hidden");
                this.$back.classList.add("hidden");
            }
            else {
                this.$exp.classList.toggle("hidden");
            }
        }

    }
}
customElements.define("tarot-card", TarotCard);