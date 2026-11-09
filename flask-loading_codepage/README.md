README

Pour pouvoir charger la librairie javascript et activez les methodes fetch() en local sous Windows:
ouvrir le Powershell
créer ou activer un environnement virtuel Python: (python-m venv .venv) ou .venv/Scripts/activate
pour la premiere fois installer les dependences:  python -m pip install flask, werkzeug
initialiser la base de donnees: flask --app flaskr init-db
lancer l'application: flask --app flaskr run --debug
ouvrir le navigateur et visiter l'url http://127.0.0.1:5000/hello pour un simple test de connection 

NOTES: l'etape du tutorial OC qui est intégrée ici avec flask correspond au debut du chapitre trois de la partie 2
