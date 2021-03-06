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
api.add_resource(resources.AverageVolumeStyle,'/volumestyle')

api.add_resource(resources.Average,'/average')
api.add_resource(resources.BeerStats,'/beerStat')
api.add_resource(resources.SimilarBeers,'/similarBeers')
api.add_resource(resources.BeerStyle,"/style")
api.add_resource(resources.SimilarBeersFull,'/similarBeersFull')
api.add_resource(resources.SearchBeer,'/searchBeer')