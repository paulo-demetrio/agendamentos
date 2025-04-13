import {cancelOrder} from "../../services/Cancel-service.js";
import { agendamentos } from "./load.js"






const periods=document.querySelectorAll(".period");


periods.forEach((period)=>{



period.addEventListener("click", async (event)=>{

if(event.target.classList.contains("cancel")){

const item=event.target.closest("li")
    
const {id}=item.dataset



if(id){

      await cancelOrder({id})
   
      agendamentos();
      
    
  }
  
  
  
  
}

})

})

