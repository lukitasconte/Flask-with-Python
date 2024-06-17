from flask import Blueprint, render_template

bp = Blueprint('main', __name__)

# Definir las rutas dentro del blueprint
@bp.route('/')
def index():
    return render_template('index.html')

@bp.route('/about')
def about():
    return "Esta es la página de acerca de nosotros."

@bp.route('/user/<username>')
def user_profile(username):
    return f"Perfil de usuario: {username}"


