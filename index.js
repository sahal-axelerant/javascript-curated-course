
// Parent constructor.
function HtmlElement() {
    this.click = function() { console.log("Clicked"); }
}

HtmlElement.prototype.focus = function() { console.log("Focused"); }
HtmlElement.prototype.constructor = HtmlElement;


const e = new HtmlElement();


// Child constructor.
function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function(value) {
        this.items.push(value);
    }
    this.removeItem = function(value) {
        this.items = this.items.filter(item => item !== value);
    }
    this.render = function() {
        // let html = '';
        // html += '<select>\n';
        // for (const item of this.items) {
        //     html+= `<option>${item}</option>\n`;
        // }
        // html += '</select>';
        // return html;
        return `<select>${this.items.map(item => `<option>${item}</option>`).join('')}</select>`;
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;



function HtmlImgElement(src = '') {
    this.src = src;
    this.render = function() {
        return `<img src="${this.src}" />`;
    }
}

HtmlImgElement.prototype = new HtmlElement();
HtmlImgElement.prototype.constructor = HtmlImgElement;

const elements = [
    new HtmlSelectElement(['1', '2', '3']),
    new HtmlImgElement('http://jdnfj.com/media/1')
];

for (const element of elements)
    console.log(element.render());