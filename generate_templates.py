# ./templates is where file is held, compiled file will be in same dir as run.py
# since it doesn't take long, this will just recompile all files inside ./templates when run

import jinja2
from collections import OrderedDict

fileList = ["index.html", "current_listings.html", "sold_listings.html", "mls_search.html"]
# fileDict = {'Index': 'index.html', 'Current listings': 'current_listings.html', 'Sold Listings': 'sold_listings.html', 'House Search': 'mls_search.html'}
# fileDict = {'index.html': 'Main', 'current_listings.html': 'Current Listings', 'sold_listings.html': 'Sold Listings', 'mls_search.html': 'House Search'}
fileDict = OrderedDict([('index.html', 'Main'), ('current_listings.html', 'Current listings'), ('sold_listings.html', 'Sold Listings'), ('mls_search.html', 'House Search')])
fileDictItems = fileDict.items()

templateLoader = jinja2.FileSystemLoader(searchpath="./templates")
templateEnv = jinja2.Environment(loader=templateLoader)

for key,value in fileDictItems:
    print key
    template = templateEnv.get_template(key) #./templates should have same names 
    file = open(key, 'w') # w will erase existing files
    outputText = template.render(fileDict=fileDictItems, fileName=key)
    file.write(outputText.encode('ascii', 'ignore'))
    file.close()

# TEMPLATE_FILE = "index.html"
# template = templateEnv.get_template(TEMPLATE_FILE)
# outputText = template.render(fileDict=fileDictItems, fileName=TEMPLATE_FILE)
# print outputText.encode('ascii', 'ignore')



# from jinja2 import Environment, FileSystemLoader
# env = Environment(loader=FileSystemLoader)
# template = env.get_template('./templates/test.html')
# print template.render()