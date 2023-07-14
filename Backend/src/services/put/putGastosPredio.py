from src.database.db import connection

def putGastosPredio(id_pre_ga_det, importe):
    try:
        conn = connection()
        inst = "update predio_gastos_det set importe = %s where id_predio_gastos_det = %s;"
        with conn.cursor() as cursor:
            cursor.execute(inst, (importe,id_pre_ga_det))
            conn.commit()
        conn.close()
        return True
    except Exception as error:
        print(error)
        return False