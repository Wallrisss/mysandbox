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
{
   let trewf = await ti.prompt("what did tanya eat?")}
   if (trewf.toLowerCase()==="slices")
   {
    ti.output("blah blah blah")
     } else {
      await ti.output("no")}




  } else {
    await ti.output("type start dummy") 
    fail = true;
    

    
  }
}
