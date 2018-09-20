import time
from flask import Flask
app = Flask(__name__)
 
@app.route("/")
def hello():
    return "Hello World from python!"

@app.route("/delay")
def hello_delay():
    time.sleep(10)
    return "Hello World from python with delay!"

if __name__ == "__main__":
    app.run()