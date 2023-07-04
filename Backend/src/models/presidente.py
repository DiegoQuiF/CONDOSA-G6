from src.database.db import db

class Presidente(db.Model):
    id_persona =     db.Column(db.Integer, primary_key=True)
    responsable =     db.Column(db.String(100))

    def __init__(self, resp) -> None:
        self.responsable = resp

    def to_json(self):
        return {
            'id_persona': self.id_persona,
            'responsable': self.responsable
        }