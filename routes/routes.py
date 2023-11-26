from flask import Blueprint, render_template, Flask, request, jsonify
import requests
import firebase_admin
from firebase_admin import credentials, auth, db
import random

caminho_app = "./firebase.json"
cred = credentials.Certificate(caminho_app)
firebase_admin.initialize_app(cred, {'databaseURL': 'https://albert-17358-default-rtdb.firebaseio.com/'})

routes_blueprint = Blueprint('routes', __name__)

@routes_blueprint.route('/', methods=['GET'])
def pag_inicial():
    return render_template('pages/inicial/index.html')

@routes_blueprint.route('/login', methods=['GET'])
def pag_login():
    return render_template('pages/login/index.html')

@routes_blueprint.route('/recuperarSenha', methods=['GET'])
def pag_recuperarSenha():
    return render_template('pages/recuperarSenha/index.html')

@routes_blueprint.route('/registro', methods=['GET'])
def pag_registro():
    return render_template('pages/registro/index.html')

@routes_blueprint.route('/perfil', methods=['GET'])
def pag_perfil():
    return render_template('pages/perfilUsuario/index.html')

@routes_blueprint.route('/bemVindo', methods=['GET'])
def pag_bemVindo():
    return render_template('pages/bemVindo/index.html')

@routes_blueprint.route('/rankingSelecionado', methods=['GET'])
def pag_rankingSelecionado():
    return render_template('pages/rankingSelecionado/index.html')

@routes_blueprint.route('/rankingSelecionadoHistoria', methods=['GET'])
def pag_rankingSelecionadoHistoria():
    return render_template('pages/rankingSelecionadoHistoria/index.html')

@routes_blueprint.route('/rankingSelecionadoGeografia', methods=['GET'])
def pag_rankingSelecionadoGeofrafia():
    return render_template('pages/rankingSelecionadoGeografia/index.html')

@routes_blueprint.route('/rankingSelecionadoEsporte', methods=['GET'])
def pag_rankingSelecionadoEsporte():
    return render_template('pages/rankingSelecionadoEsporte/index.html')

@routes_blueprint.route('/rankingSelecionadoBiologia', methods=['GET'])
def pag_rankingSelecionadoBiologia():
    return render_template('pages/rankingSelecionadoBiologia/index.html')

@routes_blueprint.route('/selecionarRanking', methods=['GET'])
def pag_ranking():
    return render_template('pages/selecionarRanking/index.html')

@routes_blueprint.route('/selecionarTema', methods=['GET'])
def pag_tema():
    return render_template('pages/selecionarTema/index.html')

@routes_blueprint.route('/historia', methods=['GET'])
def pag_historia():
    return render_template('pages/temaSelecionado/index.html')

@routes_blueprint.route('/geografia', methods=['GET'])
def pag_geografia():
    return render_template('pages/temaSelecionadoGeografia/index.html')

@routes_blueprint.route('/esporte', methods=['GET'])
def pag_esporte():
    return render_template('pages/temaSelecionadoEsporte/index.html')

@routes_blueprint.route('/biologia', methods=['GET'])
def pag_biologia():
    return render_template('pages/temaSelecionadoBiologia/index.html')

@routes_blueprint.route('/adm', methods=['GET'])
def pag_adm():
    return render_template('adm/index.html')

@routes_blueprint.route('/adm/criar', methods=['GET'])
def pag_criar():
    return render_template('adm/paginas/criar/index.html')

# rotas para edição de quizz

@routes_blueprint.route('/adm/editarTema', methods=['GET'])
def pag_editar():
    return render_template('adm/paginas/editarTema/index.html')

@routes_blueprint.route('/adm/editarQuiz', methods=['GET'])
def pag_editarQuiz():
    return render_template('adm/paginas/editarQuiz/index.html')

@routes_blueprint.route('/adm/editarPergunta', methods=['GET'])
def pag_editarPergunta():
    return render_template('adm/paginas/editarPergunta/index.html')

@routes_blueprint.route('/adm/editarResposta', methods=['GET'])
def pag_editarResposta():
    return render_template('adm/paginas/editarResposta/index.html')

SUA_CHAVE_API = "AIzaSyDv24oRlEpzxArBOw3DUtL1ucRQE6WSuCA "


