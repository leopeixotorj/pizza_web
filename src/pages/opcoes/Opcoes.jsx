import useOpcoes from './useOpcoes.jsx'

function Opcoes() {

  const {data, voltar, atualizar} = useOpcoes();

  return (
    <>
      <h1>Pizza {data.pizza.nome}</h1>

      <h1>Tamanhos</h1>
      {data.tamanhos.map( tamanho => {
        return <div key={tamanho.id}> 
          <input
              type="radio"
              id={'tamanho'+tamanho.id}
              name="tamanho"
              value={tamanho.id}
              onChange={atualizar}
          />
          <label
            htmlFor={'tamanho'+tamanho.id}
          >
            {tamanho.nome} - R$ {tamanho.preco}
          </label>
        </div>
      })}

      <p>Tamanho: {data.tamanho}</p>

      <input type="button" name="btn1" value="Voltar" onClick={voltar}></input>

      <input type="button" name="btn1" value="Adicionar" onClick={() =>alert(data.tamanho)}></input>

    </>
  )
}

export default Opcoes
