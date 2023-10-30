// Importando el dotenv
import dotenv from 'dotenv';

// Invocación a la función config de la instancia dotenv
dotenv.config();
console.log(process.env.PORT);

// Creando objetos de configuración
const defaultConfig = {
  PORT: process.env.PORT || 3000, // Coma en lugar de punto y coma
  IP: process.env.IP || '0.0.0.0', // Coma en lugar de punto y coma
};

const devConfig = {
  DEV_VALUE: 100,
};

const testConfig = {
  TEST_VALUE: 100,
};

const prodConfig = {
  PROD_VALUE: 100,
};

// Creando una función selectora
function getEnvConfig(env) {
  switch (env) {
    case 'production': // Deben ser cadenas
      return prodConfig;

    case 'development': // Deben ser cadenas
      return defaultConfig;

    case 'test': // Deben ser cadenas
      return testConfig;

    default:
      return devConfig;
  }
}

// Exportar el objeto de configuración
export default {
  ...defaultConfig,
  ...getEnvConfig(process.env.NODE_ENV),
};
