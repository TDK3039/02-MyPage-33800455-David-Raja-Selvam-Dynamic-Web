var http = require("http");
const port = 8000;

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <h1>Hello World, my name is David.</h1>
        <p><strong>about me:</strong> I am currently studying Computer Science at Goldsmiths University.</p>
        <p><strong>interests:</strong> I like football, tennis, basketball, and R&B music.</p>
    `);
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});