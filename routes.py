from models import Task, db  # Importación absoluta
from flask import Blueprint, request, jsonify, render_template

bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    return render_template('index.html')

@bp.route('/add_task')
def add_task():
    return render_template('add_task.html')

@bp.route('/tasks', methods=['POST'])
def add_task_api():
    data = request.get_json()
    new_task = Task(description=data['description'])
    db.session.add(new_task)
    db.session.commit()
    return jsonify({"message": "Task added!"}), 201

@bp.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([{"id": task.id, "description": task.description, "completed": task.completed} for task in tasks])
