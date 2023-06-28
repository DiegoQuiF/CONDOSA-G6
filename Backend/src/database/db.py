from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import psycopg2
import os

db = SQLAlchemy()

load_dotenv()
def connection():
    user =      os.environ["USER"]
    password =  os.environ["PASSWORD"]
    host =      os.environ["HOST"]
    database =  os.environ["DATABASE"]
    server =    os.environ["SERVER"]

    try:
        conn = psycopg2.connect(
            user =       user,
            password =   password,
            host =       host,
            database =   database
        )
        print('Conexión realizada exitosamente con la base de datos.')
        return conn
    except psycopg2.Error as error:
        print('Error en la conexión con la base de datos: ', error)