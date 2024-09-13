import React , { useState } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { getCulinariaData } from './services/CulinariaApi.jsx';
import './index.css';


const Culinaria = () => {
  const [culiweb, setCuli] = useState(null);
  const [search, setSearch] = useState('');
  


  const handleSearch = async () => {
    const data = await getCulinariaData(search.toLowerCase());
    console.log(data)
    setCuli(data);

  };



  return (
    <div>
        <h1>Receitas De Doces</h1>

        <div className='Div-Todos'>
          <div className='Div-Comeco' id='campo-entrada'>
            <h2>Digite a Receita</h2>
            <p>Sua receita, Seu sonho!</p>
            <input
              type="text"
              placeholder="Digite o numero do doce!"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
              className='Input-Comeco'
            />
            <button onClick={handleSearch} className='Button-Comeco'>Clique para obter receita</button>

            
          </div>

          <div className='Div-Questionario'>
            <h2> Receitas Do Site: </h2>
            <ul>
              <li>1. BOLO DE CENOURA</li>
              <li>2. TORTA DE LIMÃO</li>
              <li>3. PUDIM DE LEITE CONDENSADO</li>
              <li>4. BROWNIE</li>
            </ul>
          </div>

          <div className='Div-ReceitaSite'>
          
            <h2>Receita:</h2>
            {culiweb && (
              <div class= "doce">
                <p class="doce1">{culiweb.titulo} </p>
                <p class="doce2">{culiweb.descricao}</p>
                
                <ul class="doce3">
                  {culiweb.ingredientes.map(ingrediente => {
                    return(
                      <li>{ingrediente}</li>
                    )
                  })}
                </ul>
                <ul class="doce4">
                  {culiweb.instrucoes.map(instrucao => {
                    return(
                      <li>{instrucao}</li>
                    )
                  })}
                </ul>
                
                
              </div>
            )}
            
          
          </div>
        </div>
    </div>
  );
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Culinaria />
  </StrictMode>
);

