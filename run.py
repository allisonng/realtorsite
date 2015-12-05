# ./templates is where file is held, compiled file will be in same dir as run.py
# in cmd line: "python run.py > filename.html"

import jinja2

fileList = ["index.html", "current_listings.html", "sold_listings.html", "mls_search.html"]
fileDict = {'Index': 'index.html', 'Current listings': 'current_listings.html', 'Sold Listings': 'sold_listings.html', 'House Search': 'mls_search.html'}

templateLoader = jinja2.FileSystemLoader(searchpath="./templates")
templateEnv = jinja2.Environment(loader=templateLoader)
# TEMPLATE_FILE = raw_input("Name of file including html: ")
TEMPLATE_FILE = "index.html"
# print "User entered: " + TEMPLATE_FILE
template = templateEnv.get_template(TEMPLATE_FILE)
# print template.filename
outputText = template.render(fileDict=fileDict, fileName=TEMPLATE_FILE)
print outputText.encode('ascii', 'ignore')

# from jinja2 import Environment, FileSystemLoader
# env = Environment(loader=FileSystemLoader)
# template = env.get_template('./templates/test.html')
# print template.render()