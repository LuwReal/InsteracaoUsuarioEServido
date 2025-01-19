import { useState } from 'react'
import style from './Formulario.module.css'

function Formulario(){

    const [value, setValue] = useState('')
    let handlerText = (event) =>{
        setValue(event.target.value)
    }
    let [teste, setTeste] = useState('')
    const submitDados = async (event) =>{
        event.preventDefault();

        const response = await fetch('http://127.0.0.1:5000/api/dados', {
            method:'POST',
            header: {
                'Content-Type':'application/x-www-form-urndercode',
            },
            body: new URLSearchParams({ nome:value }),
        });
        const data = await response.json();

        setTeste(await data.mesagem)
    }

    return (
        <div className={style.container}>
            <form onSubmit={submitDados}>
             <label for="OqueQueiraEnviar">Digiter Abaixo</label>
             <input type="text" id="OqueQueiraEnviar" value={value} placeholder="Digiter oque Deseja Enviar" onChange={handlerText} name='nome'/>
             <input type='submit' value="Enviar" />
            </form>
            Valor {teste}
        </div>
    )
}

export default Formulario