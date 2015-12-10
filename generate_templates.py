# ./templates is where file is held, compiled file will be in same dir as run.py
# since it doesn't take long, this will just recompile all files inside ./templates when run

import jinja2
from collections import OrderedDict

fileList = ["index.html", "current_listings.html", "sold_listings.html", "mls_search.html"]
fileDict = OrderedDict([('index.html', 'Main'), ('current_listings.html', 'Current listings'), ('coming_soon.html', 'Sold Listings'), ('mls_search.html', 'House Search')])
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

print '\nCompiling complete! :D'