# import jinja2
# templateLoader = jinja2.FileSystemLoader(searchpath=".")
# templateEnv = jinja2.Environment(loader=templateLoader)
# TEMPLATE_FILE = "template.html"
# template = templateEnv.get_template(TEMPLATE_FILE)
# outputText = template.render()
# print outputText

from jinja2 import Environment, FileSystemLoader
env = Environment(loader=FileSystemLoader)
template = env.get_template('test.html')
print(template.render())