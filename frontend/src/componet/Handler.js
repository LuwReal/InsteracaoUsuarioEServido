import { useState } from 'react'
import style from './Handler.module.css'

function Handler(){


    let [contador, setContador] = useState(0)
    const Click = () =>{
        setContador(prevContador => prevContador + 1)
    }


    let [chamandoList, setChamandoList] = useState('')
    const ChamaOlá = (event) =>{
        setChamandoList(event.target.value)
    } 


    return(
        <div className={style.container}>
            <input type='text' value={chamandoList} onChange={ChamaOlá}/>
            <button onClick={Click}>clique</button>
            <>Contador = {contador}</>
            <> Lista  = {chamandoList}</>
        </div>
    )
}
export default Handler