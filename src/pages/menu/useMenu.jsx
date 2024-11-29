import { useState, useEffect} from "react";
import { useNavigate } from "react-router";

const useMenu = () => {

    // Define o navegador para chamar outras páginas
    let navigate = useNavigate();

    // Define o estado do componente
    const [data, setData] = useState({
        nome: '',
        pizzas: []
    });

    // Essa função faz as vezes de Contructor do componente (pq Hook não tem constructor)
    const construtor = () => {

        let pizzas = [
            {id:1, nome:"Mussarela", tipo:1, preco_1: 10, preco_2:20, preco_3:30},
            {id:2, nome:"Calabresa", tipo:1, preco_1: 15, preco_2:25, preco_3:35},
            {id:3, nome:"Marguerita", tipo:1, preco_1: 15, preco_2:25, preco_3:35},
            {id:4, nome:"Portuguesa", tipo:1, preco_1: 15, preco_2:25, preco_3:35},
        ];

        setData({
            ...data,
            pizzas: pizzas
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
    const atualiza = (event) => {
        let nome = event.target.name;
        let valor = event.target.value
        set(nome,valor);
    };

    


    const opcoes = (id) => {
        navigate("/opcoes/"+id);
    }
   

    const voltar = () => {
        navigate("/");
    }

    const mudaNome = () => {
        const auxData = { ...data };
        auxData['nome'] = 'Leo';
        setData(auxData);
    }

    const teste = () => {
        console.log(data.pizzas);
    }

    return {
        data,
        voltar,
        atualiza,
        opcoes,
        mudaNome,
        teste
    } 

    
}

export default useMenu; 