from flask import Blueprint, jsonify, request
from src.database.db import db
from src.services.get.getPredios import getPredios
from src.services.get.getGastos import getGastos
from src.services.get.getTablaCasas import getTablaCasas
from src.services.get.getTipoGastos import getTipoGastos
from src.services.get.getDescripGastos import getDescripGastos

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

@main.route('/getPredios/<int:id>/getCasas')
def casas(id):
    try:
        casas = getTablaCasas(id)
        if(len(casas)>0):
            return jsonify({'casas':casas, 'message':"SUCCESS", 'success':True})
        else:
            return jsonify({'message':"NOT FOUND", 'success':True})
    except Exception as error:
        return jsonify({'message':'ERROR', 'success':False})

@main.route('/getTipoGastosComunes')
def tipoGastosComunes():
    try:
        tipoGastos = getTipoGastos()
        if(len(tipoGastos) > 0):
            return jsonify({'tipoGastosComunes':tipoGastos, 'message':"SUCCESS", 'success':True})
        else:
            return jsonify({'message':"NOT FOUND", 'success':True})
    except Exception as error:
        return jsonify({'message':'ERROR', 'success':False})
    
@main.route('/getTipoGastosComunes/<int:id>')
def descripGastos(id):
    try:
        tipoGastos = getDescripGastos(id)
        if(len(tipoGastos) > 0):
            return jsonify({'descripGastosComunes':tipoGastos, 'message':"SUCCESS", 'success':True})
        else:
            return jsonify({'message':"NOT FOUND", 'success':True})
    except Exception as error:
        return jsonify({'message':'ERROR', 'success':False})