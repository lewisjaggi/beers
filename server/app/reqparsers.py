from flask_restful import reqparse, inputs

parser_beers = reqparse.RequestParser(bundle_errors=True)
parser_beers.add_argument('country' , required = True)
