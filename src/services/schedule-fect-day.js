import { apiConfig } from "./api-config.js";
import dayjs from "dayjs";

export async function schedulesFetchDay({ date }) {
    try {
        const response = await fetch(`${apiConfig.BaseURL}`);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        const data = await response.json();

        const DailyAgendamentosFilter = data.filter((agendamentos) =>
            dayjs(date).isSame(agendamentos.when, "day")
        );

        return DailyAgendamentosFilter;
    } catch (error) {
       
      
        return [];
    }
}