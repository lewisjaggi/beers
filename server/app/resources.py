from flask_restful import Resource
from reqparsers import *
from db import query_db


class Beers(Resource):

    def get(self):
        data = parser_beers.parse_args()
        query = 'select * from data_beers where data_beers.country=? limit 10'
        req = query_db(query, args=(data['country'],))
        return req


class Minmax(Resource):

    def get(self):
        min_max = 'select min(beers.abv) as min ,max(beers.abv) as max from beers'
        min_max = query_db(min_max, one=True)
        return min_max


class Average(Resource):

    def get(self):
        query = 'select * from avg_country'
        average = query_db(query)
        return average
