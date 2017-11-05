# Assignment 2  
## What is the function of the following technologies in your assignment:  

1. HTML  
  To marks the content up into different structural types.
2. CSS  
  To tell the browser how each type of element in content should be displayed,.
3. JavaScript  
  To tell the browser how to change the web page in response to events that happen.
4. Python  
  Used for a host of webserver built by Flask.
5. Flask   
  As a web application framework to build a web server to reponse to HTTP request with specific operation. 
6. HTTP  
  As a kind of protocol based on TCP to build a connection bewteen server and customer based on TCP for data transmission. 
7. GET and POST requests  
  Normally, GET is used to request data from web server, and POST is used to submit data to web server.

## How does HTML, CSS, and JavaScript work together in the browser for this assignment?  
  User's input on browser will run JavaScript to render related HTML styled by CSS.

## How does Python and Flask work together in the server for this assignment?  
  HTTP request will run corresponding function in Flask programmed in Python to give response back.

## List all of the possible GET and POST requests that your server returns a response for and describes what happens for each GET and POST request . 
    GET: /                    will render index.html in templates
    GET: /index               will render index.html in templates
    GET: /about               will render about.html in templates
    GET: /contact             will render contact.html in templates
    GET: /blog/<blog_name>    will render /blog/<blog_name> in templates
    
    POST: /contact            will submit a form with Name, Subject and Message as data to send a email through mailgun API and render contact.html in templates with Name as params
