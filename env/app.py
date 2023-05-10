from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import jsonify
from flask_login import login_required
from flask import Flask, request
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from flask_cors import CORS






app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://Bayonetta:$Mika2023@127.0.0.1/portal_de_turismo'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'Bayonetta'
db = SQLAlchemy(app)


###########CLASSES##################

class Atividades(db.Model):
    __tablename__ = 'atividades'
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(255))
    url_imagem_1 = db.Column(db.String(255))
    url_imagem_2 = db.Column(db.String(255))
    url_imagem_3 = db.Column(db.String(255))
    url_imagem_4 = db.Column(db.String(255))
    url_imagem_5 = db.Column(db.String(255))
    url_imagem_6 = db.Column(db.String(255))
    url_imagem_7 = db.Column(db.String(255))
    url_imagem_8 = db.Column(db.String(255))
    url_imagem_9 = db.Column(db.String(255))
    url_imagem_10 = db.Column(db.String(255))
    url_video_1 = db.Column(db.String(255))
    url_video_2 = db.Column(db.String(255))
    url_video_3 = db.Column(db.String(255))
    descricao = db.Column(db.String(10000))
    email = db.Column(db.String(255))
    telefone = db.Column(db.String(20))
    endereco = db.Column(db.String(255))
    horario_funcionamento = db.Column(db.String(255))
    
    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'url_imagem_1': self.url_imagem_1,
            'url_imagem_2': self.url_imagem_2,
            'url_imagem_3': self.url_imagem_3,
            'url_imagem_4': self.url_imagem_4,
            'url_imagem_5': self.url_imagem_5,
            'url_imagem_6': self.url_imagem_6,
            'url_imagem_7': self.url_imagem_7,
            'url_imagem_8': self.url_imagem_8,
            'url_imagem_9': self.url_imagem_9,
            'url_imagem_10': self.url_imagem_10,
            'url_video_1': self.url_video_1,
            'url_video_2': self.url_video_2,
            'url_video_3': self.url_video_3,
            'descricao': self.descricao,
            'email': self.email,
            'telefone': self.telefone,
            'endereco': self.endereco,
            'horario_funcionamento': self.horario_funcionamento
        }

class PontoTuristico(db.Model):
    __tablename__ = 'pontos_turisticos'
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(255))
    url_imagem_1 = db.Column(db.String(255))
    url_imagem_2 = db.Column(db.String(255))
    url_imagem_3 = db.Column(db.String(255))
    url_imagem_4 = db.Column(db.String(255))
    url_imagem_5 = db.Column(db.String(255))
    url_imagem_6 = db.Column(db.String(255))
    url_imagem_7 = db.Column(db.String(255))
    url_imagem_8 = db.Column(db.String(255))
    url_imagem_9 = db.Column(db.String(255))
    url_imagem_10 = db.Column(db.String(255))
    url_video_1 = db.Column(db.String(255))
    url_video_2 = db.Column(db.String(255))
    url_video_3 = db.Column(db.String(255))
    descricao = db.Column(db.String(10000))
    email = db.Column(db.String(255))
    telefone = db.Column(db.String(20))
    endereco = db.Column(db.String(255))
    horario_funcionamento = db.Column(db.String(255))
    
    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'url_imagem_1': self.url_imagem_1,
            'url_imagem_2': self.url_imagem_2,
            'url_imagem_3': self.url_imagem_3,
            'url_imagem_4': self.url_imagem_4,
            'url_imagem_5': self.url_imagem_5,
            'url_imagem_6': self.url_imagem_6,
            'url_imagem_7': self.url_imagem_7,
            'url_imagem_8': self.url_imagem_8,
            'url_imagem_9': self.url_imagem_9,
            'url_imagem_10': self.url_imagem_10,
            'url_video_1': self.url_video_1,
            'url_video_2': self.url_video_2,
            'url_video_3': self.url_video_3,
            'descricao': self.descricao,
            'email': self.email,
            'telefone': self.telefone,
            'endereco': self.endereco,
            'horario_funcionamento': self.horario_funcionamento
        }

