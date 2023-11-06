import mongoose from 'mongoose';
import log from '../config/winston';

class MongooseOdm {
  // Class constructor
  constructor(url) {
    this.url = url;
  }

  // Metodo para conectar a la BD
  async connect() {
    try {
      // Estableciendo el sistema de promesas
      // por defecto en mongoose
      mongoose.Promise = global.Promise;
      log.info(`📞📞 Conectando a la base de datos: ${this.url}`);
      const connection = await mongoose.connect(this.url);
      log.info(`📞📞 FINALIZO CONEXION 📞📞 ${typeof connection}`);
      return connection;
    } catch (error) {
      log.error('OCURRIO ERROR');
      throw new Error(
        `🥀 No se pudo establecer conexión a la base de datos debido a: ${error.message} 🥀`,
      );
    }
  }
}

export default MongooseOdm;
