import { useEffect, useState } from 'react';
import style from './BannerAnime.module.css'

function BannerAnime(){


    let [dadosSite, setDadosSite] = useState('')


   useEffect(()=>{
    fetch('http://127.0.0.1:5000/api/dadosAnimes')
    .then((response) => response.json())
    .then((data) => setDadosSite(data[Math.floor(Math.random() * 4)]))

   }, [])








    const EnviodeDadosFormularioAnime = async(event) =>{
        event.preventDefault();

        const response = await fetch('http://127.0.0.1:5000/api/animes', {
            method: 'POST',
            header: {
                'Content-Type':'application/x-www-form-urndercode',
            },
            body: new URLSearchParams({nomeDoAnimeDadoInputEnviar:nomeDoAnimeDadoInputValue, nomeDoProtagonistaEnviar:nomeDoProtagonistaValue, 
                nomeSimboloAnimeDadoInputEnviar:nomeSimboloAnimeInputValue, dadoNomeDoAnime:dadosSite.titulo, dadoNomeDoProtagonista:dadosSite.nomeProtagonista,
                dadoNomeDoSimbolo:dadosSite.nomeSimbolo}),
        });

        const data = await response.json();
        if(data.AtivaBanner === false){
            alert('As Informações Não Conferir Ao Anime')
        }else{
            setValueWidth('100%')
            setValueDisplayFormulario('none') 
        }
    }
    /*handleronChangerFormulario*/
    let [nomeDoAnimeDadoInputValue, setNomeDoAnimeDadoInputValue] = useState ('');
    let [nomeDoProtagonistaValue, setNomeDoProtagonistaValue] = useState('');
    let [nomeSimboloAnimeInputValue, setNomeSimboloAnimeInputValue] = useState('');
    let [valueWidth, setValueWidth] = useState('0%');
    let [valueDisplayFormulario, setValueDisplayFormulario] = useState('block')
    let styleContainerFomulario = {
        display: valueDisplayFormulario,
    };
    let styleResultadoBannerAnime = {
        width: valueWidth,
        backgroundImage: dadosSite.imagemFundobanner,
    };

    return(
        <div className={style.container}>
            <img className={style.imagemDeFundo} src={dadosSite.imagemFundo} alt='imagen' />
            <div style={styleContainerFomulario}>
                <h2>Qual e o Anime?</h2>
                <h1>{dadosSite.nomeDica}</h1>
                <form className={style.formulario} onSubmit={EnviodeDadosFormularioAnime}>
                    <div>
                        <label htmlfor="nomeDoAnimeDadoInputID">Nome Do Anime</label>
                        <input type='text' id='nomeDoAnimeDadoInputID' value={nomeDoAnimeDadoInputValue} onChange={(e) => setNomeDoAnimeDadoInputValue(e.target.value)} placeholder='Qual o Nome do Anime' name="nomeDoAnimeDadoInputEnviar" />
                    </div>
                <div className={style.nomeDoPersonagemInputContainer}>  
                        <div>
                            <label htmlfor="nomeDoProtagonista">Nome do Personagem</label>
                            <input type="text" id="nomeDoProtagonista" value={nomeDoProtagonistaValue} onChange={(e) => setNomeDoProtagonistaValue(e.target.value)} placeholder="Qual e o Nome do Personagem" name="nomeDoProtagonistaEnviar"/>
                        </div>
                        <img className={style.personagem} src={dadosSite.personagem} alt='personagem do anime'/>
                </div>
                    <fieldset className={style.fieldsetSimbolu}>
                        <legend htmlfor="simboloAnime">Qual é o símbolo ou item mais icônico desse anime?</legend>
                        <img className={style.simbolo} src={dadosSite.simboloImage} alt='uma imagem'/>
                        <div>
                            <div>
                                <input type='radio' id='nomeSimboloAnimeDadoInput_ID1' value={dadosSite.nomeSimbolo1} checked={nomeSimboloAnimeInputValue === dadosSite.nomeSimbolo1} onChange={(e) => setNomeSimboloAnimeInputValue(e.target.value)} name='nomeSimboloAnimeDadoInputEnviar'/>
                                <label htmlfor="nomeSimboloAnimeDadoInput_ID1">{dadosSite.nomeSimbolo1}</label>
                                
                            </div>
                            <div>
                                <input type='radio' id='nomeSimboloAnimeDadoInput_ID2' value={dadosSite.nomeSimbolo} checked={nomeSimboloAnimeInputValue === dadosSite.nomeSimbolo} onChange={(e) => setNomeSimboloAnimeInputValue(e.target.value)} name='nomeSimboloAnimeDadoInputEnviar'/>
                                <label htmlfor='nomeSimboloAnimeDadoInput_ID2'>{dadosSite.nomeSimbolo}</label>
                                
                            </div>
                            <div>
                                <input type='radio' id='nomeSimboloAnimeDadoInput_ID3' value={dadosSite.nomeSimbolo2} checked={nomeSimboloAnimeInputValue === dadosSite.nomeSimbolo2} onChange={(e) => setNomeSimboloAnimeInputValue(e.target.value)} name='nomeSimboloAnimeDadoInputEnviar'/>
                                <label htmlfor='nomeSimboloAnimeDadoInput_ID3'>{dadosSite.nomeSimbolo2}</label>
                                
                            </div>
                            <div>
                                <input type='radio' id='nomeSimboloAnimeDadoInput_ID4' value={dadosSite.nomeSimbolo3} checked={nomeSimboloAnimeInputValue === dadosSite.nomeSimbolo3} onChange={(e) => setNomeSimboloAnimeInputValue(e.target.value) } name='nomeSimboloAnimeDadoInputEnviar'/>
                                <label htmlfor='nomeSimboloAnimeDadoInput_ID4'>{dadosSite.nomeSimbolo3}</label>
                            </div>
                        </div>
                    </fieldset>
                    <input type='hidden' name='dadoNomeDoAnime' value={dadosSite.titulo}/>
                    <input type='hidden' name='dadoNomeDoProtagonista' value={dadosSite.nomeProtagonista}/>
                    <input type='hidden' name='dadoNomeDoSimbolo' value={dadosSite.nomeSimbolo}/>
                    <input type='submit' value='Enviar'/>
                </form>
            </div>
            <div className={style.bannerAnimeResultado} style={styleResultadoBannerAnime}>
                <h2>{dadosSite.titulo ? dadosSite.titulo: "Carregando..." }</h2>
                <button className={style.assistirAnime}>Assistir</button>
            </div>
        </div>
    )
}

export default BannerAnime