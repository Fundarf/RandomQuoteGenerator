let but = document.querySelector("button");
let h = document.querySelector("h1");
let ci = document.querySelector("cite");
let quotes = [{q: "Never, never, never give up", c: "- Winston Churchill"}, {q: "Simplicity is the ultimate sophistication", c: "- Leonardo da Vinci"}, {q: "Your time is limited, so don’t waste it living someone else’s life", c: "- Steve Jobs"}, {q: "No two persons ever read the same book", c: "- Woodrow Wilson"}, {q: "Be yourself; everyone else is already taken", c: "- Oscar Wilde"}, {q: "So many books, so little time", c: "- Frank Zappa"}, {q: "A room without books is like a body without a soul", c: "- Marcus Tullius Cicero"}];

but.addEventListener("click", getQuote);

let oldNum;

function getQuote(){
    let num = getRandomInt(0, quotes.length-1);
    console.log(num, oldNum);
    if(num === oldNum){
        num += 1
        
        if(num > quotes.length-1){
            num -= 2
        }
    };
    h.innerHTML = (quotes[num].q);
    ci.innerHTML = (quotes[num].c);
    oldNum = num;
    console.log(num, oldNum);
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};