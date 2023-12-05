class App {
    runApplication() {
        console.log("hello world!");
        // additional code goes here

        let canvas=document.getElementById("canvasId")
        console.log(canvas)
        let g = canvas.getContext("2d");
        g.fillStyle = "#08a4a7 ";
        g.fillRect(0,0,canvas.width,canvas.height);
        g.fillStyle = "black"
        g.fillRect(0,0,10,10);
        g.fillStyle = "#000000"
    }
}

let myApp = new App();
myApp.runApplication(); 

