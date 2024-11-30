import { useSelector, useDispatch } from 'react-redux'
import useForm from '../../hooks/useForm.js'
import { setPizzas } from '../../store/mainSlice.js'

const useMenu = () => {

    const pizzas = useSelector((state) => state.main.pizzas);

    const dispatch = useDispatch();

    const {get} = useForm({});

    if(pizzas.length == 0){
        get('/produto/1')
        .then(response => {
            dispatch(setPizzas(response.data));
            
        });
    }


    return {
        pizzas
    } 

    
}

export default useMenu; 