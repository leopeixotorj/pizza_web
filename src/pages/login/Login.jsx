import useLogin from './useLogin.js'
import { NavLink } from "react-router";

function Login() {

  const {data, voltar, atualiza, login} = useLogin();

  return (
    <>
      <h1>Login</h1>
      <p>{data.email}</p>
      <input type="text" name="celular" value={data.celular} onChange={atualiza}></input> 
      <input type="password" name="senha" value={data.senha} onChange={atualiza}></input> 
      <NavLink to={'/'}>Voltar</NavLink>
      <input type="button" name="btn1" value="Login" onClick={login}></input>

    </>
  )
}

export default Login
