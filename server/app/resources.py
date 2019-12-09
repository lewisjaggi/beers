from flask_restful import Resource
from reqparsers import *
from db import query_db


class Beers(Resource):

    def get(self):
        data = parser_beers.parse_args()
        query = 'select * from data_beers2 where data_beers2.country=? and abv between ? and ? order by average desc limit 10'
        req = query_db(query, args=(data['country'],data['min'],data['max']))
        return req


class AverageVolume(Resource):

    def get(self):
        data = parser_beers_volume.parse_args()
        query = f'''select country,avg(score) as average from beers inner join reviews r on beers.beer_id = r.beer_id
where beers.abv between ? and ? group by beers.country order by average desc'''
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