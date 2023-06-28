from src.database.db import connection
from src.models.predios import Predios

def getPredios():
    try:
        conn = connection()
        predios = []
        inst = "select PR.id_predio, CONCAT(TP.nomre_predio, ' < ', PR.descripcion, ' >') as predio from tipo_predio TP, predio PR where TP.id_tipo_predio = PR.id_tipo_predio;"
        with conn.cursor() as cursor:
            cursor.execute(inst)
            for row in cursor.fetchall():
                predio = Predios(row[1])
                predio.id_predio = row[0]
                predios.append(predio.to_json())
        conn.close
        return predios
    except Exception as error:
        print(error)
