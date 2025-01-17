const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) =>{
    if (req.url === "/") {
        let webpage = fs.readFileSync("homepage.html")
        res.end(webpage)
    }
   
    else if (req.url === "/homepage") {
        let webpage = fs.readFileSync("homepage.html")
        res.end("webpage")
    }
    else if (req.url === "/About") {}
    else if (req.url === "/Contact") {}
    else if (req.url === "/login") {
        
    }
    else {
        res.end("Error 404: Page Not Found")}
        
    });
    let PORT = 8000
    app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
});