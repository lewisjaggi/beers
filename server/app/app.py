from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from flask import g
import resources


app = Flask(__name__)
api = Api(app)
CORS(app)


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

api.add_resource(resources.Beers, '/beers')
api.add_resource(resources.AverageVolume,'/volume')

api.add_resource(resources.Average,'/average')
api.add_resource(resources.BeerStats,'/beerStat')