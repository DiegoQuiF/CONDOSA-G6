from src.database.db import db

class GastoPredio(db.Model):
    id_predio_gastos_det =     db.Column(db.Integer, primary_key=True)
    descripcion =              db.Column(db.String(100))
    importe =              db.Column(db.Float)

    def __init__(self, des, imp) -> None:
        self.descripcion = des
        self.importe = imp

    def to_json(self):
        return {
            'id_predio_gastos_det': self.id_predio_gastos_det,
            'descripcion': self.descripcion,
            'importe': self.importe
        }