class CustomButton extends HTMLElement {
    #text = 'przycisk';
    constructor() {
        console.log("constructor");
        super();
        this.classList.add("customButton");
        console.log(this.isConnected);
        
        // Insert text
        var text;
        if (this.hasAttribute('text')) {
            text = this.getAttribute('text');
        } else {
            text = 'test';
        }
        var label = document.createElement('label');
        label.textContent = text;
        this.appendChild(label);
    }
}

customElements.define('custom-button', CustomButton);