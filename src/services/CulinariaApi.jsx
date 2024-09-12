export const getCulinariaData = async (nome) => {
    try{
        const response = await fetch(`http://localhost/api/receita/${nome}`);
        const data = await response.json();
        return data;
    } catch(error){
        console.error("Erro ao buscar a receita:", error);
    }
};