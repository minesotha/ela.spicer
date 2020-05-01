const template = document.createElement('template');
template.innerHTML = `
<style>
:host{
    opacity:0;
}
#card{
    height: 25vh;
    width: 15vh;
    margin: 0 auto;
    top: 50%;
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    transition: 0.6s all;
    cursor:pointer;
}
#card:hover {
    box-shadow: -1px -1px 8px 5px rgba(100, 100, 255, 0.6), 0 6px 20px 0 rgba(5, 60, 150, 0.5);
}
#instruct {
    display: block;
    position: absolute;
    top: 10%;
    width: 100%;
    font-family: auto;
    font-size: 3rem;
    text-align: center;
    font-weight: bold;
    color: white;
    text-shadow: 0px 0px 15px #00f3ff;
}
</style>
<label id="instruct"> Kliknij kartę aby rozpocząć </label>
<img id="card"/>
`;


class CustomCard extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));

        this.$card = shadowRoot.querySelector('#card');

        if (this.hasAttribute('img')) {
            var imgAddress = this.getAttribute('img');
            this.$card.src = imgAddress;
        }

    }
    connectedCallback() {
        this.onclick = () => {
            this.dispatchEvent( new CustomEvent( 'start' ) )
            if (this.onstart)
                this.onstart()
            else
                eval( this.getAttribute( 'onstart' ) )
            this.classList.toggle("hidden");
        } 
        $(this).css("opacity", "1.0"); 
    }
}
customElements.define("custom-card", CustomCard);