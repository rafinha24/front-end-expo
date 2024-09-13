export const getCulinariaData = async (nome) => {
    try{
        //mude esse fetch para o link que o jorge pedir
        const response = await fetch(`https://8d19-201-22-100-109.ngrok-free.app/api/receita/${nome}`, {headers: {
            "ngrok-skip-browser-warning" : undefined
        }});
        const data = await response.json();
        return data;
    } catch(error){
        console.error("Erro ao buscar a receita:", error);
    }
};