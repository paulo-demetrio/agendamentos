import { apiDelete } from "./api-config.js";




export async function cancelOrder({ id }) {
  try {

    console.log("ID enviado:", id);
    console.log("URL gerada:", `${apiDelete.BaseURL}${id}`);


    const response = await fetch(`${apiDelete.BaseURL}${id}`, {
      method: apiDelete.method,
    });





    

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status} - ${response.statusText}`);
    }

    // Processa o JSON apenas se a resposta for bem-sucedida
    const data = await response.json();
    console.log("Recurso excluído com sucesso:", data);
    alert("Pedido cancelado com sucesso");
  } catch (error) {
    console.log("Erro ao cancelar o pedido:", error);
    alert("Erro ao cancelar o pedido, tente novamente mais tarde");
  }
}



