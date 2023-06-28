from flask import Blueprint, jsonify, request
from src.database.db import db
from src.services.get.getPredios import getPredios

main = Blueprint('index_blueprint', __name__)

@main.route('/')
def principal():
    try:
        predios = getPredios()
        if(len(predios) > 0):
            return jsonify({'predios':predios, 'message':"SUCCESS", 'success':True})
        else:
            return jsonify({'message':"NOT FOUND", 'success':True})
    except Exception as error:
        return jsonify({'message':'ERROR', 'success':False})