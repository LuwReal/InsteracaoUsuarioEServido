from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Hello World"

ZeroNoTsukaima = {
        'titulo' : 'Zero No Tsukaima',
        'imagemFundo':'/img/logoBannerFundo001.jpg',
        'imagemFundobanner': 'url("/img/logoBanner001.jpg")',
        'nomeDica': 'Z_ro no T_uk_ima',
        'nomeProtagonista': 'Saito',
        #Simbolos
        'simboloImage': '/img/simboloOuItem001.jpg',
        'nomeSimbolo': 'Derflinger',
        'nomeSimbolo1': 'Foice',
        'nomeSimbolo2': 'Símbolo da Aldeia da Folha',
        'nomeSimbolo3' : 'Marca de Fairy Tail',
        'personagem': '/img/personagem001.jpg',
    }
DragonBallZ = {
        'titulo' : 'Dragon Ball Z',
        'imagemFundo':'/img/logoBannerFundo002.jpg',
        'imagemFundobanner': 'url("/img/logoBanner002.jpg")',
        'nomeDica': 'Dr_ago_ B_all Z',
        'nomeProtagonista': 'Goku',
        #Simbolos
        'simboloImage': '/img/simboloOuItem002.jpg',
        'nomeSimbolo': 'Esfera do Dragão',
        'nomeSimbolo1': 'Foice',
        'nomeSimbolo2': 'Símbolo da Aldeia da Folha',
        'nomeSimbolo3' : 'Marca de Fairy Tail',
        'personagem': '/img/personagem002.jpg',
    }

SwordArtOnline = {
        'titulo' : 'Sword Art Online',
        'imagemFundo':'/img/logoBannerFundo003.jpg',
        'imagemFundobanner': 'url("/img/logoBanner003.jpg")',
        'nomeDica': 'Sw_rd _rt O_nlin_',
        'nomeProtagonista': 'Kirito',
        #Simbolos
        'simboloImage': '/img/simboloOuItem003.jpg',
        'nomeSimbolo': 'Duas Espada Do Kirito',
        'nomeSimbolo1': 'Foice',
        'nomeSimbolo2': 'Símbolo da Aldeia da Folha',
        'nomeSimbolo3' : 'Marca de Fairy Tail',
        'personagem': '/img/personagem003.jpg',
    }

NarutoShippuden = {
        'titulo' : 'Naruto Shippuden',
        'imagemFundo':'/img/logoBannerFundo004.jpg',
        'imagemFundobanner': 'url("/img/logoBanner004.jpg")',
        'nomeDica': 'N_arut_o S_ipp_ude_',
        'nomeProtagonista': 'Naruto',
        #Simbolos
        'simboloImage': '/img/simboloOuItem004.jpg',
        'nomeSimbolo': 'Kunai',
        'nomeSimbolo1': 'Foice',
        'nomeSimbolo2': 'Símbolo da Aldeia da Folha',
        'nomeSimbolo3' : 'Marca de Fairy Tail',
        'personagem': '/img/personagem004.jpg',
    }

OnePiece = {
        'titulo' : 'One Piece',
        'imagemFundo':'/img/logoBannerFundo005.jpg',
        'imagemFundobanner': 'url("/img/logoBanner005.jpg")',
        'nomeDica': 'On_ P_ec_',
        'nomeProtagonista': 'Luffy',
        #Simbolos
        'simboloImage': '/img/simboloOuItem005.jpg',
        'nomeSimbolo': 'Chápeu de Palha',
        'nomeSimbolo1': 'Foice',
        'nomeSimbolo2': 'Símbolo da Aldeia da Folha',
        'nomeSimbolo3' : 'Marca de Fairy Tail',
        'personagem': '/img/personagem005.jpg',
    }











@app.route('/api/animes', methods=["POST"])
def apiAnime():

    nomeDoAnimeDadoInputEnviar = request.form.get('nomeDoAnimeDadoInputEnviar')
    nomeDoProtagonistaEnviar = request.form.get('nomeDoProtagonistaEnviar')
    nomeSimboloAnimeDadoInputEnviar = request.form.get('nomeSimboloAnimeDadoInputEnviar')
    dadoNomeDoAnime = request.form.get('dadoNomeDoAnime')
    dadoNomeDoProtagonista = request.form.get('dadoNomeDoProtagonista')
    dadoNomeDoSimbolo = request.form.get('dadoNomeDoSimbolo')

    AcessoAoBanner = False

    if nomeDoAnimeDadoInputEnviar == dadoNomeDoAnime and nomeDoProtagonistaEnviar == dadoNomeDoProtagonista and nomeSimboloAnimeDadoInputEnviar == dadoNomeDoSimbolo:
        AcessoAoBanner = True


    data = {
        'AtivaBanner': AcessoAoBanner,
    }

    return jsonify(data)


@app.route('/api/dadosAnimes')
def apiAnimeDados():
    return jsonify(ZeroNoTsukaima, DragonBallZ, SwordArtOnline, NarutoShippuden, OnePiece)

app = app
# http://127.0.0.1:5000/api/dados