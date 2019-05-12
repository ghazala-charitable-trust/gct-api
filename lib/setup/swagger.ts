import { Express } from "express"
import { hostAddress } from "../config-details/server.config"

/* tslint:disable:no-var-requires */
const info = require("../../package.json")

/* tslint:disable:no-var-requires */
const expressSwagger: any = require("express-swagger-generator")

const options = {
  swaggerDefinition: {
    info: {
      description: info.description,
      title: info.name,
      version: "1.0.0"
    },
    host: hostAddress,
    basePath: "/api/v1",
    produces: ["application/json"],
    schemes: ["http"],
    securityDefinitions: {
      JWT: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        description: ""
      }
    }
  },
  // app absolute path
  basedir: __dirname,
  // relative path to the API handle folder
  files: ["./../api/routes/**/*.js", "./../api/routes/**/*.ts"]
}

export default function setupSwagger(app: Express) {
  expressSwagger(app)(options)
}
