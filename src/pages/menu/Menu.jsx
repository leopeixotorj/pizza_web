import useMenu from './useMenu.jsx'
import { NavLink } from "react-router";

function Menu() {

  const {pizzas} = useMenu();

  return (
    <>
      <h1>Menu</h1>

      {pizzas.map( pizza => {
        return <div key={pizza.id}> 
          <h2>{pizza.nome}</h2>
          <NavLink to={'/opcoes/'+pizza.id}>Selecionar</NavLink>
        </div>
      })}

      <NavLink to={'/'}>Voltar</NavLink>
      
    </>
  )
}

export default Menu
