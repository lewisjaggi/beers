from flask_restful import Resource
from reqparsers import *
from db import query_db
import json


class Beers(Resource):

    def post(self):
        data = parser_beers.parse_args()
        styles = ','.join(map(lambda str: f"'{str}'", json.loads(data['style'])))
        query = f'select * from data_beers2 where data_beers2.country=? and abv between ? and ? and style in ({styles})order by average desc limit 10'
        req = query_db(query, args=(data['country'],data['min'],data['max']))
        return req


class AverageVolumeStyle(Resource):

    def post(self):
        data = parser_beers_volume.parse_args()
        styles = ','.join(map(lambda str: f"'{str}'",json.loads(data['style'])))
        query = f'''select country,sum(sumScore)/sum(nbBeer) as average from data_beers2 where abv between ? and ? and style in ({styles}) and country!="undefined" group by country order by average desc'''
        req = query_db(query,(data['min'],data['max']))
        return req


class Average(Resource):

    def get(self):
        query = 'select * from avg_country'
        average = query_db(query)
        return average

class BeerStats(Resource):

    def get(self):
        data = parser_beer.parse_args()
        query = f'''select * from data_beers2 where beer_id = ?'''
        req = query_db(query,(data["beerId"],))
        return req

class SimilarBeers(Resource):

    def get(self):
        data = parser_style.parse_args()
        query = f'''select * from data_beers2 where style = ? order by average desc limit 10'''
        req = query_db(query,(data["style"],))
        return req

class SimilarBeersFull(Resource):

    def get(self):
        data = parser_style.parse_args()
        query = f'''select * from data_beers2 where style = ? order by average desc'''
        req = query_db(query,(data["style"],))
        return req

class BeerStyle(Resource):

    def get(self):
        query = f'''select beers.style from beers group by beers.style'''
        req = query_db(query)
        return req


class SearchBeer(Resource):

    def get(self):
        data = parser_search_beer.parse_args()
        search = "'%" + data["search"]  + "%'"
        query = f'''select beer_id, name from data_beers2 where data_beers2.name LIKE {search} limit 20'''
        req = query_db(query)
        return req
