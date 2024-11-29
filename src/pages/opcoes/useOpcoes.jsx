import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const useOpcoes = () => {

    // Define o navegador para chamar outras páginas
    let navigate = useNavigate();

    // Define o estado do componente
    const [data, setData] = useState({
        nome: '',
        pizza: {},
        tamanhos: [],
        tamanho: ''
    });

    // Essa função faz as vezes de Contructor do componente (pq Hook não tem constructor)
    const construtor = () => {

        let pizza = {id:1, nome:"Mussarela", tipo:1, preco_1:10, preco_2:20, preco_3:30};

        let tamanhos = [
            {id:"P", nome:"Pequena", preco: pizza.preco_1},
            {id:"M", nome:"Média", preco: pizza.preco_2},
            {id:"G", nome:"Grande", preco: pizza.preco_3}
        ];

        setData({
            ...data,
            pizza: pizza,
            tamanhos: tamanhos
        });
    }

    // Chama a função construtor. (equivalente a um contructor)
    // No modo DEV ela roda 2x por causa do StrictMode (Seja lá o que for isso)
    useEffect(() => {
        construtor();
    }, [])


    //Função que atualiza o estado do componente
    function set(nome, valor) {
        const auxData = { ...data };
        auxData[nome] = valor;
        setData(auxData);
    };
   
    //Função que recebe o valor da tela e chama a atualização do estado do componente
    const atualizar = (event) => {
        let nome = event.target.name;
        let valor = event.target.value
        set(nome,valor);
        
    };

   

    const voltar = () => {
        navigate("/menu");
    }

    

    return {
        data,
        voltar,
        atualizar
    } 

    
}

export default useOpcoes; 