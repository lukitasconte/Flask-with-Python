TrabajoIntegradorFinal.PA_grupo19
Descripción
Esta es una aplicación simple de gestión de tareas construida con Flask. Permite agregar tareas con un título y descripción, y ver una lista de todas las tareas.

Pasos:
Instalar Flask: pip install flask en cmd
Instalar Flask SQLAlchemy (para la base de datos sql): pip install flask sqlalchemy en cmd


Palabras usadas desconocidas:
Rutas: Las rutas en una aplicación web son como caminos o direcciones que indican a la aplicación qué hacer cuando alguien visita cierta URL en un navegador.

Modelos:Los modelos en una aplicación web representan la información que queremos guardar y manejar. Piensa en ellos como formularios o plantillas que tienen espacios para llenar con datos. En Flask, usamos SQLAlchemy para definir modelos. Por ejemplo, podrías tener un modelo llamado Task que tenga atributos como id y description. Este modelo nos permite organizar y guardar información de manera estructurada en una base de datos.

Init:El archivo __init__.py en una aplicación Flask es donde configuramos y preparamos la aplicación para funcionar correctamente. Aquí se establecen cosas como la conexión a la base de datos, la configuración de seguridad y otras opciones importantes que la aplicación necesita para operar correctamente.

Framework: Un framework es como una caja de herramientas que los desarrolladores usan para construir aplicaciones web de manera más fácil y rápida. Flask es un tipo de framework que proporciona herramientas y funciones predefinidas que ayudan a los desarrolladores a escribir menos código y a construir aplicaciones web más eficientemente.

Flask: Flask es un tipo específico de framework llamado "microframework" diseñado para Python. Es "micro" porque es pequeño y liviano, lo que significa que tiene menos funciones incorporadas comparado con otros frameworks más grandes. Esto hace que Flask sea fácil de aprender y usar para construir aplicaciones web simples y rápidas.

Flask–SqlAlchemy: Flask-SQLAlchemy es una extensión de Flask que ayuda a integrar SQLAlchemy con aplicaciones Flask. SQLAlchemy es una herramienta poderosa que permite interactuar con bases de datos usando objetos de Python en lugar de escribir consultas SQL directamente. Flask-SQLAlchemy facilita esta integración, haciendo más fácil el manejo de datos en una aplicación Flask.


ERROR de VENV, Entorno Virtual (que le pasaba a Luana): 
1. Borrar carpeta del entorno virtual (venv), y crearla de 0
   
2. En cmd escribir cd ruta/al/directorio/de/tu/proyecto
    python -m venv venv

3. Activarlo: .\venv\Scripts\activate

4. Por ultimo, instalar Flask y FlaskSQLAlchemy:
    pip install flask
    pip install flask-sqlalchemy

5. Y ejecutar: app.py o python app.py

6. Desactivar: deactivate
