import os
from github import Github
from dotenv import load_dotenv, find_dotenv
from flask import Flask

app = Flask(__name__)

load_dotenv(find_dotenv())
    
FACE_TOKEN = os.getenv("FACE_TOKEN")
g = Github(FACE_TOKEN)
repo = g.get_user().get_repo("face")
print(type(repo), repo)

# start api endpoints

@app.route("/")
def hello():
    return repo

if __name__ == '__main__':
    app.run(debug=True)
    
# end api endpoints