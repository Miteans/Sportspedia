from flask import Flask, jsonify,request
from flask_cors import CORS, cross_origin
from flask_pymongo import PyMongo
import sportspedia_db as sd

app = Flask(__name__)
CORS(app)


@app.route('/cricket')
def get_info_of_cricket():
    info = sd.get_info_of_cricket()
    return jsonify({'cricket_info':info})

@app.route('/cricket/events')
def get_info_of_event():
    info = sd.get_info_of_event()
    return jsonify({'event_info':info})

#Teams Part
@app.route('/cricket/players/<teamId>')
def get_players_of_a_team(teamId):
    team_players = sd.get_players_of_a_team(teamId)
    return jsonify({'team_players':team_players})

@app.route('/cricket/ipl-teams')
def get_info_of_ipl_teams():
    ipl_cricket_teams = sd.get_ipl_teams_info()
    return jsonify({'ipl_cricket_teams':ipl_cricket_teams})

@app.route('/cricket/international-teams')
def get_info_of_int_teams():
    international_cricket_teams = sd.get_interational_teams_info()
    return jsonify({'international_cricket_teams':international_cricket_teams})

@app.route('/kabaddi')
def get_info_of_kabaddi():
    info = sd.get_info_of_kabaddi()
    return jsonify({'kabaddi_info':info})

if __name__ == "__main__":
    app.run(debug=True)