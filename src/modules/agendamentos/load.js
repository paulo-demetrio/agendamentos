import { HoursLoad } from "../form/hoursLoad.js";
import { schedulesFetchDay} from "../../services/schedule-fect-day.js"; 
import { agendamentoShow } from "../agendamentos/show.js";



const selectdate=document.getElementById("date");



export async function agendamentos() {


const date= selectdate.value

const DailyAgendamentos= await schedulesFetchDay({date})



agendamentoShow({DailyAgendamentos})


HoursLoad({date, DailyAgendamentos })

}





export function hoursdisponible() {
    
}

