from flask_restful import Resource
from reqparsers import *
from db import query_db


class Beers(Resource):

    def get(self):
        data = parser_beers.parse_args()
        query = 'select * from data_beers where data_beers.country=? limit 10'
        req = query_db(query, args=(data['country'],))
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
