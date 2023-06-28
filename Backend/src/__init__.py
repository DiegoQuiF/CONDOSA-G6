from flask import Flask
from config import DATABASE_CONNECTION_URI

from .routes import index

app = Flask(__name__)

def init_app():
    app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_CONNECTION_URI
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    app.register_blueprint(index.main, url_prefix='/')
    
    return app