class Evento(db.Model):
    __tablename__ = 'eventos'
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(255))
    descricao = db.Column(db.Text)
    data = db.Column(db.Date)
    website = db.Column(db.String(255))
    telefone = db.Column(db.String(20))
    email = db.Column(db.String(255))
    imagem1 = db.Column(db.String(255))
    imagem2 = db.Column(db.String(255))
    imagem3 = db.Column(db.String(255))
    imagem4 = db.Column(db.String(255))
    imagem5 = db.Column(db.String(255))
    imagem6 = db.Column(db.String(255))
    imagem7 = db.Column(db.String(255))
    imagem8 = db.Column(db.String(255))
    imagem9 = db.Column(db.String(255))
    imagem10 = db.Column(db.String(255))
    video1 = db.Column(db.String(255))
    video2 = db.Column(db.String(255))
    video3 = db.Column(db.String(255))
    endereco = db.Column(db.String(255))
    horario_abertura = db.Column(db.Time)
    horario_fechamento = db.Column(db.Time)

    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'descricao': self.descricao,
            'data': str(self.data) if self.data else None,
            'website': self.website,
            'telefone': self.telefone,
            'email': self.email,
            'imagem1': self.imagem1,
            'imagem2': self.imagem2,
            'imagem3': self.imagem3,
            'imagem4': self.imagem4,
            'imagem5': self.imagem5,
            'imagem6': self.imagem6,
            'imagem7': self.imagem7,
            'imagem8': self.imagem8,
            'imagem9': self.imagem9,
            'imagem10': self.imagem10,
            'video1': self.video1,
            'video2': self.video2,
            'video3': self.video3,
            
            'endereco': self.endereco,
            'horario_abertura': str(self.horario_abertura) if self.horario_abertura else None,
            'horario_fechamento': str(self.horario_fechamento) if self.horario_fechamento else None,
        }

class Hospedagem(db.Model):
    __tablename__ = 'hospedagens'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Column(db.String(255))
    url_imagem_1 = db.Column(db.String(255))
    url_imagem_2 = db.Column(db.String(255))
    url_imagem_3 = db.Column(db.String(255))
    url_imagem_4 = db.Column(db.String(255))
    url_imagem_5 = db.Column(db.String(255))
    url_imagem_6 = db.Column(db.String(255))
    url_imagem_7 = db.Column(db.String(255))
    url_imagem_8 = db.Column(db.String(255))
    url_imagem_9 = db.Column(db.String(255))
    url_imagem_10 = db.Column(db.String(255))
    url_video_1 = db.Column(db.String(255))
    url_video_2 = db.Column(db.String(255))
    url_video_3 = db.Column(db.String(255))
    descricao = db.Column(db.String(10000))
    email = db.Column(db.String(255))
    telefone = db.Column(db.String(20))
    endereco = db.Column(db.String(255))
    tipo = db.Column(db.String(255))
    estrelas = db.Column(db.Integer)
    website = db.Column(db.String(255))

    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'url_imagem_1': self.url_imagem_1,
            'url_imagem_2': self.url_imagem_2,
            'url_imagem_3': self.url_imagem_3,
            'url_imagem_4': self.url_imagem_4,
            'url_imagem_5': self.url_imagem_5,
            'url_imagem_6': self.url_imagem_6,
            'url_imagem_7': self.url_imagem_7,
            'url_imagem_8': self.url_imagem_8,
            'url_imagem_9': self.url_imagem_9,
            'url_imagem_10': self.url_imagem_10,
            'url_video_1': self.url_video_1,
            'url_video_2': self.url_video_2,
            'url_video_3': self.url_video_3,
            'descricao': self.descricao,
            'email': self.email,
            'telefone': self.telefone,
            'endereco': self.endereco,
            'tipo': self.tipo,
            'estrelas': self.estrelas,
            'website': self.website,
        }

