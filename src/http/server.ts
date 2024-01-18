import fastify from "fastify";

const app = fastify();

app.get('/ping', () => {
    return 'pong'
})

app.listen({
    port: 3333,
    host: '0.0.0.0'
}).then(()=>{
    console.log('HTTP server listening on port 3333')
})