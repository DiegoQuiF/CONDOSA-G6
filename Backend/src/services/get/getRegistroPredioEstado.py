from src.database.db import connection
from src.models.registro_predio_estado import RegistroPredioEstado

def getRegistroPredioEstado():
    try:
        conn = connection()
        predios_estados = []
        inst = "select pred.*, (select e.descripcion from ESTADO e where e.id_estado = pred.id_estado) as descripcion from REGISTRO_PREDIO_ESTADO pred;"
        with conn.cursor() as cursor:
            cursor.execute(inst)
            for row in cursor.fetchall():
                predio_estado = RegistroPredioEstado(row[1], row[2],row[3],row[4],row[5])
                predio_estado.id_registro_predio_estado = row[0]
                predios_estados.append(predio_estado.to_json())
        conn.close()
        return predios_estados
    except Exception as error:
        print(error)