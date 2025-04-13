import dayjs from "dayjs";

const nigth = document.getElementById("period-night");
const morning = document.getElementById("period-morning");
const afternoon = document.getElementById("period-afternoon");

export function agendamentoShow({ DailyAgendamentos }) {
    try {

        // Limpa o conteúdo das listas
        nigth.innerHTML = "";
        morning.innerHTML = "";
        afternoon.innerHTML = "";



        // Itera sobre os agendamentos
        DailyAgendamentos.forEach((agendamentos) => {
            const item = document.createElement("li");
            const name = document.createElement("span");
            const time = document.createElement("strong");

            item.setAttribute("data-id", agendamentos.id);
            time.textContent = dayjs(agendamentos.when).format("HH:mm");
            name.textContent = agendamentos.name;

            const cancelicon = document.createElement("img");
            cancelicon.classList.add("cancel");
            cancelicon.src = "./src/assets/cancel.svg";
            cancelicon.alt = "cancelar agendamento";

            item.append(time, name, cancelicon);

            const hour = dayjs(agendamentos.when).hour();

            if (hour <= 12) {
                morning.appendChild(item);
            } else if (hour > 12 && hour <= 17) {
                afternoon.appendChild(item);
            } else {
                nigth.appendChild(item);
            }
        });
    } catch (error) {
        alert("Erro ao carregar agendamentos");
        console.error(error);
    }
}