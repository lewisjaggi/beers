from flask_restful import Resource
from reqparsers import *
from db import query_db

class beers(Resource):

    def get(self):
        data = parser_beers.parse_args()
        query = 'select * from data_beers where data_beers.country=? limit 10'
        req = query_db(query,args=(data['country'],))
        return req
