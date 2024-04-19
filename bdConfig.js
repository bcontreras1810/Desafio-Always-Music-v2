// Importamos la librería de PostgreSQL
const { Pool } = require("pg");
const dotenv = require('dotenv');

dotenv.config();

// Configuración de la base de datos
const config = {
  host: process.env.DB_HOST,
  port: 5432,
  database: "always_music",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 20,
  min: 2,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 2000,
};
// Instanciamos la clase Pool
const pool = new Pool(config);

module.exports = pool;
