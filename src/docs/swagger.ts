import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        version: "v0.0.1",
        title: "Dokumentasi API ACARA",
        description: "Dokumentasi API ACARA",
    },
    servers: [
        {
            url: "https://be.subs.haikaldev.my.id/api",
            description: "Deploy Server"
        },
        {
            url: "http://localhost:3000/api",
            description: "Local Server"
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
            registerRequest: {
                fullName: "Haikal Mabrur",
                username: "Haikaru",
                email: "me@haikaldev.my.id",
                password: "1234",
                confirmPassword: "1234",
            },
            ActivationRequest: {
                code: "abcdef",
            },
            CreateCategoryRequest: {
                name: "Kategori Baru",
                description: "Deskripsi Kategori Baru",
                icon: "icon url",
            },
            CreateEventsRequest: {
                name: "name",
                banner: "image url",
                category: "category ObjectID",
                description: "description",
                startDate: "yyyy-mm-dd hh:mm:ss",
                endDate: "yyyy-mm-dd hh:mm:ss",
                location: {
                    region: "region id",
                    coordinates: [0, 0]
                },
                isOnline: false,
                isFeatured: true,
            },
            RemoveMediaRequest: {
                fileUrl: "",
            },
        },
    },
};

const outputFile = "./swagger_output.json";
const endpointsfile = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsfile, doc);