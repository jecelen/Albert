from flask import Blueprint, render_template

routes_blueprint = Blueprint('routes', __name__)

@routes_blueprint.route('/', methods=['GET'])
def pag_inicial():
    return render_template('pages/inicial/index.html')

@routes_blueprint.route('/login', methods=['GET'])
def pag_login():
    return render_template('pages/login/index.html')

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

@routes_blueprint.route('/selecionarRanking', methods=['GET'])
def pag_ranking():
    return render_template('pages/selecionarRanking/index.html')

@routes_blueprint.route('/selecionarTema', methods=['GET'])
def pag_tema():
    return render_template('pages/selecionarTema/index.html')

@routes_blueprint.route('/historia', methods=['GET'])
def pag_historia():
    return render_template('pages/temaSelecionado/index.html')