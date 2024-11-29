import useMenu from './useMenu.jsx'

function Menu() {

  const {data, voltar, opcoes} = useMenu();

  return (
    <>
      <h1>Menu</h1>

      {data.pizzas.map( pizza => {
        return <div key={pizza.id}> 
          <h2>{pizza.nome}</h2>
          <input type="button" value="Selecionar" onClick={() => opcoes(pizza.id)}></input>
        </div>
      })}

      {/*<h3>{data.nome}</h3>
      <input type="text" name="nome" value={data.nome} onChange={atualiza}></input> 
      <input type="button" name="btn1" value="Muda Nome" onClick={mudaNome}></input>
      <input type="button" name="btn1" value="teste" onClick={teste}></input>
      */}
      <input type="button" name="btn1" value="Voltar" onClick={voltar}></input>
      
    </>
  )
}

export default Menu
