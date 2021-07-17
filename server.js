const http = require("http");

const product = {
	id: Math.floor(Math.random() * (11 - 1) + 1),
	title: `Producto ${Math.floor(Math.random() * (11 - 1) + 1)}`,
	price: Math.round((Math.random() * (1000 - 0) + 0) * 100) / 100,
	thumbnail: `Foto ${Math.floor(Math.random() * (11 - 1) + 1)}`,
};

const server = http.createServer((request, response) => {
	response.end(JSON.stringify(product, null, 2));
});

server.listen(3000, () => {
	console.log("Servidor escuchando en el puerto 3000");
});
