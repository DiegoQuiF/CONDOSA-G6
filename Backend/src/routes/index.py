from flask import Blueprint, jsonify, request
from src.database.db import db
from src.services.get.getPredios import getPredios
from src.services.get.getGastos import getGastos

main = Blueprint('index_blueprint', __name__)

@main.route('/getPredios')
def principal():
    try:
        predios = getPredios()
        if(len(predios) > 0):
            return jsonify({'predios':predios, 'message':"SUCCESS", 'success':True})
        else:
            return jsonify({'message':"NOT FOUND", 'success':True})
    except Exception as error:
        return jsonify({'message':'ERROR', 'success':False})
    
@main.route('/getPredios/<int:id>')
def gastos(id):
    try:
        gastos = getGastos(id)
        if(len(gastos)>0):
            return jsonify({'gastos':gastos, 'message':"SUCCESS", 'success':True})
        else:
            return jsonify({'message':"NOT FOUND", 'success':True})
    except Exception as error:
        return jsonify({'message':'ERROR', 'success':False})