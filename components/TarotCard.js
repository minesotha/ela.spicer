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
    opacity:1;
}
.card:hover {
    box-shadow: -1px -1px 8px 5px rgba(100, 100, 255, 0.6), 0 6px 20px 0 rgba(5, 60, 150, 0.5);
    opacity:0.5;
}
.hidden{
    display:none;
}
</style>
<img id="front" class="card hidden"/>
<img id="back" class="card"/>

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

        this.onclick = () => {
            this.$front.classList.remove("hidden");
            this.$back.classList.add("hidden");
        }

    }
}
customElements.define("tarot-card", TarotCard);