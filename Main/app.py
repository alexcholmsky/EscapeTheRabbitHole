from flask import Flask, request
from flask_restful import Api, Resource
from flask_cors import CORS
import extractor

app = Flask(__name__)
api = Api(app)

cors = CORS()
cors.init_app(app)


@app.route('/endpoint', methods=['POST', 'GET'])
def get_names():
    if request.method == 'POST':
        names = request.get_json()

    if request.method == 'GET':
        names = request.get_json()
    return {"data": names}

# @app.route('/json_example', methods=['POST','GET'])
# def json_example():
#     req_data = request.get_json()
#     return {"name": req_data}


@app.route("/")
def hello():
    return "Hello, World!"


class test(Resource):
    def post(self):
        payload = request.get_json(force=True)

        # THIS IS RECEIVING TEXT PROPERLY
        text = payload.get("text", None)
        keywords = extractor.get_keywords(text)

        return {"text": text, "keywords": keywords}

api.add_resource(test, "/test")

if __name__ == "__main__":
    app.run(debug=True)
