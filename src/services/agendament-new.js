import { apiConfig } from "./api-config.js";

export async function agendamentoNew({id,name,when}) {
    try{
await fetch(`${apiConfig.BaseURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id,
            name,
            when
        }),
    })
}

catch (error) {
    alert("Error ")
}
}
