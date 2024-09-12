export const getCulinariaData = async (nome) => {
    try{
        //mude esse fetch para o link que o jorge pedir
        const response = await fetch(`http:/most/api/receita/${nome}`);
        const data = await response.json();
        return data;
    } catch(error){
        console.error("Erro ao buscar a receita:", error);
    }
};