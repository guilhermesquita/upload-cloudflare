import { PutObjectCommand } from "@aws-sdk/client-s3";
import fastify from "fastify";
import { r2 } from "../lib/cloudflare";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { env } from "process";

const app = fastify();

app.get('/ping', () => {
    console.log(env.DATABASE_URL)
    return 'pong'
})

app.listen({
    port: 3333,
    host: '0.0.0.0'
}).then(()=>{
    console.log('HTTP server listening on port 3333')
})


app.post('/upload', async () => {

    const signedUrl = await getSignedUrl(
        r2,
        new PutObjectCommand({
            Bucket: 'apitest',
            Key: 'file.mp4',
            ContentType: 'video/mp4',
        }),
        {expiresIn: 600}
    )

    return signedUrl
})
