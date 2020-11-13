
export function Texto({tipo, nome, linha, minhaFuncao}) {
    return <div>
        <label htmlFor={nome}>{linha}:</label>
        <input onChange={minhaFuncao} type={tipo} name={nome} id={nome} />
    </div>
}