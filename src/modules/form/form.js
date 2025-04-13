import dayjs, { Dayjs } from "dayjs";
import { v4 as uuidv4} from "uuid";
import {agendamentoNew} from "../../services/agendament-new.js"
import {agendamentos} from "../agendamentos/load.js"


const form = document.querySelector("form");
const NameClient=document.getElementById("client");
const dateS=document.getElementById("date");
const hour=document.getElementsByClassName("li hour");
const hours=document.getElementsByClassName("hours");

const inpuToday=dayjs(new Date()).format("YYYY-MM-DD")
//ja atualizando data em tempo real
dateS.value= inpuToday

//colocando o valor min no input de data para não permitir datas passadas
dateS.min= inpuToday



form.onsubmit = async (event) => {
    event.preventDefault();




    try {
//client
const Name=NameClient.value.trim()


const hourSelected=document.querySelector(".hour-selected")

if (!hourSelected) {
   return alert("Selecione um horário")    
}

const [hour]= hourSelected.innerText.split(":")

const when=dayjs(dateS.value).add(hour, "hour")
console.log(when);
const id= uuidv4();




await agendamentoNew({id,name:Name,when})

 agendamentos()
NameClient.value=""

    } catch (error) {
        alert("Todos os horarios foram preenchidos, tente novamente mais Tarde!");
        console.log(error);
    }
    







}










