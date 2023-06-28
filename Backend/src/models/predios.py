from src.database.db import db

class Predios(db.Model):
    id_predio =     db.Column(db.Integer, primary_key=True)
    predio =        db.Column(db.String(100))

    def __init__(self, predio) -> None:
        self.predio = predio

    def to_json(self):
        return {
            'id_predio': self.id_predio,
            'predio': self.predio
        }