import useLogin from './useLogin.js'

function Login() {

  const {data, voltar, atualiza, login, teste} = useLogin();

  return (
    <>
      <h1>Login</h1>
      <p>{data.email}</p>
      <input type="text" name="celular" value={data.celular} onChange={atualiza}></input> 
      <br/>
      <input type="password" name="senha" value={data.senha} onChange={atualiza}></input> 
      <br/>
      <input type="button" name="btn1" value="Voltar" onClick={voltar}></input>
      <input type="button" name="btn1" value="Login" onClick={login}></input>
      <input type="button" name="btn1" value="Teste" onClick={teste}></input>
    </>
  )
}

export default Login
