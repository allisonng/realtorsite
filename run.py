import jinja2
templateLoader = jinja2.FileSystemLoader(searchpath="./templates")
templateEnv = jinja2.Environment(loader=templateLoader)
TEMPLATE_FILE = "mls_search.html"
template = templateEnv.get_template(TEMPLATE_FILE)
outputText = template.render()
print outputText.encode('ascii', 'ignore')

# from jinja2 import Environment, FileSystemLoader
# env = Environment(loader=FileSystemLoader)
# template = env.get_template('./templates/test.html')
# print template.render()