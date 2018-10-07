import time
import math
from flask import Flask
app = Flask(__name__)
 
@app.route("/")
def hello():
    return "Hello World from python!"

@app.route("/delay")
def hello_delay():
    time.sleep(10)
    return "Hello World from python with delay!"

@app.route("/calc")
def calc():
    value = 0.1 
    for i in xrange(5000000,6000000):         
        value += math.sin(i)
    return "python intensive calculation, result:" + str(value)

if __name__ == "__main__":
    app.run()
