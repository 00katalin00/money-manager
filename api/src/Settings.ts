export default {
    API_PORT: process.env.API_PORT || 8080,

    API_VERSION: process.env.API_VERSION || 1,

    SECRET_KEY: process.env.SECRET_KEY || "fg2*a234@@**T<sdf&6AV1X1&/(!c!º*/-B93ss",

    LENGUAGE: process.env.LENGUAGE || "ES",
    
    PG_DB: process.env.MYSQL_DB || "cloud",
    PG_USER: process.env.MYSQL_USER || "cloud",
    PG_PASSWORD: process.env.MYSQL_PASSWORD || "cloud",
    PG_PORT: process.env.MYSQL_PORT || "5432",
    PG_HOST: process.env.MYSQL_HOST || "localhost", 
}