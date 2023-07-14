from flask import Blueprint, jsonify, request
from src.database.db import db
from src.services.get.getPredios import getPredios
from src.services.get.getRegistroPredioEstado import getRegistroPredioEstado
from src.services.get.getGastos import getGastos
from src.services.get.getTablaCasas import getTablaCasas
from src.services.get.getTipoGastos import getTipoGastos
from src.services.get.getDescripGastos import getDescripGastos
from src.services.get.getPredio import getPredio
from src.services.get.getGastosPredio import getGastosPredio
from src.services.get.getGastoRegistrado import getGastosPredioI
from src.services.post.postGastosPredio import postGastosPredio
from src.services.post.postRegistroPredioEstado import postRegistroPredioEstado
from src.services.put.putGastosPredio import putGastosPredio
from src.services.put.putRegistroPredioEstado import putRegistroPredioEstado
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
    
@main.route('/getPredio/<int:id>')
def predio(id):
    try:
        predio = getPredio(id)
        if(len(predio) > 0):
            return jsonify({'predio':predio, 'message':"SUCCESS", 'success':True})
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
    
@main.route('/getGastosPredios/<int:id>')
def gastosPredios(id):
    try:
        gastosPredios = getGastosPredio(id)
        if(len(gastosPredios) > 0):
            return jsonify({'gastoPredioDetalle':gastosPredios, 'message':"SUCCESS", 'success':True})
        else:
            return jsonify({'message':"NOT FOUND", 'success':True})
    except Exception as error:
        return jsonify({'message':'ERROR', 'success':False})

@main.route('/getGastosPredios/<int:id>/<int:idgasto>')
def gastosPrediosI(id, idgasto):
    try:
        gastosPredios = getGastosPredioI(id, idgasto)
        if(len(gastosPredios) > 0):
            return jsonify({'gastoPredioDetalleI':gastosPredios, 'message':"SUCCESS", 'success':True})
        else:
            return jsonify({'message':"NOT FOUND", 'success':True})
    except Exception as error:
        return jsonify({'message':'ERROR', 'success':False})



@main.route('/insertarGastoPredio', methods = ['POST'])
def insertar_gasto_predio():
    try:
        data = request.get_json()
        id_predio_gastos = data['id_predio_gastos']
        id_gasto = data['id_gasto']
        importe = data['importe']
        if(postGastosPredio(id_predio_gastos, id_gasto, importe)):
            return jsonify({'message': data, 'success':True})
        else:
            return jsonify({'message':"NOT FOUND", 'success':True})
    except Exception as error:
        return jsonify({'message':'ERROR', 'success':False})
    
@main.route('/actualizarGastoPredio', methods = ['PUT'])
def actualizar_gasto_predio():
    try:
        data = request.get_json()
        id_predio_gastos_det = data['id_predio_gastos_det']
        importe = data['importe']
        if(putGastosPredio(id_predio_gastos_det, importe)):
            return jsonify({'message': data, 'success':True})
        else:
            return jsonify({'message':"NOT FOUND", 'success':True})
    except Exception as error:
        return jsonify({'message':'ERROR', 'success':False})
    
    

@main.route('/getRegistroPredioEstado')
def registroPredioEstadoI():
    try:
        registros_predios_estados = getRegistroPredioEstado()
        if(len(registros_predios_estados) > 0):
            return jsonify({'registros_predios_estados':registros_predios_estados, 'message':"SUCCESS", 'success':True})
        else:
            return jsonify({'message':"NOT FOUND", 'success':True})
    except Exception as error:
        return jsonify({'message':'ERROR', 'success':False})

@main.route('/insertarRegistroPredioEstado', methods = ['POST'])
def insertar_registro_predio_estado():
    try:
        data = request.get_json()
        id_predio = data['id_predio']
        id_personal = data['id_personal']
        id_estado = data['id_estado']
        periodo = data['periodo']
        if(postRegistroPredioEstado(id_predio, id_personal, id_estado, periodo)):
            return jsonify({'message': data, 'success':True})
        else:
            return jsonify({'message':"NOT FOUND", 'success':True})
    except Exception as error:
        return jsonify({'message':'ERROR', 'success':False})
    
@main.route('/actualizarRegistroPredioEstado', methods = ['PUT'])
def actualizar_registro_predio_estado():
    try:
        data = request.get_json()
        id_estado = data['id_estado']
        id_predio = data['id_predio']
        periodo = data['periodo']
        if(putRegistroPredioEstado(id_estado, id_predio,periodo)):
            return jsonify({'message': data, 'success':True})
        else:
            return jsonify({'message':"NOT FOUND", 'success':True})
    except Exception as error:
        return jsonify({'message':'ERROR', 'success':False})
    