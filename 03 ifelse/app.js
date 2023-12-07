class App 
{
    runApplication() {
        console.log("hello world!");
        
        let title = document.getElementById("newstitle");
        console.log(title);
    
   
        let random = Math.random();
        console.log(random);
         if(random < 0.2)

         {

            title.style.backgroundColor = "#739BD0"
            
          }
    }
}

let myApp = new App();
myApp.runApplication(); 


