import { useDispatch } from 'react-redux'

import useForm from '../../hooks/useForm.js'
import API from '../../api.js'
import { setUsuario } from '../../store/mainSlice.js'

const useLogin = () => {

    // O dispatch precisa ficar antes do useForm se não dá erro, mas não faço ideia do motivo.
    const dispatch = useDispatch();

    const {data, set, atualiza, navigate} = useForm({
        celular:'',
        senha:''
    });


    const login = () => {

        let params = {
            celular: data.celular,
            senha: data.senha
        };

        API.post('/login',params)
        .then(response => {
            API.iniciar(response.data.token);
            dispatch(setUsuario(response.data.cliente));
        })
        .catch(error =>{
            alert(error.response);
        });

    }

    const voltar = () => {
        navigate("/");
    }


    return {
        data,
        atualiza,
        voltar,
        login
    } 
    
}

export default useLogin; 