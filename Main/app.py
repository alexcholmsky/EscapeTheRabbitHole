from flask import Flask
from flask_restful import Api, Resource
import extractor

app = Flask(__name__)
api = Api(app)

class test(Resource):
    def post(self):
        return {"data": extractor.keywords}

api.add_resource(test, "/test")

if __name__ == "__main__":
    app.run(debug=True)