const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
if (req.url === "/") {
    res.end("Hello, World!")
}
else if (req.url === "/about") {
    res.end("ABOUT")
}
else if (req.url === "/contact_us") {
    res.end("CONTACT US!")
}
else if (req.url === "/login") {
    res.end("LOGIN");
}
else if (req.url === "/fetch_data") {
    res.end("FETCH DATA");
}
else {
    res.end("404 Page Not Found");
}


});

server.listen(3000);