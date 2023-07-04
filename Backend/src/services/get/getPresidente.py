from src.database.db import connection
from src.models.presidente import Presidente

def getPresidente(id):
    try:
        conn = connection()
        presidentes = []
        inst = "select PE.id_persona, CONCAT(PE.apellido_paterno, ' ', PE.apellido_materno, ', ', PE.nombres) as responsable from persona PE where PE.id_persona  = %s;"
        with conn.cursor() as cursor:
            cursor.execute(inst, (id,))
            for row in cursor.fetchall():
                presidente = Presidente(row[1])
                presidente.id_persona = row[0]
                presidentes.append(presidente.to_json())
        conn.close()
        return presidentes
    except Exception as error:
        print(error)
