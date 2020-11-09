const client = hapi.server({
    port: 4000,
    host: 'localhost',
    routes: {
        files:{
            relativeTo: path.join(__dirname, 'public')
        }
    }
})
module.exports = client