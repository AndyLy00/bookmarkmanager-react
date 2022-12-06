from flask import Flask
from flask import render_template

app = Flask(__name__)

bookmarks = [
    {'url': 'https://flask.palletsprojects.com',
     'title': 'Flask project',
     'description': 'The best python web framework for our project',
     'tags': [
         {'name': 'python'},
         {'name': 'framework'},
         {'name': 'web'}
     ]
     },
    {'url': 'https://www.youtube.com/watch?v=Cmo1_GRobQ4',
     'title': 'The Lawyer Commercial That We All Need',
     'description': 'A skit by Joel Haver',
     'tags': [
         {'name': 'funny'}
     ]
     },
    {'url': 'https://stallman.org/',
     'title': ' Richard Stallman\'s Personal Site ',
     'description': 'the Chief GNUisance of the GNU Project',
     'tags': [
         {'name': 'blog'}
     ]
     }
]

@app.route("/")
def bookmarks_page():
    return render_template('list.html')
