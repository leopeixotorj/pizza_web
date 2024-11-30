import { Outlet, redirect } from "react-router";
import { useSelector } from 'react-redux'
import { NavLink } from "react-router";

function Logado() {
  const usuario = useSelector((state) => state.main.usuario);

  if(usuario.hasOwnProperty('celular') ){
    return (
      <>
        <h1>Logado</h1>
        <Outlet/>
      </>
    )
  }else{
    return (
      <>
        <h1>Você não fez login</h1>
        <br/>
        <NavLink to={'/login'}>Faça login aqui</NavLink>

      </>
    )
  }
}

export default Logado
