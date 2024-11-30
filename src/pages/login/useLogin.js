import { useSelector, useDispatch } from 'react-redux'
import useForm from '../../hooks/useForm.js'
import { setUsuario } from '../../store/mainSlice.js'

const useLogin = () => {

    const usuario = useSelector((state) => state.main.usuario);

    // O Dispatch é usado para atualizar o estado global do sistema
    // O dispatch precisa ficar antes do useForm se não dá erro, mas não faço ideia do motivo.
    const dispatch = useDispatch();

    const {data, set, atualiza, navigate, iniciar, post} = useForm({
        celular:'',
        senha:'',
        novaVariavel: 0
    });


    const login = () => {

        let params = {
            celular: data.celular,
            senha: data.senha
        };

        post('/login',params)
        .then(response => {
            iniciar(response.data.token);
            dispatch(setUsuario(response.data.cliente));
            navigate("/menu");
        });

    }

    
    return {
        data,
        atualiza,
        login
    } 
    
}

export default useLogin; 