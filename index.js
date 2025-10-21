var http = require("http");
const port = 8000;

//Create server and define response behaviour
http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <h1>Hello World, my name is David.</h1>
        <p><strong>About me:</strong> I am currently studying Computer Science at Goldsmiths University.</p>
        <p><strong>Interests:</strong></p>
        <ul>
            <li><strong>Football:</strong> My favourite player is Messi — to me, he is the best footballer in the world.</li>
            <li><strong>Tennis:</strong> Roger Federer never fails to surprise me. He plays with such elegance that he makes it look effortless.</li>
            <li><strong>Basketball:</strong> I enjoy the energy and strategy of the game it keeps me on my toes.</li>
            <li><strong>Music:</strong> I keep an open mind. I love artists like Mariah Carey, Drake, Giveon, and Michael Jackson. Whatever sounds good to my ears ends up in my playlist.</li>
            <li><strong>Classical:</strong> I am currently into Sergei Rachmaninoff Piano Concerto No. 2, especially the last 3 minutes. It feels like paradise on earth.</li>
        </ul>
    `);
    //Start server listen on port
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});