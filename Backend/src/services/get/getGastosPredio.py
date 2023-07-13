from src.database.db import connection
from src.models.gastoPredio import GastoPredio

def getGastosPredio(id):
    try:
        conn = connection()
        gastosPredios = []
        inst = "select PGD.id_predio_gastos_det, GA.descripcion, PGD.importe from predio_gastos_det PGD, gasto GA where PGD.id_predio_gastos = %s and GA.id_gasto = PGD.id_gasto;"
        inst1 = "update predio_gastos as PG set importe = (select sum(PGD.importe) from predio_gastos_det PGD) where PG.id_predio_gastos = %s;"
        with conn.cursor() as cursor:
            cursor.execute(inst, (id,))
            for row in cursor.fetchall():
                gastoPredio = GastoPredio(row[1], row[2])
                gastoPredio.id_predio_gastos_det = row[0]
                gastosPredios.append(gastoPredio.to_json())
            conn.commit()
            cursor.execute(inst1, (id,))
            conn.commit()
        conn.close()
        return gastosPredios
    except Exception as error:
        print(error)