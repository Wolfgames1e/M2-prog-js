class App {
    runApplication() {
        console.log("hello world!");
        let appnaam="stickers"
        console.log  ("appnaam:"+appnaam)
        let versienumer=1.1
        console.log("versienumer:"+versienumer)
        let versiedatum=2023
        console.log("versiedatum:"+versiedatum)
        let atheur="wolf"
        console.log ("atheur:"+atheur)
        let copyright="github"
        console.log("copyright:"+copyright)
        let distributer="elktra"
        console.log("distributer:"+distributer)
        let darkmode=true
        console.log("darkmode:"+darkmode)
    }
}

let myApp = new App();
myApp.runApplication(); // Note the added parentheses here
console.log  ("appnaam:"+appnaam);
console.log("versienumer:"+versienumer);
console.log("versiedatum:"+versiedatum);
console.log ("atheur:"+atheur);
console.log("copyright:"+copyright);
console.log("distributer:"+distributer);
console.log("darkmode:"+darkmode);
