from yattag import Doc
from bs4 import BeautifulSoup

working_dir = "./src/posts/"
source = "manifest.txt"
thoughts_text = "./src/thoughts_base.html"
output_file = "src/thoughts.html"

with open(working_dir + source) as f:
    data = f.readlines()
f.close()

if len(data) == 0:
    exit(1)

doc, tag, text = Doc().tagtext()

for i in range(len(data) - 1, -1, -1):
    postname = data[i].strip()
    with open(working_dir + postname) as post:
        post_data = post.readlines()
        with tag("div", klass="article"):
            with tag("h3"):
                text(post_data[0].strip())
            for j in range(1, len(post_data)):
                with tag("p"):
                    text(post_data[j].strip())

result = doc.getvalue()
with open(thoughts_text) as base:
    thoughts_bs = BeautifulSoup(base, 'html.parser')
base.close() 
tag = thoughts_bs.find(class_="article-box")
tag.insert(1, BeautifulSoup(result, 'html.parser'))

html = thoughts_bs.prettify("utf-8")
with open(output_file, "wb") as f:
    f.write(html)
    f.close()
