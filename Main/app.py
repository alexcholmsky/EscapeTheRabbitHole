from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS
import extractor

app = Flask(__name__)
api = Api(app)

cors = CORS()
cors.init_app(app)


class test(Resource):
    def post(self):
        return {"data": extractor.keywords}

    def get(self):
        return {"data": extractor.keywords}


api.add_resource(test, "/test")

if __name__ == "__main__":
    app.run(debug=True)
