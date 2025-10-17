var http = require("http");
const port = 8000;

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Dynamic Web Apps – MyPage</title>
        </head>
        <body>
            <h1>hi, i'm DAVID</h1>
            <h2>Dynamic Web Apps – MyPage</h2>

            <section>
                <strong>about me:</strong> Goldsmiths student, football fan, R&B enthusiast, and currently vibing with Node + GitHub.
            </section>

            <section style="margin-top: 20px;">
                <strong>my interests</strong><br>
                I like football, tennis, and basketball — especially when it’s a close match and the energy’s high.<br>
                I’m into R&B music, both old-school and modern — it’s what I play when I’m coding or winding down.<br>
                I enjoy working on personal projects that mix creativity and tech, and I’m always curious about how things work under the hood.<br>
                Also, I love a good routine — whether it’s gym, study, or just organizing my folders properly.
            </section>
        </body>
        </html>
    `);
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});