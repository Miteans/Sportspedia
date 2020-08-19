from flask import Flask, jsonify,request
from flaskext.mysql import MySQL
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'pooj@shetty9'
app.config['MYSQL_DATABASE_DB'] = 'cafe'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)

@app.route('/coffee')
def get_coffee_details():
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT item_name,price,image from items where category = 'coffee'")
    data = cursor.fetchall()
    return jsonify({'coffee':data})

@app.route('/icecream')
def get_ice_cream_details():
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT item_name,price,image from items where category = 'ice cream'")
    data = cursor.fetchall()
    return jsonify({'icecream':data})

@app.route('/snacks')
def get_snacks_details():
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT item_name,price,image from items where category = 'snacks'")
    data = cursor.fetchall()
    return jsonify({'snacks':data})

@app.route('/cake')
def get_cake_details():
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT item_name,price,image from items where category = 'cake'")
    data = cursor.fetchall()
    return jsonify({'cake':data})

if __name__ == "__main__":
    app.run(debug=True)