import { useState } from "react";
import { useNavigate } from "react-router";
import useApi from './useApi.js'

const useForm = (initData) => {

    // Define o navegador para chamar outras páginas
    const navigate = useNavigate();

    // Define o estado do componente
    const [data, setData] = useState(initData);

    // Disponibiliza os métodos da useApi para os demais programas
    const {iniciar, get, post} = useApi();

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
        navigate,
        iniciar,
        get,
        post
    } 

    
}

export default useForm; 