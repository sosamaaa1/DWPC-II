// Importando el DotEnv
import dotenv from 'dotenv';

// Invocación a la función config de
// la instancia dotenv
dotenv.config();

// Creando objetos de configuración
const defaultConfig = {
  PORT: process.env.PORT || 3000,
  IP: process.env.IP || '0.0.0.0',
};

const devConfig = {
  MONGO_URL: process.env.MONGO_URL,
};

const prodConfig = {
  MONGO_URL: process.env.PROD_DATABASE_URL,
};

// Creando una función selectora
function getEnvConfig(env) {
  switch (env) {
    case 'production':
      return prodConfig;
    case 'development':
      return devConfig;
    default:
      return devConfig;
  }
}

// Imprime la configuración antes de exportarla
console.log('Variables de entorno:', process.env);
console.log('Configuración cargada:', {
  ...defaultConfig,
  ...getEnvConfig(process.env.NODE_ENV),
});

// Exportar el Objeto de configuración
export default {
  ...defaultConfig,
  ...getEnvConfig(process.env.NODE_ENV),
};
