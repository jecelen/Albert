from flask import Flask
from routes.routes import routes_blueprint
import webbrowser

app = Flask(__name__)

app.register_blueprint(routes_blueprint)

if __name__ == '__main__':
    webbrowser.open_new('http://127.0.0.1:5000/')
    app.run(debug=True)