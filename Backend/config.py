from dotenv import load_dotenv
import os

load_dotenv()

user =      os.environ["USER"]
password =  os.environ["PASSWORD"]
host =      os.environ["HOST"]
database =  os.environ["DATABASE"]
server =    os.environ["SERVER"]

# Linea de conexión a la base de datos
DATABASE_CONNECTION_URI = f'{server}://{user}:{password}@{host}/{database}'