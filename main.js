import "./style.css";
import { TextInterface } from "text-interface";

let fail = true;

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Example Text Interface");
while (fail) { 
  fail = false
  let name = await ti.prompt("type start to play");
  if (name.toLowerCase() === "start") 
  {
   let food = await ti.prompt("Survive the diet by answering trivia. what did my mother eat?");
   if (food.toLowerCase() === "fries") 
   //{else}
   //await ti.output("no")
   //fail = true}
   
    {
   let tfood = await ti.prompt("what did tanya eat?")
   if (tfood.toLowerCase()==="slices")
    
   {
    let dfood = await ti.prompt("what did drew eat")
     if (dfood.toLocaleLowerCase()==="donuts")
     {
     let Ifood =await ti.prompt("what did I eat")
      if (Ifood.toLocaleLowerCase()==="all")
      ti.output("YOU WIN!!!!")
     }else{
      ti.output("You fail")
      fail = true
     }
   }
  }
} else {
    await ti.output("type start dummy") 
    fail = true;
  }
}
