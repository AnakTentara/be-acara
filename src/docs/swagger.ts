import swaggerAutogen from "swagger-autogen";
import { identifierToKeywordKind } from "typescript";

const doc = {
    info: {
        version: "v0.0.1",
        title: "Dokumentasi API ACARA",
        description: "Dokumentasi API ACARA",
    },
    servers: [
        {
            url: "http://localhost:3000/api",
            description: "Local Server"
        },
        {
            url: "https://wpu.haikaldev.my.id/api",
            description: "Deploy Server"
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
            },
        },
        schemas: {
            LoginRequest: {
                identifier: "Haikaru",
                password: "1234",
            },
        },
    },
};

const outputFile = "./swagger_output.json";
const endpointsfile = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsfile, doc);