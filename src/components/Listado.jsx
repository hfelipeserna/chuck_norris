import React,{useState, useEffect} from 'react'
import "../App.css"

const Listado = ({listadoDeFrases}) => {
    const [frasesState, setFrasesState] = useState([])

    useEffect(() => {
        setFrasesState([...frasesState, listadoDeFrases])
    }, [listadoDeFrases])


    // EJERCICIO PARA REFACTORIZAR DESPUES DEL RETURN
    return (
        <div className="app__viejasFrases">
        <h3>ULTIMAS 5 FRASES</h3>
        {frasesState[0] ? <p>{frasesState[0]}</p> : null}
        {frasesState[1] ? <p>{frasesState[1]}</p> : null}
        {frasesState[2] ? <p>{frasesState[2]}</p> : null}
        {frasesState[3] ? <p>{frasesState[3]}</p> : null}
        {frasesState[4] ? <p>{frasesState[4]}</p> : null}
        {frasesState[5] ? <p>{frasesState[5]}</p> : null}
      </div>
    )
}

export default Listado