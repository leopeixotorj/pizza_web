import { useParams } from "react-router"
import useOpcoes from './useOpcoes.jsx'

function Opcoes() {

  let { id } = useParams();

  const {data, atualiza} = useOpcoes(id);

  return (
    <>
      <h1>Pizza {data.pizza.nome}</h1>

      <h1>Tamanhos</h1>
      {data.pizza.tamanhos.map( tamanho => {
        return <div key={tamanho.id}> 
          <input
              type="radio"
              id={'tamanho'+tamanho.id}
              name="tamanho"
              value={tamanho.id}
              onChange={atualiza}
          />
          <label
            htmlFor={'tamanho'+tamanho.id}
          >
            {tamanho.nome} - R$ {tamanho.preco}
          </label>
        </div>
      })}

      <p>Tamanho: {data.tamanho}</p>


    </>
  )
}

export default Opcoes