@routes_blueprint.route('/registrofirebase', methods=['POST'])
def registrar_usuario():
    dados = request.get_json()
    email = dados['email']
    nome = dados['nome']
    senha = dados['senha']

    # URL para registrar usuário no Firebase Authentication
    firebase_auth_url = f"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key={SUA_CHAVE_API}"

    payload = {
        "email": email,
        "password": senha,
        "returnSecureToken": True
    }

    response = requests.post(firebase_auth_url, json=payload)

    if response.status_code == 200:
        # Obtém o localId após o registro bem-sucedido
        local_id = response.json().get('localId')
        
        # Caminho do nó no Realtime Database onde os dados do usuário serão armazenados
        caminho_do_no = f'Usuario/{local_id}'

        # Dados a serem adicionados ao nó especificado
        novo_user = {
            'email': email,
            'nome': nome,
            'senha': senha
        }

        # Adiciona os dados ao nó especificado no Realtime Database
        ref = db.reference(caminho_do_no)
        ref.set(novo_user)

        return jsonify(response.json())
    else:
        print(response.json())
        return jsonify({"error": "Falha no registro do usuário"}), 500

@routes_blueprint.route('/autenticar_usuario', methods=['POST'])
def autenticar_usuario():
    dados = request.get_json()
    email = dados['email']
    senha = dados['senha']

    firebase_auth_url = f"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key={SUA_CHAVE_API}"
    payload = {
        "email": email,
        "password": senha,
        "returnSecureToken": True
    }
    response = requests.post(firebase_auth_url, json=payload)
    print(response)

    if response.status_code == 200:
        local_id = response.json().get('localId')
        return jsonify({"uid": local_id})
    else:
        print(response.json())
        return jsonify({"error": "Falha na autenticação"}), 500
    
    

@routes_blueprint.route('/redefinir_senha', methods=['POST'])
def recupera_seha():
    dados_recebidos = request.get_json()
    caminho_app = "./firebase.json"
    cred = credentials.Certificate(caminho_app)
    firebase_admin.initialize_app(cred)

    email = dados_recebidos.get('email', '')

    try:
        auth.generate_password_reset_link(email)
        resposta = {"mensagem": f"E-mail de redefinição de senha enviado para {email}"}
        return jsonify(resposta), 200
    except Exception as e:
        print(f"Erro ao enviar e-mail de redefinição de senha: {str(e)}")
        resposta = {"erro": "Erro ao processar a solicitação."}
        return jsonify(resposta), 500


@routes_blueprint.route('/info-usuario', methods=['GET'])
def obter_info_usuario():
    uid = request.headers.get('Authorization').split('Bearer ')[1]
    print(uid)
    caminho_do_no = f'Usuario/{uid}'

    ref = db.reference(caminho_do_no)
    dados = ref.get()

    if dados:
        email = dados.get('email', '')
        nome = dados.get('nome', '')
        senha = dados.get('senha', '')
 
        return jsonify({'email': email, 'nome': nome, 'senha': senha})
    else:
        return jsonify({'erro': 'Usuário não encontrado'}), 404


@routes_blueprint.route('/atualizar_credenciais', methods=['POST'])
def atualizar_credenciais():
    dados = request.get_json()
    uid = dados['uid']
    novo_email = dados['email']
    nova_senha = dados['senha']

    try:

        auth.update_user(uid, email=novo_email)
        auth.update_user(uid, password=nova_senha)

        caminho_do_no = f'Usuario/{uid}'

        ref = db.reference(caminho_do_no)

        ref.update({
            'email': novo_email,
            'senha': nova_senha
        })

        return jsonify({"mensagem": "Credenciais atualizadas com sucesso"})
    except auth.AuthError as e:
        return jsonify({"error": str(e)}), 400
    

@routes_blueprint.route('/criar_pergunta', methods=['POST'])
def criar():
    dados = request.get_json()

    quiz = dados.get('quiz')
    tema = dados.get('tema')
    pergunta = dados.get('pergunta')
    op1 = dados.get('op1')
    op2 = dados.get('op2')
    op3 = dados.get('op3')
    rc = dados.get('rc')

    caminho_do_no = f'Quizzes/{tema}/{quiz}'

    nova_pergunta = {
        'Perguntas': pergunta,
        'Opcao1': op1,
        'Opcao2': op2,
        'Opcao3': op3,
        'RespostaCorreta': rc
    }

    ref = db.reference(caminho_do_no)
    ref.push().set(nova_pergunta)

    return jsonify({"mensagem": "Pergunta criada com sucesso!"})

@routes_blueprint.route('/obter-perguntas/<tema>', methods=['GET'])
def obter_perguntas(tema):
    caminho_do_no = f'Quizzes/{tema}'

    ref = db.reference(caminho_do_no)
    quiz_data = ref.get()

    if quiz_data:
        quiz_retornado = random.choice(list(quiz_data.values()))

        return jsonify({"quiz": quiz_retornado})
    else:
        return jsonify({"mensagem": "Nenhum quiz encontrado para este tema"})