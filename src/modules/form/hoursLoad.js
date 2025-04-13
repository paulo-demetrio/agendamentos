import {hoursD} from "../../utils/hours-dissponible.js";
import dayjs from "dayjs"
import {hourclick} from "./hours-click.js"
import { agendamentos } from "../agendamentos/load.js";

const ul= document.getElementById("hours")





export function HoursLoad({date, DailyAgendamentos}) {

ul.innerHTML = "";


const invalido=DailyAgendamentos.map((agendamentos)=>dayjs(agendamentos.when).format("HH:mm"))


 const opening= hoursD.map((hour)=>{

const [dissponibleHour]= hour.split(":")


const ishour= dayjs(date).add(dissponibleHour, "hour").isBefore(dayjs())


const available= !invalido.includes(hour) && !ishour


return{hour, available,}
 

 })   



opening.forEach(({hour, available})=>{

const lihour= document.createElement("li")
lihour.classList.add("hour")
lihour.classList.add( available ?"hour-available":"hour-unavailable")


lihour.textContent= hour

if (hour==="08:00") {
    hourtittle("Manhã")

    
} else if (hour==="13:00") {
    hourtittle("Tarde") 
    
}else if (hour==="18:00") {
    hourtittle( "Noite")
}

ul.append(lihour)

})

hourclick()

}


function hourtittle(title) {
    const header= document.createElement("li")
    header.classList.add("hour-period")
header.textContent = title
    
ul.append(header)

}



