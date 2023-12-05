class App {
    runApplication() {
        console.log("hello world!");
        // additional code goes here

        let canvas=document.getElementById("canvasId")
        console.log(canvas)
        let g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "#FFFF00";
        g.moveTo(20,20);
        g.lineTo(300,300);
        g.lineTo(580,20);
        g.closePath();
        g.stroke();
        g.fill()
        
    }
}

let myApp = new App();
myApp.runApplication(); 

