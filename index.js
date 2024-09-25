
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
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const s = new HtmlSelectElement(['1', '2']);
s.click();
s.focus();
s.addItem('3');
s.addItem('4');
s.removeItem('4');