"""
webserver.py

File that is the central location of code for your webserver.
"""

from flask import Flask, render_template, redirect, url_for, request, flash
import requests

# Create application, and point static path (where static resources like images, css, and js files are stored) to the
# "static folder"
app = Flask(__name__,static_url_path="/static")

#home_page
@app.route('/', methods=['GET'])
def index_page():
    """
    If someone goes to the root of your website (i.e. http://localhost:5000/), run this function. The string that this
    returns will be sent to the browser
    """
    return render_template("index.html") # Render the template located in "templates/index.html"

@app.route('/index', methods=['GET'])
def return_index():
    return redirect("/")
@app.route('/about', methods=['GET'])
def about_page():
	return render_template("about.html")

@app.route('/contact', methods=['GET'])
def contact_page():
	return render_template("contact.html")

@app.route('/blog/<blog_name>', methods=['GET'])
def blog_page(blog_name):
	return render_template("blog/"+blog_name+".html")

@app.route('/contact', methods=['POST'])
def send_message():
  name = request.form.get("name")
  subject = request.form.get("subject")
  email = request.form.get("email")
  text = request.form.get("message")
  requests.post(
        "https://api.mailgun.net/v3/sandboxcfe13ea2b6454677ad3a9eeb67859b3c.mailgun.org/messages",
        auth=("api", "key-581b01dec69ae4c537968ee1e0e5ae58"),
        data={"from": name+" <postmaster@sandboxcfe13ea2b6454677ad3a9eeb67859b3c.mailgun.org>",
              "to": "Hanxiao Deng <hxdeng@berkeley.edu>",
              "subject": subject,
              "text": text+"   from  "+email})
  return render_template("contact.html",name="name")
# You can see a record of this email in your logs: https://mailgun.com/app/logs .

# You can send up to 300 emails/day from this sandbox server.
# Next, you should add your own domain so you can send 10,000 emails/month for free.



if __name__ == "__main__":
    app.run()