class Restaurante(db.Model):
    __tablename__ = 'restaurantes'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Column(db.String(255))
    imagem1 = db.Column(db.String(255))
    imagem2 = db.Column(db.String(255))
    imagem3 = db.Column(db.String(255))
    imagem4 = db.Column(db.String(255))
    imagem5 = db.Column(db.String(255))
    imagem6 = db.Column(db.String(255))
    imagem7 = db.Column(db.String(255))
    imagem8 = db.Column(db.String(255))
    imagem9 = db.Column(db.String(255))
    imagem10 = db.Column(db.String(255))
    video1 = db.Column(db.String(255))
    video2 = db.Column(db.String(255))
    video3 = db.Column(db.String(255))
    descricao = db.Column(db.String(10000))
    email = db.Column(db.String(255))
    telefone = db.Column(db.String(20))
    endereco = db.Column(db.String(255))
    horario_funcionamento = db.Column(db.String(255))
    website = db.Column(db.String(255))

    def to_dict(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "imagem1": self.imagem1,
            "imagem2": self.imagem2,
            "imagem3": self.imagem3,
            "imagem4": self.imagem4,
            "imagem5": self.imagem5,
            "imagem6": self.imagem6,
            "imagem7": self.imagem7,
            "imagem8": self.imagem8,
            "imagem9": self.imagem9,
            "imagem10": self.imagem10,
            "video1": self.video1,
            "video2": self.video2,
            "video3": self.video3,
            "descricao": self.descricao,
            "email": self.email,
            "telefone": self.telefone,
            "endereco": self.endereco,
            "horario_funcionamento": self.horario_funcionamento,
            "website": self.website
        }

class Comentario(db.Model):
    __tablename__ = 'comentarios'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nome = db.Column(db.String(255))
    email = db.Column(db.String(255))
    comentario = db.Column(db.Text)
    data_publicacao = db.Column(db.TIMESTAMP, server_default=db.func.current_timestamp(), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "email": self.email,
            "comentario": self.comentario,
            "data_publicacao": self.data_publicacao.strftime("%Y-%m-%d %H:%M:%S")
        }


#############ROTAS###################


######################################################################

@app.route('/api/atividades', methods=['GET'])
def get_atividades():
    atividades = Atividades.query.all()
    return jsonify([atividade.to_dict() for atividade in atividades])

@app.route('/api/atividades/<int:id>', methods=['GET'])
def get_atividade(id):
    atividade = Atividades.query.get(id)
    if atividade is None:
        return jsonify({'erro': 'Atividade não encontrada'}), 404
    return jsonify(atividade.to_dict())

@app.route('/atividades', methods=['POST'])
@login_required
def create_atividade():
    atividade = Atividades()
    atividade.nome = request.json.get('nome')
    atividade.url_imagem_1 = request.json.get('url_imagem_1')
    atividade.url_imagem_2 = request.json.get('url_imagem_2')
    atividade.url_imagem_3 = request.json.get('url_imagem_3')
    atividade.url_imagem_4 = request.json.get('url_imagem_4')
    atividade.url_imagem_5 = request.json.get('url_imagem_5')
    atividade.url_imagem_6 = request.json.get('url_imagem_6')
    atividade.url_imagem_7 = request.json.get('url_imagem_7')
    atividade.url_imagem_8 = request.json.get('url_imagem_8')
    atividade.url_imagem_9 = request.json.get('url_imagem_9')
    atividade.url_imagem_10 = request.json.get('url_imagem_10')
    atividade.url_video_1 = request.json.get('url_video_1')
    atividade.url_video_2 = request.json.get('url_video_2')
    atividade.url_video_3 = request.json.get('url_video_3')
    atividade.descricao = request.json.get('descricao')
    atividade.email = request.json.get('email')
    atividade.telefone = request.json.get('telefone')
    atividade.endereco = request.json.get('endereco')
    atividade.horario_funcionamento = request.json.get('horario_funcionamento')
    db.session.add(atividade)
    db.session.commit()
    return jsonify(atividade.to_dict()), 201

@app.route('/atividades/<int:id>', methods=['DELETE'])
@login_required
def delete_atividade(id):
    atividade = Atividades.query.get_or_404(id)
    db.session.delete(atividade)
    db.session.commit()
    return '', 204

