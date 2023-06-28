from src.database.db import db
from src import init_app

app = init_app()

db.init_app(app)

app.app_context().push()

if __name__ == '__main__':
    app.run(debug=True)