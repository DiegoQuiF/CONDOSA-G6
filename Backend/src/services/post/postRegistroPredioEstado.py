from src.database.db import connection

def postRegistroPredioEstado(id_predio, id_personal,id_estado,periodo):
    try:
        print("Se trata de inserta un registro predio estado")
        conn = connection()
        inst = "insert into REGISTRO_PREDIO_ESTADO (id_predio, id_personal, id_estado, periodo) values (%s, %s, %s, %s);"
        with conn.cursor() as cursor:
            cursor.execute(inst, (id_predio, id_personal,id_estado,periodo))
            conn.commit()
        conn.close()
        return True
    except Exception as error:
        print(error)
        return False