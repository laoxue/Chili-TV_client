const server = hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
        cors: {
            origin: ["*"]
        }
    }
})
module.exports = server