@app.route('/atividades/<int:id>', methods=['PUT'])
@login_required
def update_atividade(id):
    atividade = Atividades.query.get_or_404(id)
    atividade.nome = request.json.get('nome', atividade.nome)
    atividade.url_imagem_1 = request.json.get('url_imagem_1', atividade.url_imagem_1)
    atividade.url_imagem_2 = request.json.get('url_imagem_2', atividade.url_imagem_2)
    atividade.url_imagem_3 = request.json.get('url_imagem_3', atividade.url_imagem_3)
    atividade.url_imagem_4 = request.json.get('url_imagem_4', atividade.url_imagem_4)
    atividade.url_imagem_5 = request.json.get('url_imagem_5', atividade.url_imagem_5)
    atividade.url_imagem_6 = request.json.get('url_imagem_6', atividade.url_imagem_6)
    atividade.url_imagem_7 = request.json.get('url_imagem_7', atividade.url_imagem_7)
    atividade.url_imagem_8 = request.json.get('url_imagem_8', atividade.url_imagem_8)
    atividade.url_imagem_9 = request.json.get('url_imagem_9', atividade.url_imagem_9)
    atividade.url_imagem_10 = request.json.get('url_imagem_10', atividade.url_imagem_10)
    atividade.url_video_1 = request.json.get('url_video_1', atividade.url_video_1)
    atividade.url_video_2 = request.json.get('url_video_2', atividade.url_video_2)
    atividade.url_video_3 = request.json.get('url_video_3', atividade.url_video_3)
    atividade.descricao = request.json.get('descricao', atividade.descricao)
    atividade.email = request.json.get('email', atividade.email)
    atividade.telefone = request.json.get('telefone', atividade.telefone)
    atividade.endereco = request.json.get('endereco', atividade.endereco)
    atividade.horario_funcionamento = request.json.get('horario_funcionamento', atividade.horario_funcionamento)
    db.session.commit()
    return jsonify(atividade.to_dict()), 200




@app.route('/api/pontos_turisticos', methods=['GET'])
def get_pontos_turisticos():
    pontos_turisticos = PontoTuristico.query.all()
    return jsonify([ponto_turistico.to_dict() for ponto_turistico in pontos_turisticos])

@app.route('/api/pontos_turisticos/<int:id>', methods=['GET'])
def get_ponto_turistico(id):
    ponto_turistico = PontoTuristico.query.get(id)
    if ponto_turistico is None:
        return jsonify({'erro': 'Ponto turístico não encontrada'}), 404
    return jsonify(ponto_turistico.to_dict())



@app.route('/api/hospedagens', methods=['GET'])
def get_hospedagens():
    hospedagens = Hospedagem.query.all()
    return jsonify([hospedagem.to_dict() for hospedagem in hospedagens])

@app.route('/api/hospedagens/<int:id>', methods=['GET'])
def get_hospedagem(id):
    hospedagem = Hospedagem.query.get(id)
    if hospedagem is None:
        return jsonify({'erro': 'Hospedagem não encontrada'}), 404
    return jsonify(hospedagem.to_dict())



@app.route('/api/restaurantes', methods=['GET'])
def get_restaurantes():
    restaurantes = Restaurante.query.all()
    return jsonify([restaurante.to_dict() for restaurante in restaurantes])

@app.route('/api/restaurantes/<int:id>', methods=['GET'])
def get_restaurante(id):
    restaurante = Restaurante.query.get(id)
    if restaurante is None:
        return jsonify({'erro': 'Restaurante não encontrada'}), 404
    return jsonify(restaurante.to_dict())


@app.route('/api/eventos', methods=['GET'])
def get_eventos():
    eventos = Evento.query.all()
    return jsonify([evento.to_dict() for evento in eventos])

@app.route('/api/eventos/<int:id>', methods=['GET'])
def get_evento(id):
    evento = Evento.query.get(id)
    if evento is None:
        return jsonify({'erro': 'Evento não encontrada'}), 404
    return jsonify(evento.to_dict())


admin = Admin(app, name='Admin', template_mode='bootstrap3')
admin.add_view(ModelView(PontoTuristico, db.session))
admin.add_view(ModelView(Atividades, db.session))
admin.add_view(ModelView(Evento, db.session))
admin.add_view(ModelView(Restaurante, db.session))
admin.add_view(ModelView(Hospedagem, db.session))
admin.add_view(ModelView(Comentario, db.session))


if __name__ == '__main__':
    app.config['DEBUG'] = True

    app.run()