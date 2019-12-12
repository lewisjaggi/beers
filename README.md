# beers
VI Project for MSE

## Procédure d'installation

### pré-requis
- Python 3.6 minimum
- git

### Installation
1. Effectuer un clone du repository 
```=bash
git clone https://github.com/lewisjaggi/beers.git
cd beers
```
2. Obtenir les données ici :
https://drive.google.com/file/d/1orRh94BwkrKji9x1KVBuZ3Tpf26Grj6B/view?usp=sharing

Télécharger beers.zip et décompresser le fichier beers.sqlite dans ./data

#### Installation server Flask
1. se rendre dans ./server
2. créer un environnement virtuel Python
```
pip install virutalenv
virtualenv beers
```
3. Activer l'envrionnement virtuel python

batch windows :
```
\beers\Scripts\activate
```
bash :
```
source beers/bin/activate
```
3. Installer les requirements
```
pip install -r requirements.txt
```
4. se rendre dans /app et lancer le serveur
```
cd ./server/app
flask run
```

#### Lancer l'application
1. lancer la commande suivante à la racine du projet :
```
python -m http-server [port]
```
2. se rendre à l'adresse : http://127.0.0.1:port/index.html
