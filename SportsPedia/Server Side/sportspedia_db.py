from pymongo import MongoClient
from pprint import pprint

db = MongoClient("mongodb+srv://voicecode2379:v0icecode@cluster0-dgawx.mongodb.net/sports_details?retryWrites=true&w=majority")

mydb = db.sports_details

sports = mydb['sports']
players = mydb['players']
users = mydb['users']
events = mydb['events']

def get_info_of_cricket():
    cricket_info = []
    c_info =  sports.aggregate([{"$match":{"name":"Cricket"}},
        {"$project":{"name":1,"sports_id":1,"facts":1,"image":1,"_id":0}}
    ])

    for info in c_info:
        cricket_info.append(info)

    return cricket_info

def get_info_of_event():
    event_info = []
    e_info = events.aggregate([{"$match":{"sports_id":"cr"}},
    {"$project":{"event_id":1,"sports_id":1,"timings":1,"team_ids":1,"image":1,"stadium":1,"_id":0}}])

    for info in e_info:
        event_info.append(info)

    return event_info

def get_info_of_players():
    players_info = []
    p_info = players.aggregate([{"$match":{"sports_id":"cr"}},
    {"$project":{"name":1,"sports_id":1,"team_id":1,"player_id":1,"role":1,
        "description":1,"facts":1,"achievements":1,"country":1,"image":1,"_id":0}}])

    for info in p_info:
        players_info.append(info)

    return players_info

#Teams Part
def get_ipl_teams_info():
    ipl_teams = []

    ipl_info = sports.aggregate([{"$unwind":"$teams"},
    {"$match":{"name":"Cricket","teams.team_type":"ipl"}},
    {"$project":{"teamName":"$teams.name","teamId":"$teams.team_id","teamAchivement":"$teams.achivements",
        "teamFacts":"$teams.facts","_id":0}}])

    for info in ipl_info:
        ipl_teams.append(info)
    
    return ipl_teams

def get_interational_teams_info():
    international_teams = []

    international_info = sports.aggregate([{"$unwind":"$teams"},
    {"$match":{"name":"Cricket","teams.team_type":"international"}},
    {"$project":{"teamName":"$teams.name","teamId":"$teams.team_id","teamAchivement":"$teams.achivements",
        "teamFacts":"$teams.facts","_id":0}}])

    for info in international_info:
        international_teams.append(info)
    
    return international_teams

def get_players_of_a_team(teamId):
    team_players = []
    players_info = players.aggregate([
        {
            "$unwind":"$team_id"
        },
        {
            "$match":{
                "team_id":teamId
            }
        },
        {
            "$project":{
                "player_id":1,
                "role":1,
                "name":1,
                "team_id":1,
                "_id":0
            }
        }])

    for info in players_info:
        team_players.append(info)

    return team_players

def get_info_of_kabaddi():
    kabaddi_info = []
    k_info =  sports.aggregate([{"$match":{"name":"Kabaddi"}},
        {"$project":{"name":1,"sports_id":1,"facts":1,"image":1,"_id":0}}
    ])

    for info in k_info:
        kabaddi_info.append(info)

    return kabaddi_info