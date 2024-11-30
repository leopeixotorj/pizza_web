import { useSelector } from 'react-redux'
import useForm from '../../hooks/useForm.js'


const useOpcoes = (id) => {

    const pizzas = useSelector((state) => state.main.pizzas);

    const {data, atualiza} = useForm({
        tamanho: '',
        pizza: pizzas.find(pizza => pizza.id == id)
    });

    return {
        data,
        atualiza
    } 

    
}

export default useOpcoes; 