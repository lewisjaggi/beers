from flask_restful import reqparse, inputs

parser_beers = reqparse.RequestParser(bundle_errors=True)
parser_beers.add_argument('country', required=True)
parser_beers.add_argument('min', type=float, required=True)
parser_beers.add_argument('max', type=float, required=True)

parser_beers_volume = reqparse.RequestParser(bundle_errors=True)
parser_beers_volume.add_argument('min', type=float, required=True)
parser_beers_volume.add_argument('max', type=float, required=True)

parser_beer = reqparse.RequestParser(bundle_errors=True)
parser_beer.add_argument('beerId', required=True)

parser_style = reqparse.RequestParser(bundle_errors=True)
parser_style.add_argument('style', required=True)
parser_style.add_argument('min', type=float, required=True)
parser_style.add_argument('max', type=float, required=True)

