const http = require('http')    
                                
const hostname = process.env.hostname || '127.0.0.1'    
const port = process.env.port || 3001               

const server =
  http.createServer(            
    (req,res)=> {               

        var ArrayStrings = ["good","fortune","jokes","naughty","smart","innocent"];
var LowValue = 0;

var HighestValue = Array.length;
var value=Math.floor(Math.random()*( HighestValue-LowValue)+LowValue)
      res.statusCode = 200      
      res.setHeader('Content-Type', 'text/html') 
      res.write('<html> <head> <title> Bonus page </title> </head>')
      res.write('<body>')
      res.write(`<p>${ArrayStrings[value]}</p>`)
      res.end('</body></html>') 
    }                           
)
server.listen(port, hostname, () => {   
  console.log(`Server running at http://${hostname}:${port}/`)  
})