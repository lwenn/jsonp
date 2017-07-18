const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = "4002";

const server = http.createServer((req, res) => {
	let currUrl = url.parse(req.url);
	let name = currUrl.query.match(/callback=(\w+)/)[1];
	let data = {
		name: name,
		from: "jsonp"
	};
	res.write(name + "(" + JSON.stringify(data) + ")");
	// console.log(currUrl)
	res.end();
});

server.listen(port, hostname, () => {
	console.log(`服务器运行在 http://${hostname}:${port}/\n`);
});