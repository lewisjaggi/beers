from flask_restful import Resource
from reqparsers import *
from db import query_db

class beers(Resource):

    def get(self):
        data = parser_beers.parse_args()
        query = f'Select beers.name, AVG(reviews.score) from beers JOIN reviews ON beers.beer_id = reviews.beer_id where  beers.country = "{data["country"]}" GROUP BY beers.country'
        req = query_db(query)
        return req