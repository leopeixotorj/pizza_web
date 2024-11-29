import { useState } from "react";
import { useNavigate } from "react-router";

const useForm = (initData) => {

    // Define o navegador para chamar outras páginas
    let navigate = useNavigate();

    // Define o estado do componente
    const [data, setData] = useState(initData);

    //Função que atualiza o estado do componente
    function set(nome, valor) {
        setData(prevData => ({
            ...prevData,
            [nome]: valor
        }));
    };
   
    //Função que recebe o valor da tela e chama a atualização do estado do componente
    const atualiza = (event) => {
        let nome = event.target.name;
        let valor = event.target.value
        set(nome,valor);
    };


    return {
        data,
        set,
        atualiza,
        navigate
    } 

    
}

export default useForm; 