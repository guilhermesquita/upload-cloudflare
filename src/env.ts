import {z} from 'zod'
require('dotenv').config();

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    CLOUDFLARE_ENDPOINT: z.string().url(),
    CLOUDFLARE_ACCESS_KEY_ID: z.string(),
    CLOUDFLARE_SECRET_ACCESS_KEY: z.string(),
})

export const env = envSchema.parse(process.env)