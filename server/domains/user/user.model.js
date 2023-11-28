// 1. Importando Mongoose
import mongoose from 'mongoose';
import validator from 'validator';
import crypto from 'crypto';
import bcrypt from 'bcrypt';

// 2. Desestructurando la fn Schema
const { Schema } = mongoose;
// 3. Creando el esquema
const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastname: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      required: [true, 'Es necesario ingresar email'],
      validate: {
        validator(email) {
          // eslint-disable-next-line no-useless-escape
          return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
        },
        message: `{VALUE} noes un email valido`,
      },
    },
    password: {
      type: String,
      required: [true, 'Es necesario ingresar password'],
      trim: true,
      minLength: [6, 'Password debe ser de al menos 6 caracteres'],
      validate: {
        validator(password) {
          if (process.env.NODE_ENV === 'development') {
            // Sin validacion rigurosa en Dev
            return true;
          }
          return validator.isStrongPassword(password, {
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 0,
            returnScore: false,
          });
        },
        message: 'Es necesario ingresar un password fuerte',
      },
    },
    emailConfirmationToken: String,
    emailConfirmationAt: Date,
  },
  { timestamps: true },
);

// Asignando metodos de instancia
UserSchema.methods = {
  // Metodo para encriptar el password
  hashPassword() {
    return bcrypt.hashSync(this.password, 10);
  },
  // Genera un token de 64 caracteres aleatorios
  generateConfirmationToken() {
    return crypto.randomBytes(64).toString('hex');
  },
};

// Hooks
UserSchema.pre('save', function presave(next) {
  // Encriptar el password
  if (this.isModified('password')) {
    this.password = this.hashPassword();
  }
  return next();
});

// 4. Compilando el modelo y exportandolo
export default mongoose.model('user', UserSchema);
