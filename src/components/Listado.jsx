import React,{useState, useEffect} from 'react'
import "../App.css"

const Listado = ({listadoDeFrases}) => {
    const [frasesState, setFrasesState] = useState([])

    useEffect(() => {
        setFrasesState([...frasesState, listadoDeFrases])
    }, [listadoDeFrases])

    return (
        <div className="app__viejasFrases">
        <h3>ULTIMAS 5 FRASES</h3>
        {frasesState.map((frase, i) => i <= 5? <p key={i}>{frase}</p> : null)}
      </div>
    )
}

export default Listado