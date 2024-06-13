from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from routes import bp as main_bp  # Importación absoluta

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Aquí continuarías con la configuración de tu aplicación Flask
# y la definición de rutas, blueprints, etc.


# Registrar el blueprint principal
app.register_blueprint(main_bp)

if __name__ == '__main__':
    app.run(debug=True)

