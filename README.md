# Express PDF Service
## Purpose
This application was created to show how you can use the npm library `html-pdf` to generate a PDF document from a 
nicely crafted HTML file. If you wish to use CSS make sure that is included inside style tags in the header of the document. You can use the sample test.html file for reference. 
## Steps to run application
1. git clone https://github.com/dtbell99/express_pdf_service.git
2. cd express_pdf_service
3. npm install
4. npm start

## How to test application
* Update the test.html file to contain what you wish to use as your test.
* Post the contents of the test.html to the endpoint to get back a PDF. 
(Example in curl here) curl -H "Content-Type: text/plain" -X POST -d @test.html http://localhost:3000/pdf
#### If you don't have curl installed (if you are on a Windows machine for example) you can download it here: https://curl.haxx.se/download.html

## Where to go next
Moving forward you can take the sample /pdf node express.js code and put it in your application. Make sure to add the html-pdf library to your package.json file and do a npm install. Then you can post your own html or you could simply read HTML from the server and use a GET request with URI parameters to generate your document. 

## Contact/Help
You can reach me through github or directly at david at broadlyapplicable.com if you have questions/comments or wish to make a pull request. Good luck and enjoy, I hope this small code tutorial has helped you get started with this great library. 