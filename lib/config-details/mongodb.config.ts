import config from "./index"

const environment: string = config.util.getEnv("NODE_ENV")

export const creds: string = config.get("DB.CREDENTIALS")
export const name: string = config.get("DB.NAME")
export const port: number = config.get("DB.PORT")
export const host: string = config.get("DB.HOST")

const dbURILocal = `mongodb://${host}:${port}/${name}`
const dbURIProduction = `mongodb+srv://${creds}:${creds}@${host}/${name}`

export const dbURI = environment === "production" ? dbURIProduction : dbURILocal
