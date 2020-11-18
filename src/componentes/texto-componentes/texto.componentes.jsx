
export function Texto({tipo, nome, linha, minhaFuncao, placeholder}) {
    return <div>
        <label htmlFor={nome}>{linha}</label>
        <input onChange={minhaFuncao} type={tipo} name={nome} id={nome} placeholder={placeholder} />
    </div>
}