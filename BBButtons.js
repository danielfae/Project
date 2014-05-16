var app = require('http').createServer(httpserver);
var b = require('bonescript');
var value=0.5;

b.pinMode('P9_14', b.OUTPUT);
b.pinMode('P8_19', b.INPUT);
b.pinMode("P8_17", b.INPUT, 7, false);
b.pinMode("P8_16", b.INPUT, 7, false);
b.pinMode('P8_13', b.INPUT, 7, false);
b.pinMode('P8_11', b.INPUT, 7, false);
b.pinMode('P8_12', b.INPUT, 7, false);
b.pinMode('P8_14', b.INPUT, 7, false);


app.listen(8080);

function httpserver (req, res) {
  var url = req['url'];
  console.log(url);
  

  if (url == 'favicon.ico') {}
  
  
    else if (url == '/readButton') {
      b.digitalRead('P8_19', function(x) {
          console.log("Setting P9_14 to " + value);
          b.analogWrite("P9_14", value);
          
        res.setHeader('Access-Control-Allow-Origin','*');
        res.writeHead(200);
        res.end("" + x['value']);
        
      } 
    );
  }
  
  else if (url == '/readA') {
      b.digitalRead('P8_17', function(x) {
          
        res.setHeader('Access-Control-Allow-Origin','*');
        res.writeHead(200);
        res.end("" + x['value']);
        console.log("Setting P9_14 to " + "0");
        b.analogWrite("P9_14", 0);
      }
    );
  }
  

  else if (url == '/readB') {
      b.digitalRead('P8_16', function(x) {
        res.setHeader('Access-Control-Allow-Origin','*');
        res.writeHead(200);
        res.end("" + x['value']);
      }
    );
  }

  else if (url == '/readC') {
      b.digitalRead('P8_12', function(x) {
        res.setHeader('Access-Control-Allow-Origin','*');
        res.writeHead(200);
        res.end("" + x['value']);
      }
    );
  }

  else if (url == '/readD') {
      b.digitalRead('P8_14', function(x) {
        res.setHeader('Access-Control-Allow-Origin','*');
        res.writeHead(200);
        res.end("" + x['value']);
      }
    );
  }

  else if (url == '/readNext') {
      b.digitalRead('P8_13', function(x) {
        res.setHeader('Access-Control-Allow-Origin','*');
        res.writeHead(200);
        res.end("" + x['value']);
      }
    );
  }

  else if (url == '/readPrev') {
      b.digitalRead('P8_11', function(x) {
        res.setHeader('Access-Control-Allow-Origin','*');
        res.writeHead(200);
        res.end("" + x['value']);
      }
    );
  }

}