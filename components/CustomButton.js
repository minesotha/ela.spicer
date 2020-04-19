class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.classList.add("customButton");

        // Insert additional classes
        if (this.hasAttribute('class')) {
            var customClassList = this.getAttribute('class').split(' ');
            var parent = this;
            customClassList.forEach(element => {
                parent.classList.add(element);
            }, parent);
        }

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

        // Insert href
        if (this.hasAttribute('href')) {
            var href = this.getAttribute('href');
            this.onclick = () => {
                window.location.href = href;
            }
        }

        //if contains picture, make component for it
        if (this.hasAttribute('img')) {
            var imgAddress = this.getAttribute('img');
            var img = document.createElement('img');
            img.src = imgAddress;
            img.classList.add("horoscopeImg");  

            var fog =  document.createElement('div');
            fog.classList.add("fog");
            
            var wrapper =  document.createElement('div');
            wrapper.classList.add("wrapper");
            wrapper.appendChild(img);  
            wrapper.appendChild(fog); 
            

            this.onclick = () => {
                    wrapper.classList.add('visible')
            }
            wrapper.onclick = () => {
                wrapper.classList.remove('visible')
            }

            document.body.appendChild(wrapper);
        }
    }
}

customElements.define('custom-button', CustomButton);