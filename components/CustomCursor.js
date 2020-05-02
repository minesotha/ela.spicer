const template = document.createElement('template');
template.innerHTML = `
<style>
:host{
}
#cursor{
    cursor: none;
    z-index: 999999;
    position: absolute;
    pointer-events: none;
}
</style>
<img id="cursor"/>
`;


class CustomCursor extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));

        this.$cursor = shadowRoot.querySelector('#cursor');

        if (this.hasAttribute('img')) {
            var imgAddress = this.getAttribute('img');
            this.$cursor.src = imgAddress;
        }

    }
    connectedCallback() {
        var cursor = this.$cursor;
        $(document).on("mousemove", null, cursor, (event, cursor) => this.moveCursor(event));
    }

    moveCursor = function (e) {
        e.preventDefault();
        let mousePosition = {
            x: event.clientX,
            y: event.clientY
        };
        $(e.data).css("top", (mousePosition.y ) + 'px');
        $(e.data).css("left", (mousePosition.x) + 'px');
    }
}
customElements.define("custom-cursor", CustomCursor);