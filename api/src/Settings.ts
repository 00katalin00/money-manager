import { POINT_CONVERSION_COMPRESSED } from "constants";

export default {
    API_PORT: process.env.API_PORT || 8080,

    API_VERSION: process.env.API_VERSION || 1,

    SECRET_KEY: process.env.SECRET_KEY || "fg2*a234@@**T<sdf&6AV1X1&/(!c!º*/-B93ss",

    LENGUAGE: process.env.LENGUAGE || "ES",
    
    PG_DB: process.env.PG_DB || "dev-money-manager",
    PG_USER: process.env.PG_USER || "cloud",
    PG_PASSWORD: process.env.PG_PASSWORD || "cloud",
    PG_PORT: process.env.PG_PORT || "5432",
    PG_HOST: process.env.PG_HOST || "localhost", 
    PG_SCHEMA: process.env.PG_SCHEMA || "DEV"
}